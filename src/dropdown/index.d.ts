/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/dropdown" {
    export interface DropdownItem {
        action: (data?: {}) => void;
        label?: string;
        style?: string;
    }

    export default class Dropdown extends React.Component<{
        button?: {
            icon?: string;
            label?: string;
            shape?: "raised" | "fab" | "icon" | "mini-fab"
        };
        operationParam?: {};
        operations: DropdownItem[];
        position?: {
            horizontal?: "left" | "right";
            vertical?: "top" | "bottom";
        };
    }, {}> {}
}
