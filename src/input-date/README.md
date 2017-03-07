# InputDate

Ce composant permet d'afficher un champ de sélection de date.

![Image](https://github.com/get-focus/focus-components/blob/doc-button/src/input-date/example/capture.png?raw=true)

```javascript
<InputDate error={error1} format={['DD/MM/YYYY', 'DD.MM.YYYY', 'DD MMM YYYY']} locale='fr' name='date1' onChange={this.changeHandler(1)} ref='date1' value={date1} />
```


| Props | Type | Default props | Description |
|---|---|---|---|
| drops | oneOf(['up', 'down']) | 'down' | |
| error | string | 'focus.components.input.date.error.default' | Message d'erreur |
| locale | string | 'en' | Localisation |
| name | string | | Nom de l'input |
| onChange | func | | Action au changement de valeur |
| beforeValueGetter | func | false | Action avant la récupérationde la valeur |
| placeholder | string | | Texte de l'input |
| showDropdowns | bool | false | Valeur de la checkbox |
| rawInputValue | (props, propName, componentName) => {const prop = props[propName]; if (prop && !isISOString(prop)) {throw new Error(`The date ${prop} provided to the component ${componentName} is not an ISO date. Please provide a valid date string.`);}} | | |
| valid | bool | true | Si le champ est valide |
| validate | func | isISOString | Fonction de validation |
