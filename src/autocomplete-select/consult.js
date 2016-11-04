import React, {Component, PropTypes} from 'react';
import i18next from 'i18next';

class AutocompleteSelectConsult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resolvedLabel: undefined
        };
    }

    componentDidMount() {
        this._callKeyResolver(this.props.formattedInputValue);
    }

    componentWillReceiveProps({formattedInputValue}) {
        if (formattedInputValue !== this.props.formattedInputValue) this._callKeyResolver(formattedInputValue);
    }

    _callKeyResolver(formattedInputValue) {
        const {keyResolver} = this.props;
        keyResolver(formattedInputValue).then(label => {
            this.setState({resolvedLabel: label});
        }).catch(err => {console.error(err.message);});
    }

    render() {
        const {label, name, type, formattedInputValue} = this.props;
        const {resolvedLabel = formattedInputValue} = this.state;
        return (
            <div label={label} name={name} type={type}>
                {i18next.t(resolvedLabel)}
            </div>
        );
    }
}

AutocompleteSelectConsult.displayName = 'AutocompleteSelectConsult';
AutocompleteSelectConsult.propTypes = {
    formattedInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    keyResolver: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
};
export default AutocompleteSelectConsult;
