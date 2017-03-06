# ButtonBack

Ce composant permet d'afficher un bouton précédent basé sur le composant Button.

```javascript
<Button
    handleOnClick={back}
    icon='keyboard_backspace'
    label='focus.components.button.back'
    shape={null}
    type='button'
/>
```

| Props | Type | Default props | Description |
|---|---|---|---|
| back | func |  |  |
| className | string |  | Classe CSS |
| color | oneOf([undefined,'colored', 'primary', 'accent']) | | Couleur prédéfini du bouton |
| hasRipple | bool | true | Active l'effet ripple sur le bouton |
| id | string | '' | id du bouton |
| isJs | bool | true | |
| iconLibrary | oneOf(['material', 'font-awesome', 'font-custom']) | 'material' | Librairie d'icones |
| onClick | func | | Fonction appelée au clic sur le bouton |
| processingLabel | string | | |
| saving | bool | | |
