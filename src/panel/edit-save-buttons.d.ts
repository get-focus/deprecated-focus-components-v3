/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/panel/edit-save-buttons" {
    export interface PanelButtonsProps {
        editing?: boolean;
        getUserInput?: () => {};
        toggleEdit?: (edit: boolean) => void;
        save?: (data: {}) => void;
    }

    export default function PanelButtons(props: PanelButtonsProps): React.ReactElement<any>
}
