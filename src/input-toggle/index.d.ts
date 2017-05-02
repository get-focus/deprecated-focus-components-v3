export default class InputToggle extends React.Component<{
    label: string;
    onChange?: (checked: boolean) => void;
    rawInputValue?: boolean;
}, {}> {
    getValue(): boolean
}
