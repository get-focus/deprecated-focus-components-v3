import React, {PropTypes} from 'react';
import i18next from 'i18next';


function InputDisplayText({className, formattedInputValue}) {
    return <div data-focus='input-display-text' className={className}>{i18next.t(formattedInputValue)}</div>
}

InputDisplayText.displayName = 'InputDisplayText';
InputDisplayText.propTypes = {
    className: PropTypes.string,
    formattedInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default InputDisplayText;
