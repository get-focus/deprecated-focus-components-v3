import React, {PropTypes, PureComponent} from 'react';
import Modal from 'focus-components/modal';

const style = {
    position: 'fixed',
    left:'40%',
    top:'30%',
    width:'576px'
};
const titleStyle = {
    color: 'white',
    height:' 176px',
    backgroundImage: 'url(http://media.dcentertainment.com/sites/default/files/character_bio_576_superman_0.jpg)'
};

class MyMenu extends PureComponent {
    constructor(props) {
       super(props);
       this.makeTheSecondModalPop = this.makeTheSecondModalPop.bind(this);
       this.makeTheThirdModalPop = this.makeTheThirdModalPop.bind(this);
   }

    goHome() {
        window.location.href = '#'
    }
    itemsBuilder() {
        const self = this;
        return [
            { icon: 'home', onClick: () => self.goHome() },
            { icon: 'notifications', onClick: () => self.refs.modal.toggleModal() },
            { icon: 'chat', onClick: () => self.refs.thirdModal.toggleModal() }
        ];
    }

    makeTheSecondModalPop() {
        const self = this;
        return self.refs.secondModal.toggleModal();
    }
    makeTheThirdModalPop() {
        const self = this;
        return self.refs.thirdModal.toggleModal();
    }

    render() {
        return (
            <div>
                <div style={style} className="demo-card-wide mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title" style={titleStyle}>
                        <h2 className="mdl-card__title-text">The Superman</h2>
                    </div>
                    <div className="mdl-card__supporting-text" style={this.divSupportText}>
                        <h5>
                            Through this example you'll find the different possibilities you got with the Focus Modal component.
                            <br/><br/>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.makeTheSecondModalPop}><b>Click here</b></button> to display a fade-in modal example.
                            <br/>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.makeTheThirdModalPop}><b>Click here</b></button> to display a modal from a right panel.
                        </h5>
                    </div>
                </div>
                <MyModal ref='modal'/>
                <SecondModal ref='secondModal'/>
                <ThirdModal ref='thirdModal'/>
            </div>
        );
    }
}

class MyModal extends PureComponent {
    toggleModal() {
        this.refs.modal.toggleOpen();
    }

    render() {
        return (
            <Modal ref='modal' size='small' type='from-menu' modal={false}>
                <h2>
                    News
                </h2>
                <br/>
                <h4>
                    Hello there,
                    <br/>
                    <br/>
                    Here, you have a <i>"small"</i> Modal coming <i>"from-menu"</i> with a <i>"false"</i> modal !
                    <br/>
                    Click on the <b>settings</b> button near Superman to display a last Modal.
                </h4>
                <br/>
                <h5><i>Focus.</i></h5>
            </Modal>
        );
    }
}

class SecondModal extends PureComponent {
    toggleModal() {
        this.refs.secondModal.toggleOpen();
    }

    render() {
        return (
            <Modal ref='secondModal' size='medium'>
                <h2>
                    The Modal, The Medium and The Full !
                </h2>
                <br/>
                <h4>
                    This Modal is, as described, set the default <b>type</b> named <b>full</b> it defines its animation.
                    <br/>
                    You have 3 choices which are <b>"full"</b>, <b>"from-menu"</b> and <b>"from-right"</b>. The modal <b>attribute</b> is, by default, set to true so you can click outside of the Modal to close it.
                    <br/>
                    Check the notification icon which is in the Focus menu bar now.
                </h4>
                <br/>
            </Modal>
        );
    }
}

class ThirdModal extends PureComponent {
    toggleModal() {
        this.refs.thirdModal.toggleOpen();
    }

    render() {
        return (
            <Modal ref='thirdModal' size='small' type='from-right'>
                <h2>
                    Material Design Videos
                </h2>
                <br/>
                <center>
                    <b>Material design</b>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Q8TXgCzxEnw" frameborder="0" allowfullscreen></iframe>
                    <br/>
                    <br/>
                </center>
                <center>
                    <b>Making Material Design: Crafting Material</b>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y0UEGsvcYvk" frameborder="0" allowfullscreen></iframe>
                    <br/>
                    <br/>
                </center>
                <center>
                    <b>Material Design : Palette Perfect</b>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xYkz0Ueg0L4" frameborder="0" allowfullscreen></iframe>
                    <br/>
                    <br/>
                </center>
                <center>
                    <b>Material Desing : Story</b>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/rrT6v5sOwJg" frameborder="0" allowfullscreen></iframe>
                </center>
            </Modal>
        );
    }
}

export default MyMenu;
