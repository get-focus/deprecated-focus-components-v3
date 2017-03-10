/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/draggable-iframe" {
    export default class DraggableIframe extends React.Component<{
        iframeUrl: string;
        width: number;
        height: number;
        title: string;
        toggleFunctionName?: string;
        queryUrl?: string[]
    }, {
        xPos?: number;
        yPos?: number;
        xElem?: number;
        yElem?: number;
        selected?: HTMLElement;
    }> {
        dragInit: (e: MouseEvent) => void;
        moveElem: (e: MouseEvent) => void;
        destroy: (e: MouseEvent) => void;
        helpFrame: HTMLIFrameElement;
    }
}
