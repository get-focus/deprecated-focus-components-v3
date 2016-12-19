import React, {PureComponent} from 'react';

class Pacman extends PureComponent {
    render() {
        return (
            <div data-focus='spinner' data-spinner='pacman'>
                <div className='pacman'></div>
                <div className='dot'></div>
            </div>
        );
    }
}
Pacman.displayName = 'Pacman';
export default Pacman;
