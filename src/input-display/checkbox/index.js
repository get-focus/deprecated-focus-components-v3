import React, {PropTypes} from 'react';
import i18next from 'i18next';


function DisplayCheckbox({className, name, rawInputValue}) {
    const stringValue = rawInputValue ? 'true' : 'false';
    return <span className={className} id={name} name={name}>{i18next.t(`display.checkbox.${stringValue}`)}</span>
}

DisplayCheckbox.displayName = 'DisplayCheckbox';
DisplayCheckbox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    rawInputValue: PropTypes.bool
};
export default DisplayCheckbox;
