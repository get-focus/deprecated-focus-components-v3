import React, {Component, PropTypes} from 'react';
import Button from '../button';

const renderEditingButtons = (toggleEdit, getUserInput, save, saving) => (
    <span>
        <Button className='panel-button-save' icon='save' label='focus.components.button.save' processLabel='focus.components.button.save' saving={saving} color='primary' onClick={() => save(getUserInput())} shape={null} type='button' />
        <Button className='panel-button-cancel'icon='clear' label='focus.components.button.cancel' onClick={() => toggleEdit(false)} shape={null} type='button' />
    </span>
);


const renderConsultingButtons = (toggleEdit) => (
    <Button className='panel-button-edit' icon='edit' label='focus.components.button.edit' onClick={() => toggleEdit(true)} shape={null} type='button' />
);

/**
* [description]
* @param  {[boolean]} {editing         form is in Editing mode or not
* @param  {[function]} toggleEdit      function to display the button corresponding to form mode
* @param  {[object]}   getUserInput    object with data modify by the user
* @param  {[function]} save}           save function which will be call on save button click
* @return {[element]}                  Buttons dipending on the form mode (edit or not)
*/
const renderButtons = ({editing, toggleEdit, getUserInput, save, saving}) => (
    editing ? renderEditingButtons(toggleEdit, getUserInput, save, saving) : renderConsultingButtons(toggleEdit)
);
export default renderButtons;
