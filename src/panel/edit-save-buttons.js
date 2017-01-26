import React, {Component, PropTypes} from 'react';
import Button from '../button';

const renderEditingButtons = (toggleEdit, getUserInput, save) => (
    <span>
        <div data-focus='panel-save-action'>
            <Button icon='save' label='focus.components.button.save' onClick={() => save(getUserInput())} shape={null} type='button' />
        </div>
        <div data-focus='panel-cancel-action'>
            <Button icon='undo' label='focus.components.button.cancel' onClick={() => toggleEdit(false)} shape={null} type='button' />
        </div>
    </span>
);


const renderConsultingButtons = (toggleEdit) => (
    <Button icon='edit' label='focus.components.button.edit' onClick={() => toggleEdit(true)} shape={null} type='button' />
);

/**
* [description]
* @param  {[boolean]} {editing         form is in Editing mode or not
* @param  {[function]} toggleEdit      function to display the button corresponding to form mode
* @param  {[object]}   getUserInput    object with data modify by the user
* @param  {[function]} save}           save function which will be call on save button click
* @return {[element]}                  Buttons dipending on the form mode (edit or not)
*/
const renderButtons = ({editing, toggleEdit, getUserInput, save}) => (
    editing ? renderEditingButtons(toggleEdit, getUserInput, save) : renderConsultingButtons(toggleEdit)
);
export default renderButtons;
