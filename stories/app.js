import React, { Component } from 'react'
import { render } from 'react-dom'
// import material from '../src/behaviours/material';
// import compStr from './test';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
// import { Router, browserHistory } from 'react-router';
// import Routes from './routes';

// import { hasRole } from 'focus-core/user';
// import { filterByRoles } from './utilities/router'
import tar from 'tar-stream';
import gunzip from 'gunzip-maybe';
import { Readable } from 'stream';

// console.log(discoverChildModuleId(pieces, module));

// function discoverChildModuleId(object, moduleObj) {
//     'use strict';
//     let childModule = moduleObj.children.find(function (child) {
//         return object === child.exports;
//     });
//     return childModule && childModule.id;
// }
class MyTestApp extends Component {
    constructor(props) {
        super(props);

    }

    state = {}

    toBuffer(ab) {
        let buf = new Buffer(ab.byteLength);
        let view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    }

    customRequire(current, toRequire) {
        if (toRequire.startsWith('.')) {
            return this.localRequire(current, toRequire);
        } else {
            return this.nodeRequire(toRequire);
        }
    }

    nodeRequire(toRequire) {
        if (toRequire.startsWith('lodash/')) {
            return require('lodash/' + toRequire.substring(7));
        }
        // console.log('require', toRequire);
        switch (toRequire) {
            case 'material-design-lite/material':
                return require('material-design-lite/material');
            case 'react':
                return React;
            case 'react-dom':
                return ReactDOM;
            // case '../behaviours/material':
            //     return material;
            case 'i18next':
                return i18next;
            // case 'lodash/uniqueId':
            //     return require('lodash/uniqueId');
            // case 'lodash/identity':
            //     return require('lodash/identity');
            // case 'lodash/includes':
            //     return require('lodash/includes');
            // case 'lodash/debounce':
            //     return require('lodash/debounce');
            // case 'lodash/lang':
            //     return require('lodash/lang');
            // case 'lodash/find':
            //     return require('lodash/find');
            // case 'lodash/pull':
            //     return require('lodash/pull');
            case 'lodash':
                return require('lodash');
            // case 'lodash/omit':
            //     return require('lodash/omit');
            // case 'lodash/isUndefined':
            //     return require('lodash/isUndefined');
            // case 'lodash/map':
            //     return require('lodash/map');
            // case 'lodash/union':
            //     return require('lodash/union');
            // case 'lodash/filter':
            //     return require('lodash/filter');
            // case 'lodash/first':
            //     return require('lodash/first');
            // case 'lodash/snakeCase':
            //     return require('lodash/snakeCase');
            case 'moment':
                return require('moment');
            case 'closest':
                return require('closest');

            default:
                throw new Error('Missing in custom require' + toRequire);
            // return null;
        }
    }
    localRequire(current, toRequire) {
        if (toRequire.startsWith('.')) {
            let newFilename = this.getAbsolutePath(current, toRequire);
            const hasExtension = newFilename.endsWith('.js') || newFilename.endsWith('.jsx') || newFilename.endsWith('.css') || newFilename.endsWith('.scss');
            let code = null;
            let correctedFilename = null;
            if (hasExtension) {
                code = this.compiledSources[newFilename];
                correctedFilename = newFilename;
            } else {
                ['', '.js', '.jsx', '/index.js', 'index.jsx'].forEach(ext => {
                    if (!code) {
                        code = this.compiledSources[newFilename + ext];
                        correctedFilename = newFilename + ext;
                    }
                });
            }
            if (!code) {
                if (toRequire.endsWith('.css') || toRequire.endsWith('.scss')) {
                    console.warn('Warning : Missing in custom require ' + toRequire);
                    return {};
                }
                throw new Error('Missing in custom require ' + current + '###' + toRequire);
            }
            return this.customEval(correctedFilename, code);
        } else {
            throw new Error('Missing in custom require' + toRequire);
        }
    }

    isClassComponent(component) {
        return typeof component === 'function' && !!component.prototype.isReactComponent;

    }

    isFunctionComponent(component) {
        return typeof component === 'function' && String(component).includes('return React.createElement')
    }

    isReactComponent(component) {
        return this.isClassComponent(component) || this.isFunctionComponent(component);
    }
    getAbsolutePath(base, relative) {
        let stack = base.split('/'),
            parts = relative.split('/');
        stack.pop(); // remove current file name (or empty string)
        // (omit if "base" is the current folder without trailing slash)
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === '.')
                continue;
            if (parts[i] === '..')
                stack.pop();
            else
                stack.push(parts[i]);
        }
        return stack.join('/');
    }

    buildReadableProptypes(component) {
        const test = React.PropTypes;
        console.log('propTypes', component.propTypes);
    }

    makeRepo(sources, compiledSources) {
        const repository = {};
        //TODO to correct
        this.compiledSources = compiledSources;
        Object.keys(sources).forEach(name => {
            const code = compiledSources[name];
            if (code) {
                try {
                    const EvalComponent = (this.customEval(name, code) || {}).default;
                    if (this.isReactComponent(EvalComponent)) {
                        const compName = EvalComponent.displayName || EvalComponent.name || name;
                        repository[compName] = { name: compName, source: sources[name], EvalComponent, propTypes: this.buildReadableProptypes(EvalComponent) };

                    }
                } catch (e) {
                    console.warn('Error evaluating ' + name, e);
                }
            }
        });
        return repository
    }

    customEval(name, code) {
        const exports = {};
        const require = (toRequire) => (this.customRequire(name, toRequire));
        eval(code);
        return exports;
    }

    process(packageName, version) {

        console.time('whole');
        console.time('fetch');
        const compiledSources = {};
        const sources = {};

        fetch(`https://registry.npmjs.org/${packageName}/-/${packageName}-${version}.tgz`)
            .then((response) => {
                console.timeEnd('fetch');
                console.time('conversion');

                return response.arrayBuffer();
            }).then((response) => {
                console.timeEnd('conversion');

                // console.log('response', response);

                let extract = tar.extract()

                extract.on('entry', (header, stream, next) => {
                    let isSourceFile = false;
                    let isCompiledFile = false;
                    let isCss = false;

                    let radical = null;
                    let strContent = '';

                    if (this.isSourceFile(header.name)) {
                        isSourceFile = true;
                        radical = this.extractRadical(header.name, true);
                    } else if (this.isCompiledFile(header.name)) {
                        isCompiledFile = true;
                        radical = this.extractRadical(header.name, false);
                    } else if (header.name.endsWith('.css')) {
                        isCss = true;
                    }

                    // header is the tar header
                    // stream is the content body (might be an empty stream)
                    // call next when you are done with this entry

                    // console.groupCollapsed();
                    if (isSourceFile || isCompiledFile || isCss) {
                        stream.on('data', (data) => {
                            strContent += data;
                        })
                    }

                    stream.on('end', () => {
                        // console.log(strContent)
                        // console.groupEnd();
                        if (isSourceFile) {
                            sources[radical] = strContent;
                        } else if (isCompiledFile) {
                            compiledSources[radical] = strContent;
                        } else if (isCss) {
                            let css = document.createElement('style');
                            css.type = 'text/css';
                            css.innerHTML = strContent;
                            document.body.appendChild(css);
                        }
                        strContent = '';
                        isSourceFile = false;
                        isCompiledFile = false;
                        isCss = false;
                        next() // ready for next entry
                        // console.log('end');
                    })

                    stream.resume() // just auto drain the stream
                })

                extract.on('finish', () => {
                    // all entries read
                    // console.log('finish');
                    console.timeEnd('unzip');
                    console.timeEnd('whole');

                    this.setState({ repo: this.makeRepo(sources, compiledSources) });
                })
                console.time('toStream');

                let s = new Readable();
                s._read = function noop() { }; // redundant? see update below
                s.push(this.toBuffer(response));
                s.push(null);
                console.timeEnd('toStream');
                console.time('unzip');

                s.pipe(gunzip()).pipe(extract);

            });

    }

    extractRadical(filename, isSourceFile) {
        return filename.substring(isSourceFile ? 11 : 7);
    }

    isSourceFile(filename) {
        return filename.startsWith('package/src/') && filename.endsWith('.js');
    }

    isCompiledFile(filename) {
        return !filename.startsWith('package/src/') && filename.endsWith('.js');
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.process('focus-components', '3.3.3') }}>Launch</button>
                {this.state.repo && <ul>{Object.keys(this.state.repo).map(name => {
                    const { source, EvalComponent } = this.state.repo[name];
                    if (['Title', 'AutocompleteSelectConsult', 'AutocompleteSelectField'].includes(name)) {
                        return null;
                    }
                    return (
                        <li>
                            <div>
                                <div>{name}</div>
                                <div><EvalComponent /></div>
                            </div>

                        </li>
                    );
                })}
                </ul>}
            </div>
        );
    }
}

render((
    <MyTestApp />
),
    document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
);
