import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import Material from '../behaviours/material';


@Material('mdlHolder')
class InputToggle extends PureComponent {
    getValue = () => {
        const domElement = ReactDOM.findDOMNode(this.refs.toggle);
        return domElement.checked;
    };

    handleOnChange = ({target: {checked}}) => {
        const {onChange} = this.props;
        onChange(checked);
    };

    render() {
        const {label, rawInputValue} = this.props;
        return (
            <label className='mdl-switch mdl-js-switch mdl-js-ripple-effect' data-focus='input-toggle' ref='mdlHolder'>
                <input checked={rawInputValue} className='mdl-switch__input' onChange={this.handleOnChange} ref='toggle' type='checkbox' />
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
