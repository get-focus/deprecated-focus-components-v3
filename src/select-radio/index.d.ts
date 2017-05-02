export default class SelectRadio extends React.Component<{
    disabled?: boolean;
    labelKey?: string;
    onChange?: (value: string | number) => void;
    rawInputValue?: string | number;
    valueKey?: string;
    values: {}[];
}, {}> {
    getValue(): string | number;
}
