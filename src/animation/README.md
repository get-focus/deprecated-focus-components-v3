# Animation

Ce composant permet d'animer un autre composant.


```javascript
<Animation>
    <h3>{'Test Animation'}</h3>
</Animation>
```

| Props | Type | Default props | Description |
|---|---|---|---|
| customClasses | bool | true |Si vous souhaitez utiliser une classe CSS personnalisée pour chaque étape de transion, définissez cette propriété à true |
| appear | bool | true | Activer l'affichage de la transition |
| enter | bool | true | Activer l'affichage de la transition |
| leave | bool | true | Activer l'affichage de la transition |
| appearTimeout | number | 500 | Durée de la transition |
| enterTimeout | number | 500 | Durée de la transition |
| leaveTimeout | number | 500 | Durée de la transition |
| appearName | string | 'bounce' | Classe CSS de la transition  |
| appearActiveName | string | 'bounce' | Classe CSS de la transition  |
| enterName | string | 'bounce' | Classe CSS de la transition  |
| enterActiveName | string | 'bounce' | Classe CSS de la transition |
| leaveName | string | 'bounce' | Classe CSS de la transition  |
| leaveActiveName | string | 'bounceOut' | Classe CSS de la transition  |
| transitionName | string | | Classe CSS de la transition  |
