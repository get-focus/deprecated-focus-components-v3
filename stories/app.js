import React, { Component, PropTypes as oldProptypes } from 'react'
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

import Frame from './frame';

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

    state = {
        packageName: 'focus-components',
        version: '3.3.3',
        scope: null
    }
    timer = {}

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
                ['', '.js', '.jsx', '/index.js', '/index.jsx'].forEach(ext => {
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
        const propTypes = component.propTypes || {};
        return Object.keys(propTypes).reduce((acc, name) => {
            acc[name] = Object.keys(oldProptypes).reduce((acc, propName) => {
                return oldProptypes[propName] === propTypes[name] ? propName : oldProptypes[propName].isRequired === propTypes[name] ? propName + '.isRequired' : acc;
            }, 'not found');
            return acc;
        }, {});
        // [oldProptypes].forEach(propTypes => {
        //     for (let name in propTypes) {
        //         console.log(name, propTypes[name]);
        //     }
        // });
        // console.log('propTypes', component.propTypes);
    }

    makeRepo(sources, compiledSources) {
        this.time('makingRepo');
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
                        repository[compName] = { name: compName, source: sources[name], EvalComponent, propTypes: this.buildReadableProptypes(EvalComponent), defaultProps: EvalComponent.defaultProps };

                    }
                } catch (e) {
                    console.warn('Error evaluating ' + name, e);
                }
            }
        });
        this.timeEnd('makingRepo');
        return repository
    }

    customEval(name, code) {
        const exports = {};
        const require = (toRequire) => (this.customRequire(name, toRequire));
        eval(code);
        return exports;
    }

    time(name) {
        this.timer[name] = +new Date();
    }

    timeEnd(name) {
        let duration = +new Date() - this.timer[name];
        this.setState({ [name]: duration })
    }

    process(packageName, version, scope = null) {

        this.time('whole');
        this.time('fetch');
        const compiledSources = {};
        const sources = {};
        const stylesheets = {};

        const url = scope ? `https://registry.npmjs.org/@${scope}/${packageName}/-/${packageName}-${version}.tgz` : `https://registry.npmjs.org/${packageName}/-/${packageName}-${version}.tgz`

        fetch(url)
            .then((response) => {
                this.timeEnd('fetch');
                this.time('conversion');

                return response.arrayBuffer();
            }).then((response) => {
                this.timeEnd('conversion');

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
                            // TODO make repo and on-demand loading
                            let css = document.createElement('style');
                            css.type = 'text/css';
                            css.innerHTML = strContent;
                            document.body.appendChild(css);
                            let sheet = css.sheet || css.stylesheet // IE; 
                            sheet.disabled = true;
                            // stylesheets[header.name] = { sheet, disabled: true };
                            stylesheets[header.name] = { sheet, sheetStr: strContent, disabled: true };
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
                    this.timeEnd('unzip');
                    this.timeEnd('whole');

                    this.setState({ repo: this.makeRepo(sources, compiledSources), stylesheets, processing: false });
                })
                this.time('toStream');

                let s = new Readable();
                s._read = function noop() { };
                s.push(this.toBuffer(response));
                s.push(null);
                this.timeEnd('toStream');
                this.time('unzip');

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

    launch() {
        const { scope, version, packageName } = this.state;
        this.setState({
            repo: null,
            stylesheets: null,
            processing: true,
            whole: null,
            fetch: null,
            conversion: null,
            toStream: null,
            unzip: null
        }, () => {
            document.querySelectorAll('style').forEach(item => item.remove());
            this.process(packageName, version, scope);
        })
    }

    render() {
        const { whole, fetch, conversion, toStream, unzip, makingRepo } = this.state;
        const styles = Object.keys(this.state.stylesheets || {}).filter(key => !this.state.stylesheets[key].disabled).map(key => this.state.stylesheets[key].sheetStr);
        return (
            <div>
                <div><h2>{'Config'}</h2>
                    <label>{'Package Name'}</label>
                    <input value={this.state.packageName || ''} onChange={({ target: { value } }) => this.setState({ packageName: value !== '' ? value : null })} />
                    <label>{'Version'}</label>
                    <input value={this.state.version || ''} onChange={({ target: { value } }) => this.setState({ version: value !== '' ? value : null })} />
                    <label>{'Scope'}</label>
                    <input value={this.state.scope || ''} onChange={({ target: { value } }) => this.setState({ scope: value !== '' ? value : null })} />
                </div>
                {!this.state.processing && <button onClick={() => this.launch()}>{'Launch'}</button>}
                {this.state.processing && <div>{'Processing...'}</div>}
                <div><h2>{'Stats'}</h2>
                    {fetch && <div>{`Fetching time:${fetch}ms`}</div>}
                    {conversion && <div>{`conversion time:${conversion}ms`}</div>}
                    {toStream && <div>{`toStream time:${toStream}ms`}</div>}
                    {makingRepo && <div>{`makingRepo time:${makingRepo}ms`}</div>}
                    {unzip && <div>{`unzip+makingRepo time:${unzip}ms`}</div>}
                    {unzip && makingRepo && <div>{`unzip time:${unzip - makingRepo}ms`}</div>}
                    {whole && <div>{`whole time:${whole}ms`}</div>}
                </div>
                {this.state.stylesheets && <div><h2>{'CSS stylesheets (check the box to toggle)'}</h2><ul>{Object.keys(this.state.stylesheets).map(name => {
                    return (
                        <li key={name}>
                            <input type='checkbox' checked={!this.state.stylesheets[name].disabled} onChange={() => {
                                this.setState(({ stylesheets }) => {
                                    stylesheets[name].sheet.disabled = stylesheets[name].disabled = !stylesheets[name].disabled;
                                    return { stylesheets };
                                });
                            }}
                            />
                            {name}
                        </li>)
                })}</ul></div>}
                {this.state.repo && <div><h2>{'Component list'}</h2><ul>{Object.keys(this.state.repo).map(name => {
                    const { source, EvalComponent, propTypes, defaultProps } = this.state.repo[name];
                    if (['Title', 'AutocompleteSelectConsult', 'AutocompleteSelectField'].includes(name)) {
                        return null;
                    }
                    return (
                        <li key={name}>
                            <div>
                                <h3>{name}</h3>
                                <h4>{'PropTypes'}</h4>
                                {propTypes && <ul>{Object.keys(propTypes).map(key => <li>{`${key}:${propTypes[key]}`}</li>)}</ul>}
                                <h4>{'Default Props'}</h4>
                                {defaultProps && <ul>{Object.keys(defaultProps).map(key => <li>{`${key}:${defaultProps[key]}`}</li>)}</ul>}
                                <h4>{'Component'}</h4>
                                <Frame styles={styles}><EvalComponent /></Frame>
                                <EvalComponent />

                            </div>
                        </li>
                    );
                })}
                </ul></div>
                }
            </div>
        );
    }
}

render((
    <MyTestApp />
),
    document.getElementsByClassName(`${__ANCHOR_CLASS__}`)[0]
);
