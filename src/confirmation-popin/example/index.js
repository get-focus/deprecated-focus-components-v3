import React, {PureComponent, PropTypes} from 'react';
import ButtonBack from 'focus-components/button-back';
import Button from 'focus-components/button';
import ConfirmationPopin from 'focus-components/confirmation-popin';

class ConfirmationPopinExemple extends PureComponent {
    constructor(props)  {
        super(props);
        this.state = {
            status: 'Waiting for confirmation...'
        }
        this._onButtonClickHandler = this._onButtonClickHandler.bind(this);
        this._cancelHandler = this._cancelHandler.bind(this);
        this._confirmHandler = this._confirmHandler.bind(this);
    }

    _onButtonClickHandler() {
        this.refs.popin.toggleOpen();
    }

    _cancelHandler() {
        this.setState({status: 'Cancelled.'});
    }

    _confirmHandler() {
        this.setState({status: 'Confirmed !'});
    }

    render() {
        return (
            <div>
                <Button handleOnClick={this._onButtonClickHandler} label='Confirm action'/>
                <ConfirmationPopin cancelHandler={this._cancelHandler} confirmHandler={this._confirmHandler} ref='popin'>
                    <div>
                        Confirmation popin content goes here.
                    </div>
                </ConfirmationPopin>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default ConfirmationPopinExemple;
