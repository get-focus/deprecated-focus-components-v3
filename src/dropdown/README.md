# Dropdown

Ce composant permet d'afficher une liste déroulante.

![Image](https://github.com/get-focus/focus-components/blob/develop/src/button/example/capture.png?raw=true)

```javascript
const Dropdown = FocusComponents.common.selectAction.component;
const operationList = [
    {
        label: 'Action_a',
        action() {
            alert('Actiona');
        }
    },
    {
        label: 'Action_b',
        action() {
            alert('Actionb');
        }
    },
    {
        label: 'Action_c',
        action() {
            alert('Actionc');
        }
    }
];

return <Dropdown operationList={operationList}/>;
```


| Props | Type | Default props | Description |
|---|---|---|---|
| position | shape({vertical: PropTypes.string.isRequired, horizontal: PropTypes.string.isRequired}) | {vertical: 'bottom', horizontal: 'left'} | Classe CSS |
| button | shape ({icon: PropTypes.string, label: PropTypes.string, shape: PropTypes.string}) | {icon: 'more_vert', shape: 'icon'} | Couleur prédéfini du bouton |
| operations | array |  | Tableau des éléments de la liste avec pour chaque élément : un label, un style et une action au clic |
