import React, {PropTypes} from 'react';
import i18next from 'i18next';

function Snackbar({actionHandler, actionText, content, deleteMessage, messageId, type}) {
    const ariaProps = { 'aria-hidden': 'true', 'aria-live':'assertive', 'aria-atomic':'true', 'aria-relevant': 'text' };
    return (
        <div data-focus='snackbar' className='mdl-js-snackbar mdl-snackbar mdl-snackbar--active animated slideInUp' data-message-type={type} data-upgraded='MaterialSnackbar' {...ariaProps}>
            <div className='mdl-snackbar__text'>{i18next.t(content)}</div>
            {actionHandler && actionText &&
                <button className='mdl-snackbar__action' type='button' onClick={() => { actionHandler(props); deleteMessage({messageId}); }}>
                    {i18next.t(actionText)}
                </button>
            }
            <button className='mdl-snackbar__close' type='button' onClick={() => deleteMessage({messageId})}>
                <i className='material-icons'>clear</i>
            </button>
        </div>
    );
}
Snackbar.displayName = 'Snackbar';
Snackbar.propTypes = {
    actionHandler: PropTypes.func,
    actionText: PropTypes.string,
    messageId: PropTypes.string,
    message: PropTypes.string,
    deleteMessage: PropTypes.func,
    type: PropTypes.string
};
export default Snackbar;
