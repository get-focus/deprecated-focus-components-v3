# SelectCheckbox

Ce composant permet d'afficher une liste de sélection multiple en mode checkbox.

![Image](https://github.com/get-focus/focus-components/blob/doc-input-radio/src/select-checkbox/example/capture.png?raw=true)


## Attributs

| Props | Type | Default props | Description |
|---|---|---|---|
| labelKey | string | 'label' | Nom de l'attribut correspondant au libellé dans la liste |
| rawInputValue | array | [] | |
| value | array | | La liste des valeurs sélectionnées |
| values | array | [] | Valeurs de sélection possibles pour la liste |
| valueKey | array | [] | Nom de l'attribut correspondant à la valeur dans la liste |

## Méthodes

<table>
	<thead>
		<tr>
          <th>Méthode</th>
          <th>Paramètres</th>
          <th>Retour</th>
          <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td><code>getValue()</code></td>
          <td>aucun.</td>
          <td><i>string</i></td>
          <td>Récupérer la liste des valeurs sélectionnées dans la liste de sélection</td>
      </tr>
   </tbody>
</table>

## Evènements
<table>
	<thead>
		<tr>
          <th>Event</th>
          <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td><code>onChange</code></td>
          <td>Evènement levé lorsque la liste change de valeur sélectionnée.</td>
      </tr>
   </tbody>
</table>
