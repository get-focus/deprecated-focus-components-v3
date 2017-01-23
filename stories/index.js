import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../button';
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




import Animation from '../animation';


storiesOf('Animation', module)
  .add('with a wonderfull animation', () => (
    <Animation><Button onClick={action('clicked')} label='lala'/></Animation>
  ))





import AutocompleteSelect from '../autocomplete-select';
import AutocompleteText from '../autocomplete-text/edit';

const keyResolver = key => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve.bind(this, 'Resolved value'), 300);
    });
}

const querySearcher = query => {
    const data = [
        {
            key: 'NY',
            label: 'New York'
        },
        {
            key: 'PAR',
            label: 'Paris'
        },
        {
            key: 'TOY',
            label: 'Tokyo'
        },
        {
            key: 'BEI',
            label: 'Pékin'
        },
        {
            key: 'LON',
            label: 'Londres'
        },
        {
            key: 'BER',
            label: 'Berlin'
        }
    ].filter(({key, label}) => label.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data,
                totalCount: 40
            });
        }, 200);
    });
}

    // 
    // storiesOf('AutoComplete', module)
    //   .add('with a AutoCompleteSelect', () => (
    //     <AutocompleteSelect
    //                 editing={'true'}
    //                 keyResolver={keyResolver}
    //                 querySearcher={querySearcher}
    //                 ref='first'
    //                 value='lol'
    //                 />
    //   ))
    //   .add('with a AutoCompleteText', () => (
    //     <AutocompleteText
    //         editing={true}
    //         querySearcher={_querySearcher}
    //         placeholder={'Your search...'}
    //         inputTimeout={1000}
    //         />
    //   ))


import ButtonBackToTop from '../button-back-to-top'
import ButtonBack from '../button-back'
storiesOf('Button', module)
  .add('with a button', () => (
    <Button label='Je suis un label'/>
  ))
  .add('with a button back', () => (
    <ButtonBack/>
  ))
  .add('with a button back to top', () => (
    <ButtonBackToTop/>
  ))


import Chips from '../chips';
storiesOf('Chips', module)
  .add('with defaultprops', () => (
    <Chips label={'Je suis une chips'} />
  ))
  .add('with a letter', () => (
    <Chips label={'Je suis une chips'} letter={'A'}/>
  ))


import ConfirmationPopin from '../confirmation-popin'
import Popin from '../modal'

storiesOf('Modal', module)
  .add('ConfirmationPopin', () => (

    <ConfirmationPopin open={true}>Bonjour je suis une superbe popin de confirmation</ConfirmationPopin>
  ))

  .add('Modal', () => (

    <Popin open={true}>Bonjour je suis une superbe popin j'espere que tu me trouves à ton goût</Popin>
  ))
import Dropdown from '../dropdown'
import Select from '../select'
import SelectCheckBox from '../select-checkbox'
import SelectMdl from '../select-mdl'
import SelectRadio from '../select-radio'

storiesOf('Les selection thomas <3', module)
  .add('DropDown', () => (
    <Dropdown operations={['Numero1', 'Numero2', 'Numero3'] } />
  ))
  .add('Select', () => (
    <Select values={[{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] } />
  ))
  .add('SelectCheckBox', () => (
    <SelectCheckBox values={[{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] }  />
  ))
  .add('SelectMdl', () => (
    <SelectMdl values={[{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] }  />
  ))
  .add('SelectRadio', () => (
    <SelectRadio values={[{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] } />
  ))

import SnackBar from '../snackbar'
storiesOf('SnackBar', module)
  .add('SnackBar', () => (
    <SnackBar style='color:green' message='Je suis un message'/>
  ))


  import Spinner from '../spinner/pacman'
  storiesOf('Spinner', module)
    .add('Spinner', () => (
      <Spinner/>
    ))


import Title from '../title'
storiesOf('Title', module)
  .add('Title', () => (
    <Title label={'Je suis un titre'}/>
  ))
