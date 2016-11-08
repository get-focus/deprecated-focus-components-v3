//dependencies
import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import {isUndefined, isNull, isNumber} from 'lodash/lang';
import union from 'lodash/union';
const UNSELECTED_KEY = 'UNSELECTED_KEY';
/**
* Parse the value.
* @param  {string | number} propsValue - The value given as props to read the type.
* @param  {string} rawValue   - The raw string value.
* @return {strint | number}  - The parsed value.
*/
function _valueParser(propsValue, rawValue) {
    if(UNSELECTED_KEY === rawValue) {
        return undefined;
    }
    const {type} = this.props;
    return type === 'number' ? +rawValue : rawValue;
}


/**
* Component standing for an HTML input.
*/
class Select extends PureComponent {

    /**
    * Get the dom value of the component.
    * @return {object} - The unformated dom value.
    */
    getValue = () => {
        const {type, rawInputValue} = this.props;
        if (isNull(rawInputValue) || isUndefined(rawInputValue) || UNSELECTED_KEY === rawInputValue) return null;
        return type === 'number' ? +rawInputValue : rawInputValue;
    };

    /**
    * Handle the change on the select, it only propagates the value.
    * @param  {object} evt - The react DOM event.
    * @return {object} - The function onChange from the props, called.
    */
    _handleSelectChange = (evt) => {
        const {onChange, valueParser, rawInputValue} = this.props;
        const {value} = evt.target;
        return onChange(valueParser.call(this, rawInputValue, value));
    };

    /** inheritdoc */
    _renderOptions({hasUndefined, labelKey, isRequired, rawInputValue, values = [], valueKey, isActiveProperty, unSelectedLabel}) {
        const isRequiredAndNoValue = isRequired && (isUndefined(rawInputValue) || isNull(rawInputValue));
        if(hasUndefined || isRequiredAndNoValue) {
            values = union(
                [{[labelKey]: i18next.t(unSelectedLabel), [valueKey]: UNSELECTED_KEY}],
                values
            );
        }
        return values
        .filter(v => isUndefined(v[isActiveProperty]) || v[isActiveProperty] === true) // Filter on the
        .map((val, idx) => {
            const optVal = `${val[valueKey]}`;
            const elementValue = val[labelKey];
            const optLabel = isUndefined(elementValue) || isNull(elementValue) ? i18next.t('input.select.noLabel') : elementValue;
            return (<option key={idx} value={optVal}>{optLabel}</option>);
        });
    }

    /**
    * @inheritdoc
    * @override
    */
    render() {
        const { autoFocus, error, multiple, name, placeholder, style, rawInputValue, values, disabled, onChange, size, valid } = this.props;
        const selectProps = { autoFocus, disabled, multiple, size };
        return (
            <div data-focus='select' ref='select' data-valid={!error} style={style}>
                <select name={name} onChange={this._handleSelectChange} ref='htmlSelect' value={rawInputValue} {...selectProps}>
                    {this._renderOptions(this.props)}
                </select>
                {!valid && <div className='label-error' ref='error'>{error}</div>}
            </div>
        );
    }
}

//Static props.
Select.displayName = 'Select';
Select.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    hasUndefined: PropTypes.bool,
    isActiveProperty: PropTypes.string,
    isRequired: PropTypes.bool,
    labelKey: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    unSelectedLabel: PropTypes.string,
    rawInputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    valid: PropTypes.bool,
    valueKey: PropTypes.string,
    values: PropTypes.array.isRequired
};
Select.defaultProps = {
    disabled: false,
    error: 'input.select.error.default',
    hasUndefined: true,
    isActiveProperty: 'isActive',
    isRequired: false,
    labelKey: 'label',
    multiple: false,
    unSelectedLabel: 'select.unSelected',
    valid: true,
    values: [],
    valueKey: 'code',
    valueParser: _valueParser
};
export default Select;
