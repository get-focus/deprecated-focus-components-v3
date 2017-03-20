# Animation

Le composant animation permet lors d'une encapsulation avec un autre composant d'ajouter automatiquement une animation d'entrée et de sortie du compossant encapsulé.
Ce composant utilise : ReactCSSTransitionGroup. Pour toute information complémentaire nous vous invitons à aller voir la <a href="https://facebook.github.io/react/docs/animation.html">documentation</a>.


```javascript
<Animation>
    <h3>{'Test Animation'}</h3>
</Animation>
```


| Props | Type | Default props | Description |
|---|---|---|---|
| customClasses | bool | true | Definit si toutes les classes css de la suite sont utilisé ou non. Si oui, la valeur doit être mis à true. |
| appear | bool | true | Activation d'une animation d'apparition lors du premier chargement. |
| enter | bool | true | Activation d'une animation d'entrée. |
| leave | bool | true | Activation d'une animation de sortie. |
| appearTimeout | number | 500 | Définit le temps d'execution de l'animation d'apparition. |
| enterTimeout | number | 500 | Définit le temps d'execution en ms de l'animation d'entrée (millisecondes). |
| leaveTimeout | number | 500 | Définit le temps d'execution de l'animation de sortir (millisecondes). |
| appearName | string | 'bounce' | Nom de la classe CSS pour l'animation d'apparition. |
| appearActiveName | string | 'bounce' | Nom de la classe active en CSS pour l'animation d'apparition par défault. Si appearName est ajouter elle est initialisé de la manière suivant : appearName-active. |
| enterName | string | 'bounce' | Nom de la classe CSS pour l'animation d'entrée. |
| enterActiveName | string | 'bounce' | Nom de la classe active en CSS pour l'animation d'entrée par défaul. Si enterActiveName est ajouter elle est initialisé de la manière suivant : enterActiveName-active. |
| leaveName | string | 'bounce' | Nom de la classe CSS pour l'animation de sortie. |
| leaveActiveName | string | 'bounceOut' | Nom de la classe active en CSS pour l'animation de sortie par défault. Si leaveActiveName est ajouter elle est initialisé de la manière suivant : leaveActiveName-active. |
| transitionName | string | | Nom de la classe CSS pour l'animation de transition. |
