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
        const {unformatter} = this.props;
        const domEl = ReactDOM.findDOMNode(this.refs.htmlInput);
        return unformatter(domEl.value);
    };
    /**
    * Handle the change on the input text, it only propagate the value.
    * @param  {object} evt - The react DOM event.
    * @return {object} - The function onChannge from the props, called.
    */
    _handleInputChange = (evt) => {
        const {unformatter, onChange} = this.props;
        const {value} = evt.target;
        return onChange(unformatter(value));
    };
    /**
    * @inheritdoc
    * @override
    */
    render() {
        const { autoFocus, disabled, formatter, maxLength, onFocus, onClick, onKeyPress, error, name, placeholder, style, rawInputValue, size, type} = this.props;
        const value = formatter(rawInputValue);
        const pattern = error ? 'hasError' : null; //add pattern to overide mdl error style when displaying an focus error.
        const inputProps =  { autoFocus, disabled, onKeyPress, maxLength, onFocus, onClick, id: name, onChange: this._handleInputChange, pattern, size, type, value };
        const mdlClasses = `mdl-textfield mdl-js-textfield${error ? ' is-invalid' : ''}`;
        return (
            <div data-error={!!error} data-focus='input-textarea'>
                <div className={mdlClasses} ref='inputTextarea' style={style}>
                    <textarea className='mdl-textfield__input' ref='htmlInput' {...inputProps} />
                    <label className='mdl-textfield__label' htmlFor={name}>{i18next.t(placeholder)}</label>
                </div>
                {error && <div className='label-error' ref='error'>{error}</div>}
            </div>
        );
    }
}

//Static props.
InputTextarea.displayName = 'InputTextarea';
InputTextarea.defaultProps = {
    type: 'text',
    formatter: identity,
    unformatter: identity,
    minLength: 0,
    //required: false,
    rows: 6,
    cols: 50
};
InputTextarea.propTypes = {
    cols: PropTypes.number,
    error: PropTypes.string,
    formatter: PropTypes.func,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
    placeholder: PropTypes.string,
    //required: PropTypes.bool,
    rawInputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    rows: PropTypes.number,
    type: PropTypes.string,
    unformatter: PropTypes.func
};
export default InputTextarea;
