import React from 'react';

function AutocompleteTextConsult({label, name, type, value}) {
    return (
        <div label={label} name={name} type={type}>
            {value}
        </div>
    );
}
AutocompleteTextConsult.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default AutocompleteTextConsult;
