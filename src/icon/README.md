# Icon

Ce composant permet d'afficher un icone.

![Image](https://github.com/get-focus/focus-components/blob/develop/src/icon/example/capture.png?raw=true)

```javascript
 <h4>Material design library</h4>
<Icon name='dashboard' onClick={() => {console.log('Hello material icon dashboard !')}}/>
<Icon name='settings' onClick={() => {console.log('Hello material icon settings !')}}/>
<Icon name='favorite' onClick={() => {console.log('Hello material icon favorite !')}}/>
<h4>Font-Awesome library</h4>
<Icon library='font-awesome' name='hashtag' onClick={() => {console.log('Hello font-awesome icon hashtag !')}}/>
<Icon library='font-awesome' name='bars' onClick={() => {console.log('Hello font-awesome icon bars !')}}/>
<Icon library='font-awesome' name='laptop' onClick={() => {console.log('Hello font-awesome icon laptop !')}}/>
```


| Props | Type | Default props | Description |
|---|---|---|---|
| handleOnClick | func | | Action au clic |
| library | oneOf(['material', 'font-awesome', 'font-custom']) | 'material' | Librairie d'icones |
| name | string | '' | Nom de l'icone |
