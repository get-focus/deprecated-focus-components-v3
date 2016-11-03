import React, {PropTypes, PureComponent} from 'react';
import AutocompleteTextEdit from './edit';
import AutocompleteTextConsult from './consult';

class AutocompleteTextField extends PureComponent {

    getValue = () => {
        const {isEdit, value} = this.props;
        if (isEdit) {
            return this.refs.autocomplete.getValue();
        } else {
            return value;
        }
    };

    _handleAutocompleteChange = value => {
        const {onChange} = this.props;
        if(onchange) onChange(value);
    };

    _renderEdit = () => (
        <AutocompleteTextEdit onChange={this._handleAutocompleteChange} ref='autocomplete' {...this.props} />
    );

    _renderConsult = () => (
        <AutocompleteTextConsult {...this.props} />
    );

    render() {
        const {isEdit} = this.props;
        return isEdit ? this._renderEdit() : this._renderConsult();
    }
}

AutocompleteTextField.displayName = 'AutocompleteTextField';
AutocompleteTextField.propTypes = {
    isEdit: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    querySearcher: PropTypes.func.isRequired
};
export default AutocompleteTextField;
