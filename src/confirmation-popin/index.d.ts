/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/confirmation-popin" {
    export default class ConfirmationModal extends React.Component<{
        cancelButtonLabel?: string;
        cancelHandler?: () => void;
        confirmButtonLabel?: string;
        confirmHandler?: () => void;
        open?: boolean;
    }, {}> {
        toggleOpen(): void
    }
}
