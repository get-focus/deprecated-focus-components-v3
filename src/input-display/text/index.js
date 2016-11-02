import React, {PropTypes} from 'react';
import i18next from 'i18next';


function DisplayText({className, formattedInputValue}) {
    return(
        <span className={className}>{i18next.t(formattedInputValue)}</span>
    );
}

DisplayText.displayName = 'DisplayText';
DisplayText.propTypes = {
    className: PropTypes.string,
    formattedInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DisplayText;
