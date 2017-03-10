/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-checkbox" {
    export default class InputCheckBox extends React.Component<{
        disabled?: boolean;
        label?: string;
        name?: string;
        onChange: () => void;
        rawInputValue?: boolean;
    }, {}> {
        getValue(): boolean
    }
}
