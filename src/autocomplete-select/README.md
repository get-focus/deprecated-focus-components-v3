# AutocompleteSelect

Ce composant permet de créer un champ de text proposant de l'autocomplétion. Il n'est pas obligatoire de sélectionner une des propositions d'autocomplétion.
Selon l'état du champ on affiche AutocompleteSelectConsult  ou AutocompleteSelectEdit

![Image](https://github.com/get-focus/focus-components/blob/develop/src/autocomplete-select/example/capture.png?raw=true)

```javascript
<AutocompleteText
    querySearcher={_querySearcher}
    placeholder={'Your search...'}
/>


const _querySearcher = query => {
    let data = [
        {
            key: 'JL',
            label: 'Joh Lickeur'
        },
        {
            key: 'GK',
            label: 'Guénolé Kikabou'
        },
        {
            key: 'YL',
            label: 'Yannick Lounivis'
        }
    ];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data,
                totalCount: data.length
            });
        }, 500);
    });
};
```


| Props | Type | Default props | Description |
|---|---|---|---|
| editing | bool |  | Si on est en mode édition |
| formattedInputValue | oneOfType([PropTypes.string, PropTypes.number]) |  | Formatage du champ |
| keyResolver | func |  |  |
| onChange | func |  | Action au changement dans le champ |
| querySearcher | func |  |  |
| rawInputValue | oneOfType([PropTypes.string, PropTypes.number]) |  |  |


## AutocompleteSelectConsult

| Props | Type | Default props | Description |
|---|---|---|---|
| editing | bool |  | Si on est en mode édition |
| formattedInputValue | oneOfType([PropTypes.string, PropTypes.number]) |  | Formatage du champ |
| keyResolver | func |  |  |
| onChange | func |  | Action au changement dans le champ |
| querySearcher | func |  |  |
| rawInputValue | oneOfType([PropTypes.string, PropTypes.number]) |  |  |


## AutocompleteSelectEdit

| customError | string |  |  |
| inputTimeout | number | 200 |  |
| keyName | string | 'key' |  |
| keyResolver | func |  |  |
| labelName | string | 'label' |  |
| onBadInput | func |  |  |
| onChange | func |  |  |
| placeholder | string |  |  |
| querySearcher | func |  |  |
| renderOptions | func |  |  |
| rawInputValue | string |  |  |

```javascript

import React, {PropTypes, PureComponent} from 'react';
import AutocompleteSelect from 'focus-components/autocomplete-select';
import Panel from 'focus-components/panel';

import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';

import {loadCaracteristicsAction, saveCaracteristicsAction} from '../../../action/movie';

const database = [
    {
        key: 'NY',
        label: 'New York'
    },
    {
        key: 'PAR',
        label: 'Paris'
    },
    {
        key: 'TOY',
        label: 'Tokyo'
    },
    {
        key: 'BEI',
        label: 'Pékin'
    },
    {
        key: 'LON',
        label: 'Londres'
    },
    {
        key: 'BER',
        label: 'Berlin'
    }
];

class AutoComplete extends PureComponent {
    constructor(props) {
        super(props);
        this._keyResolver = this._keyResolver.bind(this);
        this._querySearcher = this._querySearcher.bind(this);
    }
    _keyResolver(key) {
        debugger;
        return new Promise((resolve, reject) => {
            const entry = database.find(element => element.key === key);
            const label = entry ? entry.label : 'Non resolved key';
            resolve(label);
        });
    }

    _querySearcher(query) {
        console.log(query);
        const values = database.filter(({key, label}) => label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: values,
                    totalCount: values.length
                });
            }, 200);
        });
    }

    render() {
        return (
            <AutocompleteSelect
                keyResolver={this._keyResolver}
                inputTimeout={500}
                querySearcher={this._querySearcher}
                {...this.props} />
        );
    }
}

class MovieCaracteristics extends PureComponent {
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }
    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions, id} = this.props;
        const panelProps = {editing, loading, save, saving, toggleEdit, getUserInput};
        return (
            <Panel title='view.movie.detail.caracteristics' {...panelProps}>
                {fieldFor('title', {entityPath: 'movieCaracteristics', metadata: { InputComponent: AutoComplete }})}
                {fieldFor('originalTitle', {entityPath: 'movieCaracteristics'})}
                {fieldFor('keywords', {entityPath: 'movieCaracteristics'})}
                {fieldFor('runtime', {entityPath: 'movieCaracteristics'})}
                {fieldFor('movieType', {entityPath: 'movieCaracteristics'})}
                {fieldFor('productionYear', {entityPath: 'movieCaracteristics'})}
            </Panel>
        );
    }
};
MovieCaracteristics.displayName = 'MovieCaracteristics';
MovieCaracteristics.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['movieCaracteristics']),
    connectToForm({
        formKey: 'movieCaracteristicsForm',
        entityPathArray: ['movieCaracteristics'],
        loadAction: loadCaracteristicsAction,
        saveAction: saveCaracteristicsAction
    }),
    connectToFieldHelpers()
)(MovieCaracteristics);


```