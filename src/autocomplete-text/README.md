# AutocompleteText

Ce composant permet de créer un champ de sélection d'un élément d'une liste via autocomplétion.

![Image](https://github.com/get-focus/focus-components/blob/develop/src/autocomplete-text/example/capture.png?raw=true)

```javascript
<AutocompleteText
    isEdit={isEdit}
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
| isEdit | bool |  | Si on est en mode édition |
| onChange | func |  | Action au changement dans le champ |
| querySearcher | func |  |  |


## AutocompleteTextConsult

| Props | Type | Default props | Description |
|---|---|---|---|
| formattedInputValue | oneOfType([PropTypes.string, PropTypes.number]) |  |  |
| label | string |  |  |
| name | string |  |  |
| type | string |  |  |


## AutocompleteTextEdit

| emptyShowAll | bool | false | Définit si on affiche des suggestions au focus lorsque le champ est vide |
| error | string |  | Message d'erreur |
| inputTimeout  | number | 200 | Timeout pour exécuter la fonction de debounce |
| onChange | func |  | Execute le querySearcher |
| placeholder | string | 'Search here...' | Placeholder |
| querySearcher | func |  | Retourne une promesse connecté au web service |
| rawInputValue | func |  | Valeur du champ |
| showAtFocus | bool | false | Si on affiche des suggestions au focus |
