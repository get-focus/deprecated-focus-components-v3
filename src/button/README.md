# Titre du component

Ce composant permet d'afficher un bouton.

![Image]https://github.com/get-focus/focus-components/blob/develop/src/button/example/capture.png?raw=true)

```javascript
<Button label='button.label' type='button' shape='raised' color='accent' hasRipple={true} handleOnClick={() => console.log(this)} />
```

Découvrir le composant sur le [showcase](http://kleegroup.github.io/focus-showcase/#component/button-action/detail)


| Props | Type | Default props | Description |
|---|---|---|---|
| className | string |  | Classe CSS |
| color | oneOf([undefined,'colored', 'primary', 'accent']) | | Couleur prédéfini du bouton |
| handleOnClick | func |  | |
| hasRipple | bool | true | Active l'effet ripple sur le bouton |
| id | string | '' | id du bouton |
| isJs | bool | true | |
| icon | string | null | Icone du bouton |
| iconLibrary | oneOf(['material', 'font-awesome', 'font-custom']) | 'material' | Librairie d'icones |
| label | string | '' | Label du bouton |
| onClick | func | | Fonction appelée au clic sur le bouton |
| processingLabel | string | | |
| saving | bool | | |
| shape | oneOf([undefined, 'raised', 'fab', 'icon', 'mini-fab']) | 'raised' | Forme du bouton |
| type | oneOf(['submit', 'button']) | 'submit' | |
