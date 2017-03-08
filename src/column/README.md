# Column

Ce composant permet de créer des colonnes en utilisant la grille. Une grille est composée de 12 colonnes maximum.

```javascript
<Grid>
    <Column size='4'><BlueSquare label='size4'/></Column>
    <Column size='3'><BlueSquare label='size3'/></Column>
    <Column size='5'><BlueSquare label='size5'/></Column>
    <Column size='4'><BlueSquare label='size4'/></Column>
</Grid>
```

Découvrir le composant sur le [showcase](http://kleegroup.github.io/focus-showcase/#component/grid/detail)


| Props | Type | Default props | Description |
|---|---|---|---|
| className | string |  | Classe CSS |
| size | number | 6 | largeur de la colonne |
