export default class Select extends React.Component<{
    autoFocus?: boolean;
    defaultValue?: string | number;
    disabled?: boolean;
    error?: string;
    hasUndefined?: boolean;
    isActiveProperty?: string;
    isRequired?: boolean;
    labelKey?: string;
    multiple?: boolean;
    name: string;
    onChange: (value: string | number) => void;
    placeholder?: string;
    rawInputValue?: string | number;
    size?: number;
    style?: React.CSSProperties;
    unSelectedLabel?: string;
    valid?: boolean;
    valueKey?: string;
    valueParser?: (propsValue: string | number, rawValue: string) => number | string;
    values: {}[];
}, {}> {
    getValue(): string | number;
}
