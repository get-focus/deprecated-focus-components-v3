# DraggableIframe

Ce composant permet de créer une fenêtre déplaçable.
Ce composant est à placer à côté du composant Layout.

```javascript
<DraggableIframe
    iframeUrl='http://localhost:3000/'
    width={500}
    height={400}
    title='Iframe Title'
    toggleFunctionName='openDragggable'
/>
```


| Props | Type | Default props | Description |
|---|---|---|---|
| iframeUrl | string |  | Url de l'iframe |
| width | number |  | Largeur de l'iframe |
| height | number |  | Hauteur de l'iframe |
| title | string |  | Titre de l'iframe |
| toggleFunctionName | string |  | Nom de la fonction à appeler pour afficher l'iframe |
| queryUrl | array |  | Tableau des paramètres de l'url |
