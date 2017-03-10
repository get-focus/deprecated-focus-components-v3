import React, {PureComponent, PropTypes} from 'react';
import Button from 'focus-components/button';

class ButtonExample extends PureComponent {
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'wrap'
    }
    flexItem: {
        padding: '15px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
    flexItemTitle: {
        textAlign: 'center',
        width: '100%'
    }

    render() {
        return(
            <div>
                <div style={this.flexContainer}>
                    <h4 style={this.flexItemTitle}>RIPPLE EFFECT</h4>
                    <div style={this.flexItem}>
                        Without ripple
                        <br/>
                        <Button label='button.label' type='button' hasRipple={false} handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        With ripple
                        <br/>
                        <Button label='button.label' type='button' color='colored' hasRipple={true} handleOnClick={() => console.log(this)} />
                    </div>
                </div>

                <div style={this.flexContainer}>
                    <h4 style={this.flexItemTitle}>SIMPLE BUTTON</h4>
                    <div style={this.flexItem}>
                        Button
                        <br/>
                        <Button label='button.label' type='button' handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        Primary color
                        <br/>
                        <Button label='button.label' type='button' color='primary' handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        Accent color
                        <br/>
                        <Button label='button.label' type='button' color='accent' handleOnClick={() => console.log(this)} />
                    </div>
                </div>

                <div style={this.flexContainer}>
                    <h4 style={this.flexItemTitle}>FAB</h4>
                    <div style={this.flexItem}>
                        FAB
                        <br/>
                        <Button icon='add' type='button' shape='fab' handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        Primary color
                        <br/>
                        <Button icon='add' type='button' shape='fab' color='primary' handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        Accent color
                        <br/>
                        <Button icon='add' type='button' shape='fab' color='accent' handleOnClick={() => console.log(this)} />
                    </div>
                </div>

                <div style={this.flexContainer}>
                    <h4 style={this.flexItemTitle}>MINI-FAB</h4>
                    <div style={this.flexItem}>
                        Mini FAB
                        <br/>
                        <Button icon='add' type='button' shape='mini-fab' handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        Primary color
                        <br/>
                        <Button icon='add' type='button' shape='mini-fab' color='primary' handleOnClick={() => console.log(this)} />
                    </div>
                    <br/>
                    <div style={this.flexItem}>
                        Accent color
                        <br/>
                        <Button icon='add' type='button' shape='mini-fab' color='accent' handleOnClick={() => console.log(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonExample;
