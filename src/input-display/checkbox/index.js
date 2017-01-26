import React, {PropTypes} from 'react';
import i18next from 'i18next';


function InputDisplayCheckbox({className, name, rawInputValue}) {
    const stringValue = rawInputValue ? 'true' : 'false';
    return <div data-focus='input-display-checkbox' className={className} id={name} name={name}>{i18next.t(`focus.components.input.display.checkbox.${stringValue}`)}</div>
}

InputDisplayCheckbox.displayName = 'InputDisplayCheckbox';
InputDisplayCheckbox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    rawInputValue: PropTypes.bool
};
export default InputDisplayCheckbox;
