/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/button-back-to-top" {
    export default class ButtonBackToTop extends React.Component<{}, {}> {}
}
