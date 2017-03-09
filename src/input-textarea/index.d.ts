/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-textarea" {
    export default class InputTextarea extends React.Component<{
        autoFocus?: boolean;
        cols?: number;
        disabled?: boolean;
        error?: string;
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
    }, {}> {
        getValue(): string;
    }
}
