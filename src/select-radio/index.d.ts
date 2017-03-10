/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/select-radio" {
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
}
