export interface PanelButtonsProps {
    editing?: boolean;
    getUserInput?: () => {};
    loading?: boolean;
    toggleEdit?: (edit: boolean) => void;
    save?: (data: {}) => void;
    saving?: boolean;
}

export default function PanelButtons(props: PanelButtonsProps): React.ReactElement<any>
