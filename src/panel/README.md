# Panel

Ce composant permet d'afficher un composant sous forme de carte.

![Image](https://github.com/get-focus/focus-components/blob/doc-input-radio/src/panel/example/capture.png?raw=true)


```javascript
<h3>Panel without actions</h3>
<Panel title='Here is the title'>
   <br/>
   <br/>
   <p>Here is the content.</p>
   <br/>
   <br/>
</Panel>
```

| Props | Type | Default props | Description |
|---|---|---|---|
| blockName | string | | |
| Buttons | func | Buttons | Fait apparaitre un bouton (modifier/enregister par défaut) |
| buttonsPosition | oneOf(['both', 'bottom', 'top']) | 'top' | Position des boutons |
| editing | bool | false | Si on est ou non en mode édition |
| getUserInput | func | | Action sur le bouton d'enregistrement |
| save | func | () => alert('please define a save action') | Action sur le bouton d'enregistrement |
| showHelp | bool | false | Affiche un bouon d'aide |
| Spinner | func | MdlProgress | Spinner de chargement |
| title | string | | Titre du panel |
| toggleEdit | func | () => alert('please define a toggleEdit action') | Action sur le bouton modifier |
