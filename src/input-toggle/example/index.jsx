import React, {PureComponent, PropTypes} from 'react';
import Toggle from 'focus-components/input-toggle';

class InputToggleSample extends PureComponent {
    /**
    * Handle click action to get check value.
    */
    handleGetValueClick = () => {
        const value = this.refs.toggleTestGetValue.getValue();
        alert('Toggle value: ' + value);
    }

    /**
    * Render the component.
    * @return {object} React node
    */
    render() {
        return (
            <div>
                <h3>Input toggle</h3>
                <Toggle label='My awesome toggle' value={true}/>

                <h3>Unselected toggle</h3>
                <Toggle label='My awesome toggle' value={false} />

                <h3>Without label</h3>
                <Toggle value={true} />

                <h3>Get Toggle value</h3>
                <div style={{float: 'left', width: '300px'}}>
                    <Toggle label='My awesome toggle' ref='toggleTestGetValue' value={true}/>
                </div>
                <button className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.handleGetValueClick}>Get the toggle value</button>
            </div>
        );
    }
}

export default InputToggleSample;
