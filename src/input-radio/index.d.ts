/// <reference types="react" />

declare type ReactComponent<P> = React.ComponentClass<P> | ((props: P) => React.ReactElement<any>);

declare module "focus-components/input-radio" {
    export default class Radio extends React.Component<{
        label: string;
        name?: string;
        onChange?: (checked: boolean) => void;
        rawInputValue?: boolean;
    }, {}> {
        getValue(): boolean
    }
}
