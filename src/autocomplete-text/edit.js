import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import MDBehaviour from '../behaviours/material';
import {InputBehaviour} from '../behaviours/input-component';
import debounce from 'lodash/debounce';

@MDBehaviour('materialInput')
@InputBehaviour
class AutocompleteTextEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: this.props.rawInputValue,
            suggestions: [],
            hasSuggestions: false,
            error: this.props.error,
            hasFocus: false,
            isLoading: false
        };
    }

    componentWillReceiveProps({error}) {
        if(error) {
            this.setState({error: error});
        }
    }

    componentDidMount() {
        const {inputTimeout} = this.props;
        this._debouncedQuerySearcher = debounce(this._querySearcher, inputTimeout);
    }

    // Returns the state's inputValue
    getValue = () =>  {
        const {inputValue} = this.state;
        if(inputValue !== undefined) {
            return inputValue;
        }
        else {
            return null;
        }
    };

    // Gets the defined props' querySearch and returns the object given by the promise
    // Sets the hasSuggestions' state if the given object has a none empty array
    _querySearcher = value => {
        const {querySearcher} = this.props;
        const {hasSuggestions} = this.state;

        querySearcher(value).then(({data, totalCount}) => {
            if(totalCount > 0) {
                this.setState({hasSuggestions: true, suggestions: data, error: ''});
            }
            this.refs.loader.classList.remove('mdl-progress__indeterminate');
            this.setState({isLoading: false});
        }).catch(err => {
            this.refs.loader.classList.remove('mdl-progress__indeterminate');
            this.setState({error: JSON.stringify(err), isLoading: false});
            this.refs.materialInput.classList.add('is-invalid');
        });
    };

    // Sets the state's inputValue when the user is typing
    _handleonChange = ({target: {value}}) => {
        const {onChange} = this.props;
        this.setState({inputValue: value});
        if(value.trim() == '') {
            this.setState({hasSuggestions: false});
        }
        else {
            this.refs.loader.classList.add('mdl-progress__indeterminate');
            this.setState({isLoading: true});
            this._debouncedQuerySearcher(value);
            if (onChange) onChange(value);
        }
    };

    // Sets the value input with the selected suggestion and hides the dropdown
    onResultClick(value) {
        const {onChange} = this.props;
        this.refs.inputText.value = value;
        this.setState({inputValue: value, hasSuggestions: false, suggestions: []});
        if (onChange) onChange(value);
        return value;
    };

    // Returns an html list whith the Suggestions
    renderSuggestions = () => {
        const {suggestions} = this.state;
        const allSuggestions = suggestions.map(({key, label}) => <li key={key} onMouseDown={(e) => {this.onResultClick(label); e.preventDefault();}} data-focus='option' >{label}</li>);
        return(
            <ul ref='suggestions' data-focus='options'>
                {allSuggestions}
            </ul>
        );
    };

    // Behaviour when onFocus and onBlur are triggered
    _handleonFocus = e => {
        const {hasSuggestions, hasFocus} = this.state;
        const {showAtFocus, emptyShowAll} = this.props;
        this.setState({hasFocus: !this.state.hasFocus});
        if(hasSuggestions && !showAtFocus && hasFocus === false) {
            this.setState({hasSuggestions: false});
        }

        if(!hasSuggestions && e.target.value.trim() === '' && emptyShowAll && hasFocus === false) {
            // Doing a global search here
            this._querySearcher('');
        }
        return true;
    };

    // Maybe give the option for the floating label
    render() {
        const {inputValue, hasSuggestions, hasFocus, isLoading} = this.state;

        const validInputProps = this._checkProps(this.props);

        const {inputTimeout, error, placeholder} = this.props;

        validInputProps.value = inputValue === undefined || inputValue === null  ? '' : inputValue;
        validInputProps.onBlur = this._handleonFocus;
        const inputProps = {...validInputProps};
        return(
            <div data-focus='autocompleteText'>
                <div className={`mdl-textfield mdl-js-textfield${error ? ' is-invalid' : ''}`} ref='materialInput'>
                    <div data-focus='loading' data-loading={isLoading} className='mdl-progress mdl-js-progress' ref='loader'/>
                    <input className='mdl-textfield__input' type='text' ref='inputText' {...inputProps}/>
                    <label className="mdl-textfield__label">{i18next.t(placeholder)}</label>
                    <span className="mdl-textfield__error" ref='errorMessage'>{i18next.t(error)}</span>
                </div>
                {hasSuggestions && hasFocus &&
                    this.renderSuggestions()
                }
            </div>
        );
    }
}

AutocompleteTextEdit.displayName = 'AutocompleteTextEdit';
AutocompleteTextEdit.defaultProps = {
    emptyShowAll: false,
    inputTimeout: 200,
    placeholder: 'Search here...',
    showAtFocus: false
};
AutocompleteTextEdit.propTypes = {
    emptyShowAll: PropTypes.bool, //Defines if it shows suggestions on focus when the input is empty.
    error: PropTypes.string, //Error showed message.
    inputTimeout : PropTypes.number.isRequired, //Timeout to execute the debounce function.
    onChange: PropTypes.func, //Launches the querySearcher.
    placeholder: PropTypes.string, //Placeholder field.
    querySearcher: PropTypes.func.isRequired, //Returns a promise which is connected to the web service.
    rawInputValue: PropTypes.string, //Field value.
    showAtFocus: PropTypes.bool //Defines it shows suggestions on focus.
};
export default AutocompleteTextEdit;


/*
EXAMPLE
const _querySearcher = query => {
let data = [
{
key: 'JL',
label: 'Joh Lickeur'
},
{
key: 'GK',
label: 'Guénolé Kikabou'
},
{
key: 'YL',
label: 'Yannick Lounivis'
}
];
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve({
data,
totalCount: data.length
});
}, 500);
});
};

<AutocompleteText
isEdit={isEdit}
querySearcher={_querySearcher}
placeholder={'Your search...'}
error{Something wrong happend. Retry please...}
/>
*/
