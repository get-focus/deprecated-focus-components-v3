import React, {Component, PropTypes} from 'react';
import AutocompleteSelectEdit from './edit';
import AutocompleteSelectConsult from './consult';
import i18next from 'i18next';


class AutocompleteSelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customError: null
        };
    }

    componentWillReceiveProps({error}) {
        this.setState({customError: error});
    }

    getValue = () => {
        const {editing, formattedInputValue} = this.props;
        if (editing) {
            return this.refs.autocomplete.getValue();
        } else {
            return formattedInputValue;
        }
    };

    _handleAutocompleteBadInput = formattedInputValue => {
        this.setState({customError: i18next.t('input.autocomplete.error.invalid', {formattedInputValue})})
    };

    _handleAutocompleteChange = rawInputValue => {
        const {onChange} = this.props;
        this.setState({customError: null}, () => {
            if (onChange) onChange(rawInputValue);
        });
    };

    _renderEdit = () => {
        const {customError} = this.state;
        return (
            <AutocompleteSelectEdit
                customError={customError}
                onBadInput={this._handleAutocompleteBadInput}
                onChange={this._handleAutocompleteChange}
                ref='autocomplete'
                {...this.props}
                />
        );
    };

    _renderConsult = () => {
        return <AutocompleteSelectConsult {...this.props} />
    };

    render() {
        const {editing} = this.props;
        return editing ? this._renderEdit() : this._renderConsult();
    }
}

AutocompleteSelectField.displayName = 'AutocompleteSelectField';
AutocompleteSelectField.propTypes = {
    editing: PropTypes.bool.isRequired,
    formattedInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    keyResolver: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    querySearcher: PropTypes.func.isRequired,
    rawInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default AutocompleteSelectField;
