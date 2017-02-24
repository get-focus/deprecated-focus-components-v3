import React, {PropTypes, PureComponent} from 'react';
import i18next from 'i18next';
import includes from 'lodash/includes';
import uniqueId from 'lodash/uniqueId';
import snakeCase from 'lodash/snakeCase';

import ButtonHelp from '../button-help';
import Buttons from './edit-save-buttons';
import MdlProgress from '../spinner/mdl-progress';


/**
* Panel.
*/
class Panel extends PureComponent {
    constructor(props) {
        super(props);
        this.spyId = uniqueId('panel_');
    }

    /**
    * Render the a block container and the cild content of the block.
    * @return {DOM} React DOM element
    */
    render() {
        const {blockName, Buttons, buttonsPosition, children, loading, saving, Spinner, title, showHelp, editing, toggleEdit, getUserInput, save} = this.props;
        const shouldDisplayActionsTop = Buttons && includes(['both', 'top'], buttonsPosition);
        const shouldDisplayActionsBottom = Buttons && includes(['both', 'bottom'], buttonsPosition);
        const displaySpinner = Spinner && (loading || saving);

        console.log('PANEL SAVING', saving);

        return (
            <div className='mdl-card mdl-card--border mdl-shadow--4dp' data-spy={this.spyId} data-focus='panel' data-loading={loading} data-saving={saving} data-editing={editing}>
                {displaySpinner && <Spinner />}
                <div className='mdl-card__title mdl-card--border' data-focus='panel-title'>
                    {title && <h3 data-spy-title>{i18next.t(title)}</h3>}
                    {shouldDisplayActionsTop && <div className='buttons'><Buttons saving={saving} editing={editing} toggleEdit={toggleEdit} getUserInput={getUserInput} save={save}/></div>}
                    {showHelp && <ButtonHelp blockName={blockName || snakeCase(i18next.t(title)).split('_')[0]} />}
                </div>
                <div className='mdl-card__supporting-text' data-focus='panel-content'>
                    {children}
                </div>
                {shouldDisplayActionsBottom &&
                    <div className='mdl-card__actions mdl-card--border' data-focus='panel-actions'>
                        <div className='buttons'><Buttons saving={saving} editing={editing} toggleEdit={toggleEdit} getUserInput={getUserInput} save={save}/></div>
                    </div>
                }
            </div>
        );
    }
}
Panel.displayName = 'Panel';
Panel.defaultProps = {
    Buttons: Buttons,
    buttonsPosition: 'top',
    editing: false,
    save: () => alert('please define a save action'),
    showHelp: false,
    Spinner: MdlProgress,
    toggleEdit: () => alert('please define a toggleEdit action')
};
Panel.propTypes = {
    blockName: PropTypes.string,
    Buttons: PropTypes.func,
    buttonsPosition: PropTypes.oneOf(['both', 'bottom', 'top']).isRequired,
    editing: PropTypes.bool,
    getUserInput: PropTypes.func,
    save: PropTypes.func,
    showHelp: PropTypes.bool,
    Spinner: PropTypes.func,
    title: PropTypes.string,
    toggleEdit: PropTypes.func
};
export default Panel;
