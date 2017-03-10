# InputTextarea

Ce composant permet d'afficher un champ de texte sur plusieurs lignes.

![Image](https://github.com/get-focus/focus-components/blob/doc-button/src/input-textarea/example/capture.png?raw=true)

```javascript
<h3>Default textarea</h3>
<TextArea
    name='ta0'
    value={inputWithValue0}
    onChange={this.onChangeInput('inputWithValue0')} />
<h3>Default textarea with placeholder</h3>
<TextArea
    name='ta1'
    value={inputWithValue1}
    placeholder='Enter you text here'
    onChange={this.onChangeInput('inputWithValue1')} />
```


| Props | Type | Default props | Description |
|---|---|---|---|
| cols | number | 50 | largeur de l'input |
| error | string | 'input.textarea.error.default' | Message d'erreur |
| formatter | func | identity | |
| minLength | number | 0 | Taille minimale du texte saisi |
| maxLength | number | | Taille maximale du texte saisi |
| name | string | | Nom de l'input |
| onBlur | func | | Action quand on quitte le champ |
| onChange | func | | Action au changement de valeur |
| onClick | func | | Action au clique |
| onFocus | func | | Action quand on arrive dans le champ |
| onKeyPress | func | | Action à un input clavier |
| placeholder | string | | Balise |
| rawInputValue | oneOfType([string, number]) | | Valeur de l'input |
| rows | number | 6 | Nombre de lignes du champ |
| type | string | 'text' | Type de l'input |
| valid | bool | true | Si le champ est valide |
