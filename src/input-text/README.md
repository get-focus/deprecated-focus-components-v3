# InputText

Ce composant permet d'afficher un champ de text.

![Image](https://github.com/get-focus/focus-components/blob/doc-button/src/input-text/example/capture.png?raw=true)

```javascript
<h3>Input with value</h3>
<Input name='inputWithValue' value='myAwesomeValue' onChange={this.onChangeInput('inputWithValue')} />
```


| Props | Type | Default props | Description |
|---|---|---|---|
| disabled | bool | false | Active/désactive l'input |
| error | string | 'input.text.error.default' | Message d'erreur |
| formatter | func | identity | |
| metadata | object | {} | |
| name | string | | Nom de l'input |
| onBlur | func | | Action quand on quitte le champ |
| onChange | func | | Action au changement de valeur |
| onKeyPress | func | | Action au changement de valeur |
| placeholder | string | | Balise |
| rawInputValue | oneOfType([string, number]) | | Valeur de l'input |
| type | string | 'text' | Type de l'input |
| valid | bool | true | Si le champ est valide |
