import {inputHtmlAttributes, eventHtmlAttributes} from './react-html-attributes';
import {capitalize} from 'lodash';
const MODE = {isEdit: true};

export const InputBehaviour = Component => class InputComponent extends Component {

    /**
    * comments will be right there
    */
    _checkProps(props) {

        const attributesInputProps = Object.keys(props).reduce((acc, key) => {
            if(key === inputHtmlAttributes[inputHtmlAttributes.indexOf(key)]) {
                acc[key] = (key === 'value' && (props[key] === null || props[key] === undefined)) ? '' : props[key];
            }
            return acc;
        }, {});
        attributesInputProps.value = this.props.rawInputValue;
        const eventHtmlProps = eventHtmlAttributes.reduce((acc, key) => {
            if(this['_handle' + key]){
                acc[key] = this['_handle' + key]
            }
            return acc;
        }, {})

        return { ...eventHtmlProps, ...attributesInputProps };
    };
};
