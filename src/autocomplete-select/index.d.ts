/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/autocomplete-select" {
    export interface AutoCompleteItem {
        key: string;
        label: string;
    }

    export interface AutoCompleteResult {
        data: AutoCompleteItem[];
        totalCount: number;
    }

    export default class AutocompleteSelectField extends React.Component<{
        editing: boolean;
        error?: string;
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
    }, {}> {}
}
