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
