import React, {PureComponent, PropTypes} from 'react';
import Checkbox from 'focus-components/input-checkbox';

class InputCheckboxSample extends PureComponent {
    constructor() {
        super();
        this.state = {
            controllableCheckbox: true,
            standardCheckbox: true,
            valueCheckbox: true,
            withErrorCheckbox: false
        }
        this.handleGetValueClick = this.handleGetValueClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    
    /**
    * Handle click action to get check value.
    */
    handleGetValueClick = () => {
        const value = this.refs.cbTestGetValue.getValue();
        alert('Checkbox value: ' + value);
    }

    onChangeInput(name) {
        return value => {
            this.setState({[name]: value});
        };
    }

    /**
    * Render the component.
    * @return {object} React node
    */
    render() {
        const {controllableCheckbox, standardCheckbox, valueCheckbox, withErrorCheckbox, withoutLabelCheckbox} = this.state;
        const error = withErrorCheckbox ? null : 'To proceed, you must agree with the terms and conditions of the License Agreement.';
        return (
            <div>
                <h3>Standard checkbox</h3>
                <Checkbox label='My awsome checkbox' rawInputValue={standardCheckbox} onChange={this.onChangeInput('standardCheckbox')} />
                <br/>

                <h3>Controllable checkbox</h3>
                <Checkbox label='My awsome checkbox' rawInputValue={controllableCheckbox} onChange={this.onChangeInput('controllableCheckbox')} />
                <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={() => {this.setState({controllableCheckbox: !controllableCheckbox})}}>
                    Toggle the checkbox value
                </button>
                <br/><br/>

                <h3>Without label</h3>
                <Checkbox rawInputValue={withoutLabelCheckbox} onChange={this.onChangeInput('withoutLabelCheckbox')} />
                <br/>

                <h3>Get Checkbox value</h3>
                <Checkbox label='My awsome checkbox' ref='cbTestGetValue' rawInputValue={valueCheckbox} onChange={this.onChangeInput('valueCheckbox')} />
                <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.handleGetValueClick}>
                    Get the checkbox value
                </button>
            </div>
        );
    }
}

export default InputCheckboxSample;
