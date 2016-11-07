import React, {PropTypes} from 'react';

function AutocompleteTextConsult({label, name, type, formattedInputValue}) {
    return (
        <div label={label} name={name} type={type}>
            {formattedInputValue}
        </div>
    );
}
AutocompleteTextConsult.propTypes = {
    formattedInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string
}
export default AutocompleteTextConsult;
