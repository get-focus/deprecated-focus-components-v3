import React, {Component, PropTypes} from 'react';
import Radio from '../input-radio';
import uniqueId from 'lodash/uniqueId';
import i18next from 'i18next';

class SelectRadio extends Component {
    constructor(props){
        super(props);
        this.state = {
            uniqueName: uniqueId('options_'),
            value: this.props.rawInputValue
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({value: newProps.rawInputValue});
    }

    /**
    * Get the value from the select in the DOM.
    * @return {string, number} selected value
    */
    getValue () {
        return this.state.value;
    }

    /**
    * handle click on radio
    * @param {object} event - the click event
    */
    _handleRadioChange(newValue) {
        const {onChange} = this.props;
        if(onChange) {
            onChange(newValue);
            return;
        }
        //Set the state then call the change handler.
        this.setState({value: newValue});
    }

    /**
    * Closure to capture key and radio status.
    * @param  {string} key the key of radio
    * @return {func} status closure
    */
    _getRadioChangeHandler(key) {
        return () => {
            this._handleRadioChange(key);
        };
    }

    /**
    * Render radio for each values
    * @return {XML} the different radio values
    */
    renderSelectRadios() {
        const {uniqueName} = this.state;
        return this.props.values.map((val, idx) => {
            const value = val[this.props.valueKey];
            const label = val[this.props.labelKey];
            const disabled = this.props.disabled;
            const isChecked = value === this.state.value;
            return (
                <Radio key={idx} label={i18next.t(label)} name={uniqueName} onChange={this._getRadioChangeHandler(value)} rawInputValue={isChecked} disabled={disabled} />
            );
        });
    }

    render() {
        return (
            <div data-focus='select-radio' >
                {this.renderSelectRadios()}
            </div>
        );
    }
}

SelectRadio.displayName = 'SelectRadio';
SelectRadio.defaultProps = {
    values: [],
    valueKey: 'code',
    labelKey: 'label',
    disabled: false
};
export const defaultTypeSelectRadio = {
  values: 'arrayWithObject',
  rawInputValue: 'string',
  valueKey: 'string',
  labelKey: 'string',
  onChange: 'func',
  disabled: 'bool'
};
SelectRadio.propTypes = {
    values: PropTypes.array,
    rawInputValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
};
export default SelectRadio;
