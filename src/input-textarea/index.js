import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import identity from 'lodash/identity';
import i18next from 'i18next';
import MDBehaviour from '../behaviours/material';


/**
* Component standing for an HTML input.
*/
@MDBehaviour('inputTextarea')
class InputTextarea extends PureComponent {

    /**
    * Get the dom value of the component.
    * @return {object} - The unformated dom value.
    */
    getValue = () => {
        const domEl = ReactDOM.findDOMNode(this.refs.htmlInput);
        return domEl.value;
    };

    componentDidUpdate() {
        const {valid} = this.props;
        if (valid) {
            // Make sure that the main div does not hold a is-invalid class when there's no error
            // MDL keeps the class even if React removes it
            this.refs.inputTextarea.classList.remove('is-invalid');
        }
    }
    /**
    * Handle the change on the input text, it only propagate the value.
    * @param  {object} evt - The react DOM event.
    * @return {object} - The function onChannge from the props, called.
    */
    _handleInputChange = (evt) => {
        const {onChange} = this.props;
        const {value} = evt.target;
        return onChange(value);
    };
    /**
    * @inheritdoc
    * @override
    */
    render() {
        const { autoFocus, disabled, formatter, maxLength, onBlur, onFocus, onClick, onKeyPress, error, name, placeholder, style, rawInputValue, size, type, valid} = this.props;
        const value = formatter(rawInputValue === undefined || rawInputValue === null ? '' : rawInputValue);
        const pattern = valid ? null : 'hasError'; //add pattern to overide mdl error style when displaying an focus error.
        const inputProps =  { autoFocus, disabled, onBlur, onKeyPress, maxLength, onFocus, onClick, id: name, onChange: this._handleInputChange, pattern, size, type, value };
        const mdlClasses = `mdl-textfield mdl-js-textfield${!valid ? ' is-invalid' : ''}`;
        return (
            <div data-error={!!error} data-focus='input-textarea'>
                <div className={mdlClasses} ref='inputTextarea' style={style}>
                    <textarea className='mdl-textfield__input' ref='htmlInput' {...inputProps} />
                    <label className='mdl-textfield__label' htmlFor={name}>{i18next.t(placeholder)}</label>
                </div>
                {!valid && <div className='label-error' ref='error'>{error}</div>}
            </div>
        );
    }
}

//Static props.
InputTextarea.displayName = 'InputTextarea';
InputTextarea.defaultProps = {
    cols: 50,
    error: 'input.textarea.error.default',
    formatter: identity,
    minLength: 0,
    rows: 6,
    type: 'text',
    valid: true
};
InputTextarea.propTypes = {
    cols: PropTypes.number,
    error: PropTypes.string,
    formatter: PropTypes.func,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
    rawInputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    rows: PropTypes.number,
    type: PropTypes.string,
    valid: PropTypes.bool
};
export default InputTextarea;
