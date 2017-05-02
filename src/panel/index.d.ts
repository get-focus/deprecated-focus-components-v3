import {PanelButtonsProps} from "./edit-save-buttons";

export default class Panel extends React.Component<{
    blockName?: string;
    Buttons?: ReactComponent<PanelButtonsProps> | null;
    buttonsPosition?: "both" | "bottom" | "top";
    showHelp?: boolean;
    Spinner?: ReactComponent<{}> | null;
    title?: string;
} & PanelButtonsProps, {}> {}
