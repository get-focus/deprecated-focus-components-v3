//dependencies
import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import find from 'lodash/find';
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
    const returnValue = rawValue ? rawValue : propsValue
    if(UNSELECTED_KEY === rawValue) {
        return null;
    }
    const {type} = this.props;
    return type === 'number' ? +returnValue : returnValue;
}


/**
* Component standing for an HTML input.
* https://github.com/CreativeIT/getmdl-select/
*/
class Select extends PureComponent {
    componentDidMount() {
        const selectMenu = ReactDOM.findDOMNode(this.refs["selectMenu"]);
        componentHandler.upgradeElement(selectMenu);

    }

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
    _handleSelectChange = (val, value) => {
        const {onChange, valueParser, rawInputValue} = this.props;
        ReactDOM.findDOMNode(this.refs["selectMenu"]).parentNode.classList.remove('is-visible');
        return onChange(valueParser.call(this, rawInputValue, value));
    };

    /** inheritdoc */
    _renderOptions({defaultValue, labelKey, hasUndefined, currentValue, isRequired, rawInputValue, values = [], valueKey, isActiveProperty, unSelectedLabel}) {
        values = hasUndefined  ? union([{[labelKey]: i18next.t(unSelectedLabel), [valueKey]: UNSELECTED_KEY}], this.props.values) : values;
        return values.filter(v => isUndefined(v[isActiveProperty]) || v[isActiveProperty] === true) // Filter on the active value only
        .map((val, idx) => {
            const optVal = `${val[valueKey]}`;
            const elementValue = val[labelKey];
            const isSelected = optVal === rawInputValue;
            const optLabel = isUndefined(elementValue) || isNull(elementValue) ? i18next.t(unSelectedLabel) : i18next.t(elementValue);
            return (
                <li key={idx} className='mdl-menu__item' data-selected={isSelected} data-val={optVal} onClick={() => this._handleSelectChange(val, optVal)}>{optLabel}</li>
            );
        });
    }

    /**
    * @inheritdoc
    * @override
    */
    render() {
        const { autoFocus, error, labelKey, name, placeholder, hasUndefined, style, rawInputValue, valueKey, disabled, onChange,index, size, valid, unSelectedLabel,  defaultValue } = this.props;
        const selectProps = { autoFocus, disabled, size };
        const currentValue = find(this.props.values, (o) => o[valueKey] === rawInputValue) || {};
        const currentLabel = rawInputValue ? i18next.t(currentValue[labelKey]) : i18next.t(unSelectedLabel)
        const currentDataVal = rawInputValue ? i18next.t(currentValue[labelKey]) : i18next.t(unSelectedLabel)
        const cssClass = `mdl-textfield mdl-js-textfield${!valid ? ' is-invalid' : ''}`;
        console.log(index);
        return (
            <div data-focus='select-mdl' ref='select' className={`${cssClass} getmdl-select`} data-valid={!error} style={style}>
                <input placeholder={placeholder} className='mdl-textfield__input' value={currentLabel} type='text' id={index ? `${name}${index}`:`${name}`} name={index ? `${name}${index}`:`${name}`} readOnly tabIndex={index} data-val={currentDataVal} ref='htmlSelect' {...selectProps} />
                {!disabled &&
                    <label htmlFor={index ? `${name}${index}`:`${name}`}>
                        <i className='mdl-icon-toggle__label material-icons'>keyboard_arrow_down</i>
                    </label>
                }
                {!disabled &&
                    <ul className='mdl-menu mdl-js-menu' htmlFor={index ? `${name}${index}`:`${name}`} ref='selectMenu'>
                        {this._renderOptions({...this.props, currentValue})}
                    </ul>
                }
                {!valid && <span className='mdl-textfield__error' ref='error'>{i18next.t(error)}</span>}
            </div>
        );
    }
}

Select.displayName = 'Select';
Select.defaultProps = {
    disabled: false,
    error: 'input.select-mdl.error.default',
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
Select.propTypes = {
    defaultValue: PropTypes.object,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    hasUndefined: PropTypes.bool,
    isActiveProperty: PropTypes.string,
    isRequired: PropTypes.bool,
    labelKey: PropTypes.string,
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

export default Select;
