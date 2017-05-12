export interface DateProps {
    beforeValueGetter?: (date: string) => string;
    disabled?: boolean;
    drops?: "up" | "down";
    error?: string | null;
    format: string | string[];
    locale?: string;
    name: string;
    onChange: (date: string) => void;
    placeholder?: string;
    rawInputValue?: string;
    showDropdowns?: boolean;
    valid?: boolean;
    validate?: (date: string) => boolean;
}

export default class Date extends React.Component<DateProps, {}> {
    getValue(): string
}
