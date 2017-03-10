import React, {Component, PropTypes} from 'react';
import i18next from 'i18next';
import Modal from '../modal';
import Button from '../button';


class ConfirmationModal extends Component {
    constructor(props) {
        super(props);
        this._handleConfirm = this._handleConfirm.bind(this);
        this._handleCancel = this._handleCancel.bind(this);
        this._handleModalClose = this._handleModalClose.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.state = {
            fromButtonClick: false
        };
    };

    /**
    * Confirmation action handler
    */
    _handleConfirm() {
        this.toggleOpen();
        if (this.props.confirmHandler) {
            this.props.confirmHandler();
        }
    };

    /**
    * Cancel action handler
    */
    _handleCancel() {
        this.toggleOpen();
        if (this.props.cancelHandler) {
            this.props.cancelHandler();
        }
    };

    _handleModalClose() {
        if (this.props.cancelHandler && !this.state.fromButtonClick) {
            this.props.cancelHandler();
        }
        this.setState({fromButtonClick: false});
    };

    toggleOpen() {
        this.setState({
            fromButtonClick: true
        }, () => {
            this.refs.modal.toggleOpen();
        });
    };

    render() {
        return (
            <div data-focus='confirmation-modal'>
                <Modal onModalClose={this._handleModalClose} open={this.props.open} ref='modal'>
                    <div data-focus='confirmation-modal--title'>
                        <h1>{i18next.t('focus.components.modal.confirmation.title')}</h1>
                    </div>
                    <div data-focus='confirmation-modal--content'>
                        {this.props.children}
                    </div>
                    <div data-focus='confirmation-modal--actions'>
                        <Button handleOnClick={this._handleCancel} label={i18next.t(this.props.cancelButtonLabel)} />
                        <Button handleOnClick={this._handleConfirm} label={i18next.t(this.props.confirmButtonLabel)} color='primary' />
                    </div>
                </Modal>
            </div>
        );
    };
};

ConfirmationModal.displayName = 'ConfirmationModal';
ConfirmationModal.propTypes = {
    open: PropTypes.boolean,
    cancelButtonLabel: PropTypes.string,
    cancelHandler: PropTypes.func,
    confirmButtonLabel: PropTypes.string,
    confirmHandler: PropTypes.func
};
ConfirmationModal.defaultProps = {
    open: false,
    cancelButtonLabel: 'focus.components.modal.confirmation.cancel',
    confirmButtonLabel: 'focus.components.modal.confirmation.confirm'
};
export default ConfirmationModal;
