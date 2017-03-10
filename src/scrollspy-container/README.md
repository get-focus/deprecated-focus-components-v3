# ScrollspyContainer

Ce composant permet d'afficher un menu dont les éléments sont automatiquement mis en surbrillance en fonction de la partie de la page que l'utilisateur regarde actuellement.

![Image](https://github.com/get-focus/focus-components/blob/doc-input-radio/src/scrollspy-container/example/capture.png?raw=true)


```javascript
<ScrollspyContainer offset={100}>
   <Panel title='Sports'>
       <img alt='lorempixel' src='http://lorempixel.com/800/600/sports' title='lorempixel' />
   </Panel>
   <Panel title='People'>
       <img alt='lorempixel' src='http://lorempixel.com/800/600/people' title='lorempixel' />
   </Panel>
   <Panel title='Nature'>
       <img src='http://lorempixel.com/800/600/nature' title='lorempixel' alt='lorempixel' />
   </Panel>
   <Panel title='Technics'>
       <img src='http://lorempixel.com/800/600/technics' title='lorempixel' alt='lorempixel' />
   </Panel>
   <Panel title='Transport'>
       <img src='http://lorempixel.com/800/600/transport' title='lorempixel' alt='lorempixel' />
   </Panel>
</ScrollspyContainer>
```

| Props | Type | Default props | Description |
|---|---|---|---|
| hasMenu | bool | true | Active la présence du composant de navigation |
| hasBackToTop | bool | true | Active la présence du bouton BackToTop |
| offset | number | 100 | Mode complétion indéterminée |
| scrollDelay | number | 10 | Délai de déclenchement par défaut pour l'appel du scrollspy |
