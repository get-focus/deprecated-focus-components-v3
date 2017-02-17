import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import Material from '../behaviours/material';
import {InputBehaviour} from '../behaviours/input-component';


@Material('mdlHolder')
@InputBehaviour
class InputCheckBox extends PureComponent {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    };

    getValue = () => {
        const domElement = ReactDOM.findDOMNode(this.refs.checkbox);
        return domElement.checked;
    };

    componentDidUpdate() {
        const {rawInputValue} = this.props;
        const method = rawInputValue ? 'add' : 'remove';
        const node = ReactDOM.findDOMNode(this.refs.mdlHolder);
        if (node) {
            node.classList[method]('is-checked');
        }
    };

    _handleonChange({target: {checked}}) {
        const {onChange} = this.props;
        onChange(checked);
    };

    render() {
        const validInputProps = this._checkProps(this.props);
        const {label, rawInputValue} = this.props;
        return (
          <div data-focus='input-checkbox-container'>
            <label className={'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'} data-focus='input-checkbox' ref='mdlHolder'>
                <input checked={rawInputValue} className='mdl-checkbox__input' ref='checkbox' type='checkbox' {...validInputProps}/>
                {label && <span className='mdl-checkbox__label'>{i18next.t(label)}</span>}
            </label>
          </div>
        );
    };
}


InputCheckBox.displayName = 'InputCheckBox';
InputCheckBox.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    rawInputValue: PropTypes.bool.isRequired
};
InputCheckBox.defaultProps = {
    rawInputValue: false,
    disabled: false
};
export default InputCheckBox;
