import {ButtonProps} from "../button";

export interface DropdownItem {
    action: (data?: {}) => void;
    label?: string;
    style?: string;
}

export default class Dropdown extends React.Component<{
    button?: ButtonProps;
    operationParam?: {};
    operations: DropdownItem[];
    position?: {
        horizontal?: "left" | "right";
        vertical?: "top" | "bottom";
    };
}, {}> {}