import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import Material from '../behaviours/material';


@Material('mdlHolder')
class InputCheckBox extends PureComponent {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    };

    getValue = () => {
        const domElement = ReactDOM.findDOMNode(this.refs.checkbox);
        return domElement.checked;
    };

    componentDidUpdate() {
        const {rawInputValue} = this.props;
        const method = value ? 'add' : 'remove';
        const node = ReactDOM.findDOMNode(this.refs.mdlHolder);
        if (node) {
            node.classList[method]('is-checked');
        }
    };

    handleOnChange({target: {checked}}) {
        const {onChange} = this.props;
        onChange(checked);
    };

    render() {
        const {label, rawInputValue, disabled} = this.props;
        return (
          <div data-focus='input-checkbox-container'>
            <label className={'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'} data-focus='input-checkbox' ref='mdlHolder'>
                <input checked={rawInputValue} className='mdl-checkbox__input' disabled={disabled} onChange={this.handleOnChange} ref='checkbox' type='checkbox'/>
                {label && <span className='mdl-checkbox__label'>{i18next.t(label)}</span>}
            </label>
          </div>
        );
    };
}


InputCheckBox.displayName = 'InputCheckBox';
InputCheckBox.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    rawInputValue: PropTypes.bool.isRequired
};
InputCheckBox.defaultProps = {
    rawInputValue: false,
    disabled: false
};
export default InputCheckBox;
