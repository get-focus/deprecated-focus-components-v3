/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-display/checkbox" {
    export default function DisplayCheckbox(props: {
        className?: string;
        name?: string;
        rawInputValue?: boolean;
    }): React.ReactElement<any>
}
