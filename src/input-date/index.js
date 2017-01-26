// Dependencies
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import i18next from 'i18next';
import InputText from '../input-text';
import DatePicker from 'react-date-picker';
import isArray from 'lodash/isArray';
import uniqueId from 'lodash/uniqueId';
import closest from 'closest';

const isISOString = value => moment(value, moment.ISO_8601).isValid();

class InputDate extends Component {
    constructor(props) {
        super(props);
        const {rawInputValue} = props;
        const state = {
            dropDownDate: isISOString(rawInputValue) ? moment(rawInputValue, moment.ISO_8601) : moment(),
            inputDate: this._formatDate(rawInputValue),
            displayPicker: false
        };
        this.state = state;
        this._inputDateId = uniqueId('input-date-');
    }

    componentWillMount() {
        moment.locale(this.props.locale);
        document.addEventListener('click', this._onDocumentClick);
    }


    componentDidMount() {
        const {drops, showDropdowns} = this.props;
        const {inputDate: startDate} = this.state;
    }

    componentWillReceiveProps({rawInputValue}) {
        this.setState({
            dropDownDate: isISOString(rawInputValue) ? moment(rawInputValue, moment.ISO_8601) : moment(),
            inputDate: this._formatDate(rawInputValue)
        });
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._onDocumentClick);
    }

    _isInputFormatCorrect = value => this._parseInputDate(value).isValid();

    _parseInputDate = inputDate => {
        const {format} = this.props;
        return moment(inputDate, format);
    };

    _formatDate = isoDate => {
        let {format} = this.props;
        if (isISOString(isoDate)) {
            if (isArray(format)) {
                format = format[0];
            }
            return moment(isoDate, moment.ISO_8601).format(format);
        } else {
            return isoDate;
        }
    };

    _onInputChange = (inputDate, fromBlur) => {
        if (this._isInputFormatCorrect(inputDate)) {
            const dropDownDate = this._parseInputDate(inputDate);
            this.setState({dropDownDate, inputDate});
        } else {
            this.setState({inputDate});
        }
        if(fromBlur !== true) {
            this.props.onChange(inputDate);
        }
    };

    _onInputBlur = () => {
        const {inputDate} = this.state;
        this._onInputChange(inputDate, true);
    };

    _onDropDownChange = (text, date) => {
        if (date._isValid) {
            this.setState({displayPicker: false}, () => {
                this.props.onChange(date.toISOString());
                this._onInputChange(this._formatDate(date.toISOString()), true) // Add 12 hours to avoid skipping a day due to different locales
            });
        }
    };

    _onInputFocus = () => {
        this.setState({displayPicker: true});
    };

    _onDocumentClick = ({target}) => {
        const targetClassAttr = target.getAttribute('class');
        const isTriggeredFromPicker = targetClassAttr ? targetClassAttr.includes('dp-cell') : false; //this is the only way to check the target comes from picker cause at this stage, month and year div are unmounted by React.
        if(!isTriggeredFromPicker) {
            //if target was not triggered inside the date picker, we check it was not triggered by the input
            if (closest(target, `[data-id='${this._inputDateId}']`, true) === undefined) {
                this.setState({displayPicker: false}, () => this._onInputBlur());
            }
        }
    };

    _handleKeyDown = ({key}) => {
        if (key === 'Tab' || key === 'Enter') {
            this.setState({displayPicker: false}, () => this._onInputBlur());
        }
    };

    getValue = () => {
        const {inputDate} = this.state;
        const rawValue = this._isInputFormatCorrect(inputDate) ? this._parseInputDate(inputDate).toISOString() : null;
        return this.props.beforeValueGetter(rawValue);
    };

    validate = () => {
        const {inputDate} = this.state;
        const {isRequired} = this.props;
        if ('' === inputDate || !inputDate) {
            return ({
                isValid: !isRequired,
                message: 'focus.components.field.required'
            });
        } else {
            return ({
                isValid: this._isInputFormatCorrect(inputDate),
                message: i18next.t('focus.components.input.date.invalid', {date: inputDate})
            });
        }
    };

    render() {
        const {disabled, error, locale, name, placeholder, valid} = this.props;
        const {dropDownDate, inputDate, displayPicker} = this.state;
        const {_onInputBlur, _onInputChange, _onInputFocus, _onDropDownChange, _onPickerCloserClick, _handleKeyDown} = this;
        const inputProps = { disabled };
        return (
            <div data-focus='input-date' data-id={this._inputDateId}>
                <InputText error={error} name={name} onChange={_onInputChange} onKeyDown={_handleKeyDown} onFocus={_onInputFocus} placeholder={placeholder} ref='input' rawInputValue={inputDate} valid={valid} {...inputProps} />
                {displayPicker &&
                    <div data-focus='picker-zone'>
                        <DatePicker
                            date={dropDownDate}
                            hideFooter
                            locale={locale}
                            onChange={_onDropDownChange}
                            ref='picker' />
                    </div>
                }
            </div>
        );
    }
}

InputDate.displayName = 'InputDate';
InputDate.propTypes =  {
    drops: PropTypes.oneOf(['up', 'down']).isRequired,
    error: PropTypes.string,
    locale: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    beforeValueGetter: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    showDropdowns: PropTypes.bool.isRequired,
    rawInputValue: (props, propName, componentName) => {
        const prop = props[propName];
        if (prop && !isISOString(prop)) {
            throw new Error(`The date ${prop} provided to the component ${componentName} is not an ISO date. Please provide a valid date string.`);
        }
    },
    valid: PropTypes.bool,
    validate: PropTypes.func
};
InputDate.defaultProps =  {
    drops: 'down',
    error: 'focus.components.input.date.error.default',
    locale: 'en',
    format: 'MM/DD/YYYY',
    beforeValueGetter: value => value,
    /**
    * Default onChange prop, that will log an error.
    */
    onChange() {
        console.error('You did not give an onChange method to an input date, please check your code.');
    },
    showDropdowns: true,
    valid: true,
    validate: isISOString
};
export default InputDate;
