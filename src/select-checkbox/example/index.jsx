import React, {PropTypes, Component} from 'react';
import SelectCheckbox from 'focus-components/select-checkbox';
import Button from 'focus-components/button';

const {pull} = _;

const possibleValues = [
    {value: 'A', label: 'Value A'},
    {value: 'B', label: 'Value B'},
    {value: 'C', label: 'Value C'},
    {value: 'D', label: 'Value D'}
];

class SelectCheckboxSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValues: ['A','B','D']
        };
        this.getValueClick = this.getValueClick.bind(this);
        this.customGetValueClick = this.customGetValueClick.bind(this);
    }

    /**
    * Handle click action to get check value.
    */
    getValueClick() {
        const values = this.refs.mySelectCheckbox.getValue();
        alert('Selected values IDs: ' + values);
    }

    /**
    * Handle click action to get check value.
    */
    customGetValueClick(key, newStatus) {
        const selectedValues = this.state.selectedValues;
        if(newStatus) {
            selectedValues.push(key);
        } else {
            pull(selectedValues, key);
        }
        this.setState({value: selectedValues});
        console.log('Selected values IDs: ' + this.state.selectedValues);
    }

    /**
    * Render the component.
    * @return {object} React node
    */
    render() {
        return (
            <div>
                <h3>List of checkboxes</h3>
                <SelectCheckbox values={possibleValues} ref="mySelectCheckbox" />
                <h3>List of checkboxes with preselected values</h3>
                <SelectCheckbox
                    value={['B','C']}
                    values={possibleValues} ref="mySelectCheckbox"
                    />
                <br />
                <Button onClick={this.getValueClick} hasRipple={true} label='Selected values' color='primary' />
                <h3>Add OnChange event</h3>
                <SelectCheckbox
                    value={this.state.selectedValues}
                    values={possibleValues} ref="mySelectCheckbox2" onChange={this.customGetValueClick}
                    />
            </div>
        );
    }
}

export default SelectCheckboxSample;
