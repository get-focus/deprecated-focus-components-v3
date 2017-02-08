import React from 'react';
import { storiesOf, action, linkTo, addDecorator , configure } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import { WithNotes } from '@kadira/storybook-addon-notes';
import Welcome from './Welcome';
import i18next from 'i18next';
import style from '../style'
import componentsFr from '../src/translation/resources/fr-FR';
const ressources = [componentsFr]



i18next.init({
  lng: 'fr-FR',
  ressources: {
    'fr-FR' : ressources.reduce((acc, newValue) => Object.assign(acc, newValue), {})
  }
})

import ComposeComposant from './ComposeComposant'
import importComposant from './importComposant'

function renderAdd(storie, elements){
  return elements.map(add => {
    if(add.isHighOrderComponent){
      return storie.add(add.Composant.displayName, () => {
        const HighComposant = add.Composant;

        return <ComposeComposant Composant={props => <HighComposant {...props} ><div style={{border: '1px solid black'}}>Bonjour je suis le sousComposant</div></HighComposant>} defaultType={add.defaultType}/>
      })
    }else {
      return storie.add(add.Composant.displayName, () => {
        return (
            <WithNotes notes={'Yooooooooo'}>
                <ComposeComposant Composant={add.Composant} defaultType={add.defaultType}/>
            </WithNotes>
        )
      })
    }

  })
}

function renderStrories (stories) {
  return stories.map(element => {
    const storie = storiesOf(element.name, module)
    return renderAdd(storie, element.elements)

  })
}
renderStrories(importComposant);
