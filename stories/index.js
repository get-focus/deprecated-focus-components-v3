import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
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
import AutocompleteSelect from '../autocomplete-select';
import AutocompleteText from '../autocomplete-text/edit';
import Button from '../button'
import ButtonBackToTop from '../button-back-to-top'
import ButtonBack from '../button-back'
import Chips from '../chips'
import ConfirmationPopin from '../confirmation-popin'
import Popin from '../modal'
import Dropdown from '../dropdown'
import Select from '../select'
import SelectCheckBox from '../select-checkbox'
import SelectMdl from '../select-mdl'
import SelectRadio from '../select-radio'
import SnackBar from '../snackbar'
import Spinner from '../spinner/pacman'
import Title from '../title'
import   IputCheckbox from '../input-checkbox';
import   IputDate from '../input-date';
import InputDisplay from '../input-display';
import  InputRadio from '../input-radio';
import  InputText from '../input-text';
import  InputTextArea from '../input-textarea';
import  InputToggle from '../input-toggle';

import {defaultType as defaultTypeAnimation} from '../animation/showcase';
import {defaultType as defaultTypeAutocompleteSelect} from '../autocomplete-select/showcase';
import {defaultType as defaultTypeAutocompleteText} from '../autocomplete-text/showcase';
import {defaultType as defaultTypeButton} from '../button/showcase'
import {defaultType as defaultTypeButtonBackToTop} from '../button-back-to-top/showcase';
import {defaultType as defaultTypeButtonBack} from '../button-back/showcase';
import {defaultType as defaultTypeChips} from '../chips/showcase'
import {defaultType as defaultTypeConfirmationPopin} from '../confirmation-popin/showcase';
import {defaultType as defaultTypePopin} from '../modal/showcase';
import {defaultType as defaultTypeDropdown} from '../dropdown/showcase';
import {defaultType as defaultTypeSelect} from '../select/showcase';
import {defaultType as defaultTypeSelectCheckBox} from '../select-checkbox/showcase';
import {defaultType as defaultTypeSelectMdl} from '../select-mdl/showcase';
import {defaultType as defaultTypeSelectRadio} from '../select-radio/showcase';
import {defaultType as defaultTypeSnackBar} from '../snackbar/showcase';
import {defaultType as defaultTypeSpinner} from '../spinner/showcase';
import {defaultType as defaultTypeTitle} from '../title/showcase';
import   {defaultType as defaultTypeIputCheckbox} from '../input-checkbox/showcase';
import   {defaultType as defaultTypeIputDate} from '../input-date/showcase';
import {defaultType as defaultTypeInputDisplay} from '../input-display/showcase';
import  {defaultType as defaultTypeInputRadio} from '../input-radio/showcase';
import  {defaultType as defaultTypeInputText} from '../input-text/showcase';
import  {defaultType as defaultTypeInputTextArea} from '../input-textarea/showcase';
import  {defaultType as defaultTypeInputToggle} from '../input-toggle/showcase';




storiesOf('Animation', module)
  .add('with a wonderfull animation', () => (
    <ComposeComposant defaultType={defaultTypeAnimation} Composant={(props)=> (<Animation><Button onClick={action('clicked')} label='lala'/></Animation>)} propsComposant= {{
        customClasses: true,

        appear: true,
        enter: true,
        leave: true,

        appearTimeout: 500,
        enterTimeout: 500,
        leaveTimeout: 500,

        appearName: 'bounce',
        appearActiveName: 'bounce',
        enterName: 'bounce',
        enterActiveName: 'bounce',
        leaveName: 'bounceOut',
        leaveActiveName: 'bounceOut'
    }}/>


  ))

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

import ComposeComposant from './ComposeComposant'

storiesOf('Button', module)
  .add('with a button', () => (
    <ComposeComposant Composant={Button} defaultType={defaultTypeButton}/>
  ))
  .add('with a button back', () => (
    <ComposeComposant Composant={ButtonBack} defaultType={defaultTypeButtonBack}  propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a button back to top', () => (
    <ComposeComposant Composant={ButtonBackToTop} defaultType={defaultTypeButtonBackToTop} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))


storiesOf('Chips', module)
  .add('with defaultprops', () => (
    <ComposeComposant defaultType={defaultTypeChips} Composant={Chips} propsComposant= {{onDeleteClick: props => props}}/>

  ))
  .add('with a letter', () => (
    <ComposeComposant defaultType={defaultTypeChips} Composant={Chips} propsComposant= {{label: 'Je suis une chips avec une lettre', letter: 'A'}}/>
  ))



storiesOf('Modal', module)
  .add('ConfirmationPopin', () => (
    <ComposeComposant
      defaultType={defaultTypeConfirmationPopin}
      Composant={props => <ConfirmationPopin {...props}> Bonjour je suis une superbe popin de confirmation</ConfirmationPopin>}
      propsComposant= {{open: true}}
    />


  ))

  .add('Modal', () => (
    <ComposeComposant defaultType={defaultTypePopin} Composant={(props)=> (<Popin {...props}>Bonjour je suis une superbe popin</Popin>)} propsComposant= {{open: true}}/>
  ))


storiesOf('Les selection thomas <3', module)
  .add('DropDown', () => (
    <ComposeComposant defaultType={defaultTypeDropdown} Composant={Dropdown} propsComposant= {{operations: ['Numero1', 'Numero2', 'Numero3'] }}/>
  ))
  .add('Select', () => (
    <ComposeComposant defaultType={defaultTypeSelect} Composant={Select} propsComposant= {{values: [{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] }}/>
  ))
  .add('SelectCheckBox', () => (
    <ComposeComposant defaultType={defaultTypeSelectCheckBox} Composant={SelectCheckBox} propsComposant= {{values: [{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] }}/>
  ))
  .add('SelectMdl', () => (
    <ComposeComposant defaultType={defaultTypeSelectMdl} Composant={SelectMdl}  propsComposant= {{values: [{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] }}/>
  ))
  .add('SelectRadio', () => (
    <ComposeComposant defaultType={defaultTypeSelectRadio} Composant={SelectRadio} defaultType={defaultTypeSelectRadio}   propsComposant= {{values: [{code: 'MR', label: 'user.mister'}, {code: 'MRS', label: 'user.miss'}] }}/>
  ))

storiesOf('SnackBar', module)
  .add('SnackBar', () => (
    <ComposeComposant defaultType={defaultTypeSnackBar} Composant={SnackBar} propsComposant= {{message: 'Je suis une snackBar' }}/>
  ))


  storiesOf('Spinner', module)
    .add('Spinner', () => (
      <ComposeComposant defaultType={defaultTypeSpinner} Composant={Spinner} propsComposant= {{message: 'Je suis une snackBar' }}/>
    ))


storiesOf('Title', module)
  .add('Title', () => (
    <Title defaultType={defaultTypeTitle} Composant={Title}/>
  ))




storiesOf('Input', module)
  .add('with a IputCheckbox', () => (
    <ComposeComposant defaultType={defaultTypeIputCheckbox} Composant={IputCheckbox} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a IputDate', () => (
    <ComposeComposant defaultType={defaultTypeIputDate} Composant={IputDate} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a InputDisplay', () => (
    <ComposeComposant defaultType={defaultTypeInputDisplay} Composant={InputDisplay} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a InputRadio', () => (
    <ComposeComposant defaultType={defaultTypeInputRadio} Composant={InputRadio} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a InputText', () => (
    <ComposeComposant defaultType={defaultTypeInputText} Composant={InputText} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a InputTextArea', () => (
    <ComposeComposant defaultType={defaultTypeInputTextArea} Composant={InputTextArea} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
  .add('with a InputToggle', () => (
    <ComposeComposant defaultType={defaultTypeInputToggle} Composant={InputToggle} propsComposant= {{label: 'Je suis un label', icon:'home'}}/>
  ))
