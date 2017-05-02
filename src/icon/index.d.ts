export default function Icon(props: {
    library?: "material" | "font-awesome" | "font-custom";
    name: string;
    onClick?: (e: React.MouseEvent<any>) => void;
    style?: {};
}): React.ReactElement<any>
