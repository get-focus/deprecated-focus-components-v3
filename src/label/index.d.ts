/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/label" {
    export default function Label(props: {
        name: string;
        text?: string;
    }): React.ReactElement<any>
}
