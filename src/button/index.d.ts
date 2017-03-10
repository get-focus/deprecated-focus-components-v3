/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/button" {
    interface ButtonProps {
        className?: string;
        color?: "colored" | "primary" | "accent";
        disabled?: boolean;
        handleOnClick: (e?: React.SyntheticEvent<any>) => void;
        hasRipple?: boolean;
        icon?: string;
        iconLibrary?: "material" | "font-awesome" | "font-custom";
        id?: string;
        isJs?: boolean;
        label?: string;
        shape?: "raised" | "fab" | "icon" | "mini-fab";
        style?: React.CSSProperties;
        type?: "button" | "submit";
    }

    export default class Button extends React.Component<ButtonProps, {}> {}
}
