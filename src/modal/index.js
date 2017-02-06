import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import includes from 'lodash/includes';
import i18next from 'i18next';

/**
* Small overlay component used to listen to scroll and prevent it to leave the Modal component
*/
class ModalOverlay extends Component {
    constructor(props) {
        super(props);
        this._hideBodyOverflow = this._hideBodyOverflow.bind(this);
        this._restoreBodyOverflow = this._restoreBodyOverflow.bind(this);
    }
    componentDidMount() {
        this._hideBodyOverflow();
    }
    /**
    * Store the body overgflow property, and set it to hidden
    * @private
    */
    _hideBodyOverflow() {
        document.body.style['overflow-y'] = 'hidden';
    };
    /**
    * Restore body overflow property
    * @private
    */
    _restoreBodyOverflow() {
        document.body.style['overflow-y'] = 'auto';
    };
    /**
    * Component will unmount event handler.
    * Remove the mouse wheel listener.
    */
    componentWillUnmount() {
        // ReactDOM.findDOMNode(this.refs.overlay).removeEventListener('mousewheel', this._onScroll);
        this._restoreBodyOverflow();
    };
    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render() {
        const {children, clickHandler, show} = this.props;
        const otherProps = clickHandler ? { onClick: clickHandler } : {};
        return (
            <div className='animated fadeIn' data-animation='fadeIn' data-closing-animation='fadeOut' data-focus='modal-overlay' data-visible={show} ref='overlay' {...otherProps}>
                {children}
            </div>
        );
    };
};
ModalOverlay.displayName = 'ModalOverlay';
ModalOverlay.propTypes = {
    children: PropTypes.object,
    clickHandler: PropTypes.func,
    show: PropTypes.bool
};
ModalOverlay.defaultProps = {
    show: false
};


/**
* The modal component configuration
* @type {Object}
*/
class Modal extends Component {
    constructor(props) {
        super(props);
        this._onWheel = this._onWheel.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this._getAnimationProps = this._getAnimationProps.bind(this);
        this._closePopin = this._closePopin.bind(this);
        this.state = {
            opened: this.props.open
        };
    };

    componentWillUnmount() {
        window.clearTimeout(this._openTimeoutID);
    };

    /**
    * Wheel event handler.
    * @param  {object} event wheel event
    */
    _onWheel(event) {
        ReactDOM.findDOMNode(this.refs['modal-window']).scrollTop += 0 < event.deltaY ? 100 : -100;
    };

    _closePopin() {
        let timeout = 0;
        if (opened) {
            const modalWindow = ReactDOM.findDOMNode(this.refs['modal-window']);
            const modalOverlay = ReactDOM.findDOMNode(this.refs['modal-overlay']);
            modalWindow.classList.remove(modalWindow.getAttribute('data-animation'));
            modalWindow.classList.add(modalWindow.getAttribute('data-closing-animation'));
            modalOverlay.classList.remove(modalOverlay.getAttribute('data-animation'));
            modalOverlay.classList.add(modalOverlay.getAttribute('data-closing-animation'));
            timeout = 200;
        }
        const {opened} = this.state;
        const {onModalClose} = this.props;
        if (opened && onModalClose) {
            onModalClose();
        }
        this._openTimeoutID = setTimeout(() => {
            // Store the current modal state
            const wasOpened = this.state.opened;
            // If it was  opened, then we are closing it, so restore the body overflow before closing.
            if (wasOpened && this.refs['modal-overlay']) {
                this.refs['modal-overlay']._restoreBodyOverflow();
            }
            this.setState({
                opened: !wasOpened
            }, () => {
                if (this.refs['modal-overlay']) {
                    if (!wasOpened) {
                        // We just opened the modal, so store and hide the body overflow.
                        this.refs['modal-overlay']._hideBodyOverflow();
                    }
                }
            });
        }, timeout);
    }

    /**
    * Toggle the modal's open state
    */
    toggleOpen() {
        const {opened} = this.state;
        const {ConfirmContentComponent, confirmFunction} = this.props;
        if(opened && confirmFunction) {
            confirmFunction(
                ConfirmContentComponent,
                {
                    resolve: this._closePopin
                }
            );
        } else {
            this._closePopin();
        }
    };

    /**
    * Render the component
    * @return {XML} the rendered HTML
    */
    render() { // test for this.state.opened and return an Overlay component if true
        const {children, level, modal, overlay, size, type} = this.props;
        const animationProps = this._getAnimationProps();
        return (
            <div data-focus='modal' data-level={level} data-size={size} data-type={type} >
                {this.state.opened &&
                    <ModalOverlay clickHandler={!modal && this.toggleOpen} ref='modal-overlay' resize={'full' === type} show={overlay}>
                        <div {...animationProps} data-focus='modal-window' onClick={this._preventModalClose} ref='modal-window'>
                            <i className='material-icons' data-focus='modal-window-close' onClick={this.toggleOpen}>close</i>
                            <div onWheel={this._onWheel}>
                                {children}
                            </div>
                        </div>
                    </ModalOverlay>
                }
            </div>
        );
    };

    /**
    * Compute the animation classes
    * @return {Object} the props to attach to the component
    * @private
    */
    _getAnimationProps() {
        let openingAnimation;
        let closingAnimation;
        switch (this.props.type) {
            case 'from-menu':
            openingAnimation = 'slideInLeft';
            closingAnimation = 'slideOutLeft';
            break;
            case 'from-right':
            openingAnimation = 'slideInRight';
            closingAnimation = 'slideOutRight';
            break;
            default:
            openingAnimation = 'zoomIn';
            closingAnimation = 'zoomOut';
            break;
        }
        return ({
            className: `animated ${openingAnimation}`,
            'data-animation': openingAnimation,
            'data-closing-animation': closingAnimation
        });
    };

    /**
    * Prevent modal close when there's a click on the modal window
    * @param {Object} event - raised by the click
    * @private
    */
    _preventModalClose(event) {
        event.stopPropagation();
    };
};

Modal.displayName = 'Modal';
Modal.defaultProps = {
    ConfirmContentComponent: () => <span>{i18next.t('focus.components.modal.confirmation.text')}</span>,
    level: 0,
    modal: false,
    open: false,
    overlay: true,
    size: 'medium',
    type: 'full'
};
Modal.propTypes = {
    confirmFunction: PropTypes.func,
    ConfirmContentComponent: PropTypes.func,
    level: PropTypes.number.isRequired,
    modal: PropTypes.bool.isRequired,
    onModalClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    overlay: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    type: PropTypes.string.isRequired
};
export default Modal;
