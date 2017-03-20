import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import Material from '../behaviours/material';
import {InputBehaviour} from '../behaviours/input-component';


@Material('mdlHolder')
@InputBehaviour
class InputToggle extends PureComponent {
    getValue = () => {
        const domElement = ReactDOM.findDOMNode(this.refs.toggle);
        return domElement.checked;
    };

    _handleonChange = ({target: {checked}}) => {
        const {onChange} = this.props;
        onChange(checked);
    };

    render() {
        const validInputProps = this._checkProps(this.props);
        const {label,rawInputValue} = this.props;
        validInputProps.checked = rawInputValue;
        return (
            <label className='mdl-switch mdl-js-switch mdl-js-ripple-effect' data-focus='input-toggle' ref='mdlHolder'>
                <input className='mdl-switch__input' ref='toggle' type='checkbox' {...validInputProps} />
                {label && <span className='mdl-switch__label'>{i18next.t(label)}</span>}
            </label>
        );
    }
}

InputToggle.displayName = 'InputToggle';
InputToggle.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    rawInputValue: PropTypes.bool.isRequired
};
InputToggle.defaultProps = {
    rawInputValue: false
};
export default InputToggle;
