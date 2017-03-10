/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-display/text" {
    export default function DisplayText(props: {
        className?: string;
        formattedInputValue?: string | number;
    }): React.ReactElement<any>
}
