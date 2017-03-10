#[Animation]

##Descriptif
Le composant animation permet lors d'une encapsulation avec un autre composant d'ajouter automatiquement une animation d'entrée et de sortie du compossant encapsulé. 
Ce composant utilise : ReactCSSTransitionGroup. Pour toute information complémentaire nous vous invitons à aller voir la <a href="https://facebook.github.io/react/docs/animation.html">documentation</a>. 

## Les props

<table>
	<thead>
        <tr>
            <th>Props</th>
            <th>PropsType</th>
            <th>Valeur par défaut</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr >
            <td><code>customClasses</code></td>
            <td><i>bool</i></td>
            <td><code>true</code></td>
            <td>Definit si toutes les classes css de la suite sont utilisé ou non. Si oui, la valeur doit être mis à true</td>
        </tr>
       <tr >
            <td><code>appear</code></td>
            <td><i>bool</i></td>
            <td><code>true</code></td>
            <td>Un <code>true</code> permet d'avoir une annimation d'apparition (lors du premier montage du composant</td>
        </tr>
       <tr >
            <td><code>enter</code></td>
            <td><i>bool</i></td>
            <td><code>true</code></td>
            <td>Un <code>true</code> permet d'avoir une annimation d'entrée</td>
        </tr>
       <tr >
            <td><code>leave</code></td>
            <td><i>bool</i></td>
            <td><code>true</code></td>
            <td>Un <code>true</code> permet d'avoir une annimation de sortie</td>
        </tr>
        <tr >
            <td><code>appearTimeout</code></td>
            <td><i>number</i></td>
            <td><code>500</code></td>
            <td>Définit le temps d'execution en ms de l'animation d'apparition</td>
        </tr>
       <tr >
            <td><code>enterTimeout</code></td>
            <td><i>number</i></td>
            <td><code>500</code></td>
            <td>Définit le temps d'execution en ms de l'animation d'entrée</td>
        </tr>
       <tr >
            <td><code>leaveTimeout</code></td>
            <td><i>number</i></td>
            <td><code>500</code></td>
            <td>Définit le temps d'execution en ms de l'animation de sortie</td>
        </tr>
       <tr >
            <td><code>appearName</code></td>
            <td><i>string</i></td>
            <td><code>bounce</code></td>
            <td>Nom de la classe CSS pour l'animation d'apparition</td>
        </tr>   
       <tr >
            <td><code>appearActiveName</code></td>
            <td><i>string</i></td>
            <td><code>bounce</code></td>
            <td>Nom de la classe active en CSS pour l'animation d'apparition par défault si appearName est ajouter elle est initialisé de la manière suivant : appearName-active</td>
        </tr>
       <tr >
            <td><code>enterName</code></td>
            <td><i>string</i></td>
            <td><code>bounce</code></td>
            <td>Nom de la classe CSS pour l'animation d'entrée</td>
        </tr>
       <tr >
            <td><code>enterActiveName</code></td>
            <td><i>string</i></td>
            <td><code>bounce</code></td>
            <td>Nom de la classe active en CSS pour l'animation d'entrée par défault si enterActiveName est ajouter elle est initialisé de la manière suivant : enterActiveName-active</td>
        </tr>  
       <tr >
            <td><code>leaveName</code></td>
            <td><i>string</i></td>
            <td><code>bounceOut</code></td>
            <td>Nom de la classe CSS pour l'animation de sortie</td>
        </tr>
       <tr >
            <td><code>leaveActiveName</code></td>
            <td><i>string</i></td>
            <td><code>bounceOut</code></td>
            <td>Nom de la classe active en CSS pour l'animation de sortie par défault si leaveActiveName est ajouter elle est initialisé de la manière suivant : leaveActiveName-active</td>
        </tr>
       <tr >
            <td><code>transitionName</code></td>
            <td><i>string</i></td>
            <td><code>Aucune</code></td>
            <td>Nom de la classe CSS pour l'animation de transition</td>
        </tr>          
   </tbody>
</table>
##Exemple de code 



