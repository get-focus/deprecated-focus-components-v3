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
| customClasses | bool | true | Definit si toutes les classes css de la suite sont utilisé ou non. Si oui, la valeur doit être mis à true |
| appear | bool | true | Un true permet d'avoir une animation d'apparition (lors du premier montage du composant) |
| enter | bool | true | Un true permet d'avoir une animation d'entrée |
| leave | bool | true | Un true permet d'avoir une animation de sortie |
| appearTimeout | number | 500 | Définit le temps d'execution en ms de l'animation d'apparition |
| enterTimeout | number | 500 | Définit le temps d'execution en ms de l'animation d'entrée |
| leaveTimeout | number | 500 | Définit le temps d'execution en ms de l'animation d'entrée |
| appearName | string | 'bounce' | Nom de la classe CSS pour l'animation d'apparition |
| appearActiveName | string | 'bounce' | Nom de la classe active en CSS pour l'animation d'apparition par défault si appearName est ajouter elle est initialisé de la manière suivant : appearName-active |
| enterName | string | 'bounce' | Nom de la classe CSS pour l'animation d'entrée |
| enterActiveName | string | 'bounce' | Nom de la classe active en CSS pour l'animation d'entrée par défault si enterActiveName est ajouter elle est initialisé de la manière suivant : enterActiveName-active |
| leaveName | string | 'bounce' | Nom de la classe CSS pour l'animation de sortie |
| leaveActiveName | string | 'bounceOut' | Nom de la classe active en CSS pour l'animation de sortie par défault si leaveActiveName est ajouter elle est initialisé de la manière suivant : leaveActiveName-active |
| transitionName | string | | Nom de la classe CSS pour l'animation de transition |
