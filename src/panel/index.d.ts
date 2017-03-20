/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/panel" {
    export interface PanelButtonsProps {
        editing?: boolean;
        getUserInput?: () => {};
        toggleEdit?: (edit: boolean) => void;
        save?: (data: {}) => void;
    }

    export default class Panel extends React.Component<{
        blockName?: string;
        Buttons?: ReactComponent<PanelButtonsProps> | null;
        buttonsPosition?: "both" | "bottom" | "top";
        showHelp?: boolean;
        Spinner?: ReactComponent<{}> | null;
        title?: string;
    } & PanelButtonsProps, {}> {}
}
