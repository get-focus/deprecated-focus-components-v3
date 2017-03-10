/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-text" {
    export default class InputText extends React.Component<{
        autoFocus?: boolean;
        disabled?: boolean;
        error?: string;
        formatter?: (text: string | number) => string;
        maxLength?: number;
        name: string;
        onChange: (value: string) => void;
        onClick?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
        onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
        onKeyDown?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
        onKeyPress?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
        placeholder?: string;
        rawInputValue?: string | number;
        size?: number;
        type?: string;
        valid?: boolean;
    }, {}> {
        refs: {
            inputText: HTMLDivElement;
            htmlInput: HTMLInputElement;
        }
        getValue(): string | number;
    }
}
