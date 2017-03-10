/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/scrollspy-container" {
    export default class ScrollspyContainer extends React.Component<{
        hasBackToTop?: boolean;
        hasMenu?: boolean;
        offset?: number;
        scrollDelay?: number;
    }, {}> {}
}
