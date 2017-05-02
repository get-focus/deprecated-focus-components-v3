export interface ButtonProps {
    className?: string;
    color?: "colored" | "primary" | "accent";
    disabled?: boolean;
    handleOnClick?: (e?: React.SyntheticEvent<any>) => void;
    hasRipple?: boolean;
    icon?: string;
    iconLibrary?: "material" | "font-awesome" | "font-custom";
    iconPosition?: "left" | "right";
    id?: string;
    isJs?: boolean;
    label?: string;
    onClick?: (e?: React.SyntheticEvent<any>) => void;
    processLabel?: string;
    saving?: boolean;
    shape?: "raised" | "fab" | "icon" | "mini-fab" | null;
    style?: React.CSSProperties;
    type?: "button" | "submit";
}

export default class Button extends React.Component<ButtonProps, {}> {}
