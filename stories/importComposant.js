import AutocompleteSelect from '../autocomplete-select';
import AutocompleteText from '../autocomplete-text/edit';
import {defaultType as defaultTypeAutocompleteSelect} from '../autocomplete-select/showcase';
import {defaultType as defaultTypeAutocompleteText} from '../autocomplete-text/showcase';

import Button from '../button'
import ButtonBackToTop from '../button-back-to-top'
import ButtonBack from '../button-back'
import {defaultType as defaultTypeButton} from '../button/showcase'
import {defaultType as defaultTypeButtonBackToTop} from '../button-back-to-top/showcase';
import {defaultType as defaultTypeButtonBack} from '../button-back/showcase';


import Chips from '../chips'
import Title from '../title'
import {defaultType as defaultTypeChips} from '../chips/showcase'
import {defaultType as defaultTypeTitle} from '../title/showcase';

import ConfirmationPopin from '../confirmation-popin'
import Popin from '../modal'
import SnackBar from '../snackbar'
import Spinner from '../spinner/pacman'
import Animation from '../animation';
import {defaultType as defaultTypeAnimation} from '../animation/showcase';
import {defaultType as defaultTypeConfirmationPopin} from '../confirmation-popin/showcase';
import {defaultType as defaultTypePopin} from '../modal/showcase';
import {defaultType as defaultTypeSnackBar} from '../snackbar/showcase';
import {defaultType as defaultTypeSpinner} from '../spinner/showcase';

import Dropdown from '../dropdown'
import Select from '../select'
import SelectCheckBox from '../select-checkbox'
import SelectMdl from '../select-mdl'
import SelectRadio from '../select-radio'

import {defaultType as defaultTypeDropdown} from '../dropdown/showcase';
import {defaultType as defaultTypeSelect} from '../select/showcase';
import {defaultType as defaultTypeSelectCheckBox} from '../select-checkbox/showcase';
import {defaultType as defaultTypeSelectMdl} from '../select-mdl/showcase';
import {defaultType as defaultTypeSelectRadio} from '../select-radio/showcase';

import IputCheckbox from '../input-checkbox';
import IputDate from '../input-date';
import InputDisplay from '../input-display';
import InputRadio from '../input-radio';
import InputText from '../input-text';
import InputTextArea from '../input-textarea';
import InputToggle from '../input-toggle';
import {defaultType as defaultTypeIputCheckbox} from '../input-checkbox/showcase';
import {defaultType as defaultTypeIputDate} from '../input-date/showcase';
import {defaultType as defaultTypeInputDisplay} from '../input-display/showcase';
import {defaultType as defaultTypeInputRadio} from '../input-radio/showcase';
import {defaultType as defaultTypeInputText} from '../input-text/showcase';
import {defaultType as defaultTypeInputTextArea} from '../input-textarea/showcase';
import {defaultType as defaultTypeInputToggle} from '../input-toggle/showcase';

export default [
  {name: 'AutoComplete', elements: [
    {Composant: AutocompleteSelect, defaultType: defaultTypeAutocompleteSelect, isHighOrderComponent: false, name:'AutocompleteSelect'},
    {Composant: AutocompleteText, defaultType: defaultTypeAutocompleteText, isHighOrderComponent: false, name: 'AutocompleteText'},
  ]},

  {name: 'Les boutons', elements: [
    {Composant: Button, defaultType: defaultTypeButton},
    {Composant: ButtonBackToTop, defaultType: defaultTypeButtonBackToTop},
    {Composant: ButtonBack, defaultType: defaultTypeButtonBack}
  ]},

  {name: 'Les sans famille', elements: [
    {Composant: Chips, defaultType: defaultTypeChips},
    {Composant: Title, defaultType: defaultTypeTitle},
  ]},

  {name: 'Les composants du layout', elements: [
    {Composant: ConfirmationPopin, defaultType: defaultTypeConfirmationPopin, isHighOrderComponent: true},
    {Composant: Popin, defaultType: defaultTypePopin , isHighOrderComponent: true},
    {Composant: SnackBar, defaultType: defaultTypeSnackBar },
    {Composant: Spinner, defaultType:defaultTypeSpinner },
    {Composant: Animation, defaultType:defaultTypeAnimation , isHighOrderComponent: true }
  ]},

  {name: 'Les select', elements: [
    {Composant: Dropdown, defaultType: defaultTypeDropdown},
    {Composant: Select, defaultType: defaultTypeSelect},
    {Composant: SelectCheckBox, defaultType: defaultTypeSelectCheckBox},
    {Composant: SelectMdl, defaultType: defaultTypeSelectMdl},
    {Composant: SelectRadio, defaultType: defaultTypeSelectRadio}
  ]},

  {name: 'Les Inputs', elements: [
    {Composant: IputCheckbox, defaultType: defaultTypeIputCheckbox},
    {Composant: IputDate, defaultType: defaultTypeIputDate},
    {Composant: InputDisplay, defaultType: defaultTypeInputDisplay},
    {Composant: InputRadio, defaultType: defaultTypeInputRadio},
    {Composant: InputText, defaultType: defaultTypeInputText},
    {Composant: InputTextArea, defaultType: defaultTypeInputTextArea},
    {Composant: InputToggle, defaultType: defaultTypeInputToggle}
  ]},
]
