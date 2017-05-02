import React, {PropTypes, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Material from '../behaviours/material';
import i18next from 'i18next';
import Button from '../button';
import uniqueId from 'lodash/uniqueId';
import map from 'lodash/map';

//TODO : do not render list in DOM when not displayed ?
@Material('dropdown')
class Dropdown extends PureComponent {
    constructor(props) {
        super(props);
        this._htmlId = uniqueId('dropdown-');
        this.state = {
            menuVisible: false
        };
    };

    _handleAction(action) {
        return () => {
            if (this.props.operationParam) {
                action(this.props.operationParam);
            } else {
                action();
            }
        };
    };

    _handleButtonClick() {
        this.setState({menuVisible: !this.state.menuVisible});
    };

    render() {
        const {menuVisible} = this.state;
        const {button, position, operations} = this.props;
        const mdlClasses = `mdl-menu mdl-menu--${position.vertical}-${position.horizontal} mdl-js-menu mdl-js-ripple-effect`;
        return (
            <div data-focus='dropdown'>
                <Button handleOnClick={this._handleButtonClick.bind(this)} id={this._htmlId} {...button} />
                <ul className={mdlClasses} htmlFor={this._htmlId} ref='dropdown'>
                    {map(operations, (operation, idx) => (
                        <li className={`mdl-menu__item ${operation.style}`} key={idx}
                            onClick={this._handleAction(operation.action)}>
                            {i18next.t(operation.label)}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
};

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = {
    position: {
        vertical: 'bottom',
        horizontal: 'left'
    },
    button: {
        icon: 'more_vert',
        shape: 'icon'
    }
};
Dropdown.propTypes = {
    position: PropTypes.shape ({
        vertical: PropTypes.string.isRequired,
        horizontal: PropTypes.string.isRequired
    }),
    button: PropTypes.shape ({
        icon: PropTypes.string,
        label: PropTypes.string,
        shape: PropTypes.string
    }),
    operations: PropTypes.array.isRequired
};
export default Dropdown;
