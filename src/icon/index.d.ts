/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/icon" {
    export default function Icon(props: {
        library?: "material" | "font-awesome" | "font-custom";
        name: string;
        onClick?: (e: React.MouseEvent<any>) => void;
        style?: {};
    }): React.ReactElement<any>
}
