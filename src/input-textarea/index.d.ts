export interface InputTextareaProps {
    autoFocus?: boolean;
    cols?: number;
    disabled?: boolean;
    error?: string | null;
    formatter?: (text: string) => string;
    maxLength?: number;
    minLength?: number;
    name: string;
    onChange: (value: string) => void;
    onClick?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    rawInputValue?: string;
    rows?: number;
    size?: number;
    type?: string;
    wrap?: string;
}

export default class InputTextarea extends React.Component<InputTextareaProps, {}> {
    getValue(): string;
}
