 export interface SnackbarProps {
    actionHandler?: (props?: SnackbarProps) => void;
    actionText?: string;
    deleteMessage: () => void;
    messageId: string;
    message: string;
    type: string;
}

export default function Snackbar(props: SnackbarProps): React.ReactElement<any>
