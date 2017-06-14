import map from 'lodash/map'
import reduce from 'lodash/reduce'
import React, { Component, PropTypes } from 'react';
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import isBoolean from 'lodash/isBoolean'
import InputText from '../input-text';
import isObject from 'lodash/isObject'
import capitalize from 'lodash/capitalize'
import InputArea from '../input-textarea'
import SelectRadio from '../select-radio';
import isFunction from 'lodash/isFunction'
import LiveEditor from './LiveEditor'
import '../src/style/storybook.scss'
import 'brace';
import 'brace/mode/jsx'
import 'brace/theme/github'


import material from '../src/behaviours/material';
import compStr from './test';
import ReactDOM from 'react-dom';

const verifTabObject = ['array', 'arraywithobject', 'object']

const verifTab = ['func', 'array', 'arraywithobject', 'object']
// Components

import CodeEditorComposant from 'react-ace';

function ComposantComposant({ Composant, propsComposant }) {
    return <Composant {...propsComposant} />
}

function onChangeEval(isWhatFunction, type, subElement, isFunction = false) {
    return (value) => {
        try {
            isWhatFunction(eval(value))
            if (!isFunction) {
                console.log(eval(value))
                this.setState({ [subElement]: eval(value), ['onChange' + type + subElement]: value, ['onChangeError' + type + subElement]: null, ['isOnChange' + type + subElement]: true })
            }
        } catch (ex) {
            this.setState({ ['onChange' + type + subElement]: value, ['isOnChange' + type + subElement]: false, ['onChangeError' + type + subElement]: "Pas une fonction" })
            return;
        }
        if (isFunction) {
            try {
                eval(value)('test')
                this.setState({ [subElement]: eval(value), ['onChange' + type + subElement]: value, ['onChangeError' + type + subElement]: null, ['isOnChange' + type + subElement]: true })
            } catch (t) {
                this.setState({ ['onChange' + type + subElement]: value, ['isOnChange' + type + subElement]: false, ['onChangeError' + type + subElement]: "Votre fonction génère une erreur :" + t })
            }
        }
    }
}

function renderCodeForEditor(list, state, Composant, defaultType) {
    const preCode = reduce(Object.keys(list), (acc, element) => {
        if (state[element] !== undefined && state[element] !== null && state[element] !== "") {
            if ((verifTabObject.indexOf(defaultType[element]) !== -1 || isObject(defaultType[element]) && !isString(state[element]))) {
                return acc + ` \n \t \t \t \t ${element}={${'{' + Object.keys(state[element]).reduce((acc, elm) => acc + `${elm}: '${state[element][elm]}',`, "") + "}"}}`
            }
            return acc + ` \n \t \t \t \t ${element}={${state[element]}}`
        }
        else return acc;
    }, `import React, {Component, PropTypes} from 'react';  \nimport ${Composant.displayName} from 'focus-components/${Composant.displayName}' \n class YourClass extends Component { \n \t render() { \n \t \treturn ( \n \t \t \t<${Composant.displayName}`)
    const code = preCode + "\n \t \t \t/> \n \t \t); \n \t} \n}"
    return code;
}

ComposantComposant.propTypes = {
    Composant: React.PropTypes.func,
    propsComposant: React.PropTypes.object,
};



import i18next from 'i18next';
import Modal from '../modal';
import Button from '../button';
import omitBy from 'lodash/omitBy'

// import request from 'request';
// import targz from 'tar.gz';
import tar from 'tar-stream';
import gunzip from 'gunzip-maybe';
import { Readable } from 'stream';

const extract = tar.extract();
//false
class SurComposantCompose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            isEditChange: false,
            isLiveEditor: false,
            ...props.Composant.defaultProps
        };
        onChangeEval = onChangeEval.bind(this);
        this.onChange = this.onChange.bind(this);
    };
    toBuffer(ab) {
        var buf = new Buffer(ab.byteLength);
        var view = new Uint8Array(ab);
        for (var i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    }
    componentDidMount() {
        // const exports = {};
        // const require = (toRequire) => {
        //     console.log('require', toRequire);
        //     switch (toRequire) {
        //         case 'react':
        //             return React;
        //         case 'react-dom':
        //             return ReactDOM;
        //         case '../behaviours/material':
        //             return material;
        //         case 'i18next':
        //             return i18next;
        //         default:
        //             console.warn(toRequire);
        //             return null;

        //     }
        // }
        // eval(compStr);
        // console.log(exports)


        // Streams
        // var read = request.get('https://registry.npmjs.org/focus-components/-/focus-components-2.1.7-1.tgz');
        // var parse = targz().createParseStream();

        // parse.on('entry', function (entry) {
        //     console.log(entry.path);
        // });

        // read.pipe(parse);
        // var oReq = new XMLHttpRequest();
        // oReq.open("GET", "https://registry.npmjs.org/focus-components/-/focus-components-2.1.7-1.tgz", true);
        // oReq.responseType = "arraybuffer";

        // oReq.onload = function (oEvent) {
        //     var blob = new Blob([oReq.response], { type: "application/gzip" });
        //     console.log('response', blob);
        // };

        // oReq.send();
        console.time('whole');
        console.time('fetch');
        fetch('https://registry.npmjs.org/focus-components/-/focus-components-2.1.7-1.tgz')
            .then((response) => {
                console.timeEnd('fetch');
                console.time('conversion');

                return response.arrayBuffer();
            }).then((response) => {
                console.timeEnd('conversion');

                // console.log('response', response);

                var extract = tar.extract()

                extract.on('entry', function (header, stream, next) {
                    // header is the tar header
                    // stream is the content body (might be an empty stream)
                    // call next when you are done with this entry
                    console.log(header.name);
                    // console.groupCollapsed();
                    let strContent = '';
                    stream.on('data', function (data) {
                        strContent += data;
                    })


                    stream.on('end', function () {
                        // console.log(strContent)
                        // console.groupEnd();
                        strContent = '';
                        next() // ready for next entry
                        // console.log('end');

                    })

                    stream.resume() // just auto drain the stream
                })

                extract.on('finish', function () {
                    // all entries read
                    // console.log('finish');
                    console.timeEnd('unzip');
                    console.timeEnd('whole');

                })
                console.time('toStream');

                var s = new Readable();
                s._read = function noop() { }; // redundant? see update below
                s.push(this.toBuffer(response));
                s.push(null);
                console.timeEnd('toStream');
                console.time('unzip');

                s.pipe(gunzip()).pipe(extract);

            });


    }


    onChange(element) {
        const tab = element.slice(element.indexOf('<'), element.indexOf('/>'))
        const newNewTab = tab.split('\n').map(el => el.trim())
        newNewTab.slice(0, 1).slice(newNewTab.length - 1, 1)
        const nexNewNewTab = newNewTab.reduce((acc, elm) => { if (elm && elm.indexOf('=') !== -1) { acc.push(elm); } return acc }, [])//omitBy(newNewTab, element => element.indexOf('=') === -1 )
        nexNewNewTab.map(element => {
            const stateName = element.slice(0, element.indexOf('='))
            const preElementOfState = element.slice(0 - (element.length - element.indexOf('=') - 1)).trim().slice(0 - (element.length - element.indexOf('{') - 1))
            const elementOfState = preElementOfState.slice(0, preElementOfState.lastIndexOf('}'))

            try {
                let evalElementOfState = elementOfState
                if (verifTab.indexOf(this.props.defaultType[stateName]) !== -1) {
                    evalElementOfState = eval(elementOfState)
                    this.setState({ [stateName]: evalElementOfState === "" ? " " : evalElementOfState, ['onChange' + capitalize(this.props.defaultType[stateName]) + stateName]: elementOfState })
                } else {
                    this.setState({ [stateName]: evalElementOfState === "" ? " " : evalElementOfState })

                }
            } catch (t) {

                console.log(t)
                this.setState({ [stateName]: elementOfState === "" ? " " : elementOfState, ['onChangeFunc' + stateName]: elementOfState })
            }
        })
    };
    renderInputComposant(subElement) {
        return (
            <InputText
                onChange={(value) => this.setState({ [subElement]: value })}
                rawInputValue={this.state[subElement]} />
        )
    }
    renderBoolComposant(subElement) {
        return (
            <SelectRadio
                onChange={(value) => this.setState({ [subElement]: !this.state[subElement] })}
                rawInputValue={this.state[subElement]}
                values={[{ code: true, label: 'True' }, { code: false, label: 'False' }]} />

        )
    }
    renderFuncComposant(subElement) {
        const onChangeErrorFunc = this.state['onChangeErrorFunc' + subElement];
        const isOnChangeFunc = this.state['isOnChangeFunc' + subElement];
        const onChangeValue = this.state['onChangeFunc' + subElement];
        return (
            <div data-focus='documentation-input-text'><InputText
                onChange={onChangeEval(isFunction, 'Func', subElement, true)}
                rawInputValue={onChangeValue}
            />
                {isOnChangeFunc && <i className="material-icons">check</i>}
                <div data-focus='documentation-error'>{onChangeErrorFunc && <span style={{ color: 'red' }}>{onChangeErrorFunc}</span>}</div>
            </div>
        )
    }
    renderObjectComposant(subElement) {
        const test = this.state['onChangeObject' + subElement] ? this.state['onChangeObject' + subElement] : isString(this.state[subElement]) ? this.state[subElement] : '{' + Object.keys(this.state[subElement]).reduce((acc, elm) => acc + `${elm}: '${this.state[subElement][elm]}', `, "") + "}"
        return (
            <div><InputText
                onChange={onChangeEval(isObject, 'Object', subElement)}
                rawInputValue={test !== "" ? test : undefined}
            />
            </div>
        )
    }
    renderTabWithObject(subElement, defaultType) {
        return (
            <div><InputText
                onChange={onChangeEval(isArray, 'arraywithobject', subElement)}
                rawInputValue={this.state['onChangeArraywithobject' + subElement]}
            />
                {this.state['isOnChangeArraywithobject' + subElement] && <i className="material-icons">check</i>}
            </div>
        )
    }
    renderTabComposant(subElement, defaultType) {
        return (
            <SelectRadio
                onChange={(value) => this.setState({ [subElement]: value })}
                rawInputValue={this.state[subElement]}
                values={defaultType.map(el => ({ code: el, label: el || 'undefined' }))} />

        )
    }

    renderAllComposant(element) {
        console.log('element', element, this.props);
        if (this.props.defaultType[element] === 'string') {
            return this.renderInputComposant(element)
        } else if (isArray(this.props.defaultType[element]) && !isObject(this.props.defaultType[element][0])) {
            return this.renderTabComposant(element, this.props.defaultType[element])
        } else if (this.props.defaultType[element] === 'arraywithobject') {
            return this.renderTabWithObject(element, this.props.defaultType[element])
        } else if (this.props.defaultType[element] === 'bool') {
            return this.renderBoolComposant(element)
        } else if (this.props.defaultType[element] === 'func') {
            return this.renderFuncComposant(element)
        } else if (this.props.defaultType[element] === 'object' || isObject(this.props.defaultType[element])) {
            return this.renderObjectComposant(element)
        } else {
            return this.renderInputComposant(element)
        }
    }
    _toggleVisible() {
        this.setState({ isLiveEditor: !this.state.isLiveEditor });
    }
    render() {
        const list = { ...this.props.defaultType }
        return (
            <div data-focus='documentation'>
                <div data-focus='documentation-props'>
                    <div data-focus='documentation-props-title'>Les props</div>
                    {list && map(Object.keys(list), (element) => {
                        return <div data-focus='documentation-props-content' >
                            <div data-focus='documentation-label'>{element}</div>
                            <div data-focus='documentation-input'>
                                {this.renderAllComposant(element)}
                            </div>
                        </div>
                    })}

                </div>
                <div data-focus='documentation-live'>
                    <div data-focus='documentation-composant'>
                        <div data-focus='documentation-composant-title'>Le Composant</div>
                        <div data-focus='documentation-button'><button onClick={() => this.setState({ isVisible: !this.state.isVisible })}>Faire revivre</button></div>
                        <div data-focus='documentation-composant-content'>{this.state.isVisible && <div><ComposantComposant propsComposant={this.state} Composant={this.props.Composant} /></div>}</div>
                    </div>
                    <div data-focus='documentation-editor'>
                        <div data-focus='documentation-live-editor'>
                            <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect' onClick={this._toggleVisible.bind(this)}>
                                <i className='material-icons' style={{ color: 'white' }}>{`expand_${this.state.isLiveEditor ? 'more' : 'less'} `}</i>
                            </button>
                        </div>
                        {this.state.isLiveEditor && <LiveEditor onChange={this.onChange} theme='solarized light' valueOfEditor={renderCodeForEditor(list, this.state, this.props.Composant, this.props.defaultType)} />}
                    </div>
                </div>
            </div>
        );
    };
};

SurComposantCompose.displayName = 'SurComposantCompose';
// SurComposantCompose.propTypes = {
//     cancelButtonLabel: PropTypes.string,
//     cancelHandler: PropTypes.func,
//     confirmButtonLabel: PropTypes.string,
//     confirmHandler: PropTypes.func
// };
// SurComposantCompose.defaultProps = {
//     open: false,
//     cancelButtonLabel: 'modal.confirmation.cancel',
//     confirmButtonLabel: 'modal.confirmation.confirm'
// };
export default SurComposantCompose;


// if(isArray(this.state[element])){

// }


// return <div>{map(this.state[element], (subElement, index)=> {
//   if(isObject(subElement)) return <div>{map(Object.keys(subElement), subSubElement => {
//     return <div>{subSubElement} : <InputText rawInputValue={subElement[subSubElement]} onChange={(value) => {
//       const newTab = [...this.state[element]];
//       newTab[index] = {...subElement, [subSubElement] : value};
//       this.setState({
//       [element] : newTab
//
//     })
//   }
//   }/></div>
//   })}</div>
//   return <div>{index} : <InputText rawInputValue={subElement} onChange={(value) => {
//     const newTabb = [...this.state[element]]
//     newTabb[index] = value
//     this.setState({
//     [element] : newTabb
//
//   })}
// }/></div>
// })}</div>
