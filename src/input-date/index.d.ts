/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-date" {
    export default class Date extends React.Component<{
        beforeValueGetter?: (date: string) => string;
        disabled?: boolean;
        drops?: "up" | "down";
        error?: string;
        locale?: string;
        name: string;
        onChange: (date: string) => void;
        placeholder?: string;
        rawInputValue?: string;
        showDropdowns?: boolean;
        valid?: boolean;
        validate?: (date: string) => boolean;
    }, {}> {
        getValue(): string
    }
}
