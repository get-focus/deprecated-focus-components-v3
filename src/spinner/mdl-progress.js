import React, {PureComponent} from 'react';
import MDBehaviour from '../behaviours/material';

@MDBehaviour('mdlProgress')
class MdlProgress extends PureComponent {
    render() {
        return (
            <div data-focus='mdl-progress' ref='mdlProgress' className='mdl-progress mdl-js-progress mdl-progress__indeterminate'></div>
        );
    }
}
MdlProgress.displayName = 'MdlProgress';
export default MdlProgress;
