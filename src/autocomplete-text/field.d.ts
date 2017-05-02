export interface AutoCompleteItem {
    key: string;
    label: string;
}

export interface AutoCompleteResult {
    data: AutoCompleteItem[];
    totalCount: number;
}

export default class AutocompleteTextField extends React.Component<{
    emptyShowAll?: boolean;
    error?: string;
    inputTimeout?: number;
    isEdit: boolean;
    label?: string;
    name?: string;
    onChange?: (code: string) => void;
    placeholder?: string;
    querySearcher: (text: string) => Promise<AutoCompleteResult>;
    rawInputValue?: string;
    showAtFocus?: boolean;
    type?: string;
    value?: string;
}, {}> {}
