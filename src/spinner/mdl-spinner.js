import React, {PureComponent} from 'react';
import MDBehaviour from '../behaviours/material';

@MDBehaviour('mdlSpinner')
class MdlSpinner extends PureComponent {
    render() {
        const {className} = this.props;
        const renderedClassName = `${className ? className : ''} mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active`
        return (
            <div data-focus='mdl-spinner' ref='mdlSpinner' className={renderedClassName}></div>
        );
    }
}
MdlSpinner.displayName = 'MdlSpinner';
export default MdlSpinner;
