# Titre du component

Ce composant permet d'afficher un bouton pour remonter en haut de la page.

![Image](https://github.com/get-focus/focus-components/blob/develop/src/button-back-to-top/example/capture.png?raw=true)

```javascript
<div className='button-bt-example'>
    <img src="http://lorempixel.com/800/600/sports/"/>
    <img src="http://lorempixel.com/800/600/abstract/"/>
    <img src="http://lorempixel.com/800/600/city/"/>
    <img src="http://lorempixel.com/800/600/technics/"/>
    <img src="http://lorempixel.com/800/600/sports/"/>
    <img src="http://lorempixel.com/800/600/abstract/"/>
    <img src="http://lorempixel.com/800/600/city/"/>
    <img src="http://lorempixel.com/800/600/technics/"/>
    <ButtonBackToTop />
</div>
```

Découvrir le composant sur le [showcase](http://kleegroup.github.io/focus-showcase/#component/back-to-top/detail)


| Props | Type | Default props | Description |
|---|---|---|---|
| duration | number | 100 | Durée du scroll en millisecondes |
| iconName | string | 'arrow-circle-up' | Icone du bouton |
| iconPrefix | string | 'fa fa-' | Librairie d'icones |
| scrollStart | number | 100 | Position dans la page à partir de laquelle le bouton va apparaître |
