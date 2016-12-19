import React, {PureComponent} from 'react';
import MDBehaviour from '../behaviours/material';

@MDBehaviour('mdlSpinner')
class MdlSpinner extends PureComponent {
    render() {
        return (
            <div data-focus='mdl-spinner' ref='mdlSpinner' class='mdl-spinner mdl-js-spinner is-active'></div>
        );
    }
}
MdlSpinner.displayName = 'MdlSpinner';
export default MdlSpinner;
