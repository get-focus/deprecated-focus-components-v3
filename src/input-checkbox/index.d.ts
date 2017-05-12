export interface InputCheckBoxProps {
    disabled?: boolean;
    label?: string;
    name?: string;
    onChange: () => void;
    rawInputValue?: boolean;
}

export default class InputCheckBox extends React.Component<InputCheckBoxProps, {}> {
    getValue(): boolean
}
