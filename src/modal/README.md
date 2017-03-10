# Modal

Ce composant permet d'afficher une vue modale.

![Image](https://github.com/get-focus/focus-components/blob/develop/src/modal/example/capture.png?raw=true)

```jsx
<Modal ref='thirdModal' size='small' type='from-right'>
   <h2>
       Material Design Videos
   </h2>
   <br/>
   <center>
       <b>Material design</b>
       <br/>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/Q8TXgCzxEnw" frameborder="0" allowfullscreen></iframe>
       <br/>
       <br/>
   </center>
</Modal>
```

| Props | Type | Default props | Description |
|---|---|---|---|
| ConfirmContentComponent | func |  | |
| confirmFunction | func | | |
| level | number | 0 | |
| modal | bool | false | Si un clic à l'extèrieure de la modale la ferme |
| onModalClose | func |  | Fonction à la fermeture de la modale |
| open | bool | false | Si la modale est affichée ou non |
| overlay | bool | true | Affiche un overlay sous la modale |
| size | oneOf(['small', 'medium', 'large']) | 'medium' | Hauteur de la modale |
| type | oneOf(['full', 'from-menu', 'from-right']) | 'full' | Type de modale|
