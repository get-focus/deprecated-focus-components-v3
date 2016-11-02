import React, {PropTypes} from 'react';
import i18next from 'i18next';


function DisplayText({style, formattedInputValue}) {
    return(
        <span className={className}>{i18next.t(formatter(formattedInputValue))}</span>
    );
}

DisplayText.displayName = 'DisplayText';
DisplayText.propTypes = {
    className: PropTypes.object,
    formattedInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DisplayText;
