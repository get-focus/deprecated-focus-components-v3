/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/button-back" {
    export default function ButtonBack(props: {
        back: () => void;
    }): React.ReactElement<any>
}
