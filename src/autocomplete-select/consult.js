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
        this._callKeyResolver(this.props.value);
    }

    componentWillReceiveProps({value}) {
        if (value !== this.props.value) this._callKeyResolver(value);
    }

    _callKeyResolver(value) {
        const {keyResolver} = this.props;
        keyResolver(value).then(label => {
            this.setState({resolvedLabel: label});
        }).catch(err => {console.error(err.message);});
    }

    render() {
        const {label, name, type, value} = this.props;
        const {resolvedLabel = value} = this.state;
        return (
            <div label={label} name={name} type={type}>
                {i18next.t(resolvedLabel)}
            </div>
        );
    }
}

AutocompleteSelectConsult.displayName = 'AutocompleteSelectConsult';
AutocompleteSelectConsult.propTypes = {
    keyResolver: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default AutocompleteSelectConsult;
