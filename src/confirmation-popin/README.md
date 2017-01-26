
```javascript
import React, {PureComponent} from 'react';
import {connect as conntectToConfirm} from 'focus-application/behaviours/confirm';
import Modal from 'focus-components/modal';

class Home extends PureComponent {
    render() {
        const {confirm} = this.props;
        return (
            <div data-demo='home-view'>
                <Modal confirmFunction={confirm}>
                    <div>test</div>
                </Modal>
            </div>
        );
    }
};
const HomeExtended = conntectToConfirm(Home);
export default HomeExtended;
```
