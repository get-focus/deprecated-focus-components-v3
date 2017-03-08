import React, {PureComponent, PropTypes} from 'react';
import Radio from 'focus-components/input-radio';

class InputRadioSample extends PureComponent {
    render() {
        return(
            <div>
                <div>
                    <h3>With value : False</h3>
                    <Radio name="options1" label="Value False" />
                    <h3>With value : True</h3>
                    <Radio name="options2" rawInputValue={true} label="Value True" />
                </div>
            </div>
        );
    }
}

export default InputRadioSample;
