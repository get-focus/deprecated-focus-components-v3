import React, {Component, PropTypes} from 'react';
import i18next from 'i18next';
import GridBehaviour from '../behaviours/grid';
import MaterialBehaviour from '../behaviours/material';
import isUndefined from 'lodash/isUndefined';

@GridBehaviour
@MaterialBehaviour('inputMdl')
class Radio extends Component {
    constructor(props){
        super(props)
        this.state = {
            isChecked: isUndefined(this.props.rawInputValue) ? false : this.props.rawInputValue
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({isChecked: newProps.rawInputValue});
    }

    componentDidUpdate() {
        const {inputMdl} = this.refs;
        const {isChecked} = this.state;
        if (inputMdl) {
            const {classList} = inputMdl;
            if (isChecked === true) classList.add('is-checked');
            if (isChecked === false) classList.remove('is-checked');
        }
    }

    /**
    * Executed actions on change event.
    * @param  {event} event
    */
    _onChange() {
        this.setState({isChecked: !this.state.isChecked}, () => {
            if(this.props.onChange) {
                this.props.onChange(this.state.isChecked);
            }
        });
    }

    /**
    * Get the value from the input in  the DOM.
    * @returns The DOM node value.
    */
    getValue() {
        return this.state.isChecked;
    }

    /**
    * Render the Checkbox HTML.
    * @return {VirtualDOM} - The virtual DOM of the checkbox.
    */
    render() {
        const {isChecked} = this.state;
        const {label, name, rawInputValue} = this.props;
        // we use inputProps to be able to display 'checked' property. it is required to be able to use MDL.
        const checkedProps = isChecked ? {checked: 'checked'} : {};

        return (
            <label className='mdl-radio mdl-js-radio mdl-js-ripple-effect' data-focus="input-radio" ref='inputMdl'>
                <input className='mdl-radio__button' name={name} onChange={this._onChange} type='radio' {...checkedProps} value={rawInputValue} ref='inputRadio'/>
                <span className='mdl-radio__label'>{i18next.t(label)}</span>
            </label>
        );
    }
}

Radio.displayName = 'InputRadio';
Radio.defaultProps = {
    rawInputValue: false
};
Radio.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    rawInputValue: PropTypes.bool,
    onChange: PropTypes.func
};
export default Radio;
