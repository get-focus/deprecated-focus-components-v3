# InputDate

Ce composant permet d'afficher un bouton radio.

![Image](https://github.com/get-focus/focus-components/blob/doc-button/src/input-radio/example/capture.png?raw=true)

```javascript
<h3>With value : False</h3>
<Radio name="options1" label="Value False" />

<h3>With value : True</h3>
<Radio name="options2" rawInputValue={true} label="Value True" />
```


| Props | Type | Default props | Description |
|---|---|---|---|
| label | string | | Label |
| name | string | | Nom de l'input |
| onChange | func | | Action au changement de valeur |
| rawInputValue | bool | false | valeur du bouton radio |
