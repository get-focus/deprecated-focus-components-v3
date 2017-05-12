export interface AutoCompleteItem {
    key: string;
    label: string;
}

export interface AutoCompleteResult {
    data: AutoCompleteItem[];
    totalCount: number;
}

export interface AutocompleteSelectProps {
    editing: boolean;
    error?: string | null;
    formattedInputValue?: string | number;
    inputTimeout?: number;
    keyName?: string;
    keyResolver: (code: string | number) => Promise<string>;
    label?: string;
    labelName?: string;
    name?: string;
    onChange: (code: string) => void;
    placeholder?: string;
    querySearcher: (text: string) => Promise<AutoCompleteResult>;
    rawInputValue?: string | number;
    type?: string;
}

export default class AutocompleteSelectField extends React.Component<AutocompleteSelectProps, {}> {}
