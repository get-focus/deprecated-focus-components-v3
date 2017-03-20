import React, {PureComponent, PropTypes} from 'react';
import Label from 'focus-components/label';

class LabelExample extends PureComponent {
    render() {
        return(
            <div>
                <form>
                    <Label name='Hello Label Test' value='labelTest' className='mdl-textfield__label'/>
                </form>
            </div>
        );
    }
}

export default LabelExample;
