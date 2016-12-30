import React, {Component, PropTypes} from 'react';
import i18next from 'i18next';
import Button from '../button';
import {Link} from 'react-router';

const defaultButtonProps = {icon: 'link', shape: 'icon', type: 'button'};

const MenuPanel = ({children, onClose}) => {
    const style = { 'width': document.body.clientWidth }
    return (
        <div className='animate-menu' data-focus='menu-sub-panel' style={style} onClick={onClose}>
            <div>
                {children}
            </div>
        </div>
    );
}
MenuPanel.displayName = 'MenuPanel';
MenuPanel.PropTypes = {
    onClose: PropTypes.func
};

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySubMenu: false
        };
        this._toggleSubMenuVisibility = this._toggleSubMenuVisibility.bind(this);
    }
    _toggleSubMenuVisibility() {
        const {showLabels, showPanel} = this.props;
        if(showLabels && !showPanel) {
            const {displaySubMenu} = this.state;
            this.setState({displaySubMenu: !displaySubMenu});
        }
    }

    findPathnameInPossibleRoute(possibleRoutes, pathname){
      return possibleRoutes.reduce((acc, element) => {
         if(pathname.indexOf(element) !== -1) {
            acc = true;
          }
          return acc;
        },false)
    }
    setActiveListClassName(route, homePath, pathname,possibleRoutes, isActive, hasSubMenus) {
        if(route ) {
            if((route === homePath && pathname !== homePath )|| !isActive) {
                return ''
            } else if (pathname=== route || (possibleRoutes && this.findPathnameInPossibleRoute(possibleRoutes, pathname)) ) {
                return 'activeList';
            }
        }else if (possibleRoutes && this.findPathnameInPossibleRoute(possibleRoutes, pathname)) {
          return 'activeList';
        }
        return '';
    }
    render() {
        const {menu, isActive, onClick, onClose, showLabels, showPanel, homePath, pathname} = this.props;
        const {route, label, icon, iconLibrary, subMenus, possibleRoutes} = menu;
        const {displaySubMenu} = this.state;
        const buttonProps = {...defaultButtonProps, label, icon: (!showLabels && icon === undefined ? 'link' : icon), iconLibrary, shape: (showLabels ? null : 'icon'), onClick};
        const hasSubMenus = subMenus && subMenus.length > 0;
        if(hasSubMenus) {
            return (
                <li data-deployed={isActive} className={this.setActiveListClassName(route, homePath, pathname,possibleRoutes, isActive,hasSubMenus)}>
                    <Button {...buttonProps} onClick={showPanel ? onClick : this._toggleSubMenuVisibility} />
                    {displaySubMenu &&
                        <ul data-focus='menu-sub-items'>
                            {subMenus.map((menu, idx) => (
                                <MenuItem key={idx} menu={menu} onClose={onClose} showLabels={showLabels} />
                            ))}
                        </ul>
                    }
                </li>
            );
        } else {
            const {onClick} = buttonProps;
            buttonProps.handleOnClick = onClick
            return (
                <li className={this.setActiveListClassName(route, homePath, pathname,possibleRoutes , isActive, hasSubMenus)}>
                    {route && <Link to={route} onClick={onClose}><Button {...buttonProps} /></Link>}
                    {!route && <Button {...buttonProps} />}
                </li>
            );
        }
    }
};
MenuItem.displayName = 'MenuItem';
MenuItem.PropTypes = {
    menu: PropTypes.object.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    showLabels: PropTypes.bool.isRequired,
    showPanel: PropTypes.bool.isRequired
};


const MenuList = ({activeMenuId, menus, offset = 0, onClick, onClose, showLabels, showPanel, homePath, pathname}) => {
    const style = {'position': 'relative', 'top': offset };
    return (
        <ul data-focus='menu-items' style={style}>
            {menus.map((menu, idx) => {
                const isActive = activeMenuId ? activeMenuId === idx : -1;
                const {route, label, icon, subMenus} = menu;
                const buttonProps = {...defaultButtonProps, label, icon: (!showLabels && icon === undefined ? 'link' : icon), shape: (showLabels ? null : 'icon')};
                return (
                    <MenuItem key={idx} menu={menu} onClick={(evt) => onClick && onClick(evt, idx)} homePath={homePath} onClose={onClose} isActive={isActive} pathname={pathname} showLabels={showLabels} showPanel={showPanel} />
                );
            })}
        </ul>
    );
};
MenuList.displayName = 'MenuList';
MenuList.PropTypes = {
    activeMenuId: PropTypes.number,
    menus: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    showLabels: PropTypes.bool.isRequired,
    showPanel: PropTypes.bool.isRequired
};


/**
 *
 * Requested data.
 * [
 *    { icon: 'home', label: 'menu.home', route: '/' }, // route: 'home'
 *    { icon: 'search', label: 'menu.search', handleOnClick: () => toto() }},
 *    { label: 'menu.test', route: '/admin/masterdata', subMenus: [
 *        { label: 'menu.home', route: '/' },
 *        { label: 'menu.home', route: '/' },
 *        { label: 'menu.home', route: '/' },
 *        { label: 'menu.home', route: '/' }
 *    ]},
 *    { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata', subMenus: [
 *        { icon: 'settings', label: 'menu.home', route: '/' },
 *        { icon: 'settings', label: 'menu.home', route: '/' },
 *        { icon: 'settings', label: 'menu.home', route: '/' },
 *        { icon: 'settings', label: 'menu.home', route: '/' }
 *    ]},
 * ];
 *
 */
class Menu extends Component {
    constructor(props) {
        super(props);
        const subMenus = [];
        props.menus.map((menu, idx) => {
            subMenus[idx] = menu.subMenus;
        });
        this.state = {
            activeMenuId: null,
            subMenus,
            yPosition: 0
        };
        this._onSelectMenu = this._onSelectMenu.bind(this);
        this._onSubPanelClose = this._onSubPanelClose.bind(this);
    }
    _onSelectMenu(evt, menuId) {
        const targetPosition = evt.target.getBoundingClientRect();
        this.setState({
            activeMenuId: menuId,
            yPosition: targetPosition.top - 35 //TODO temporary : to improve
        });
    }
    _onSubPanelClose() {
        this.setState({
            activeMenuId: null
        })
    }
    render() {
        const { children, handleBrandClick, menus, showLabels, showPanel, homePath, pathname } = this.props;
        const size = showLabels ? 'large' : 'small';
        const {activeMenuId, subMenus, yPosition} = this.state;
        const displayPanel = activeMenuId && subMenus[activeMenuId];
        const subMenuItems = subMenus[activeMenuId];
        return (
            <nav data-focus='menu' data-size={size}>
                <div>
                    <div data-focus='menu-brand' data-click={!!handleBrandClick} onClick={() => handleBrandClick && handleBrandClick()} />
                    <MenuList activeMenuId={activeMenuId} menus={menus} onClick={this._onSelectMenu} homePath={homePath} pathname={pathname} showLabels={showLabels} showPanel={showPanel} />
                    {children}
                    {showPanel && subMenuItems &&
                        <MenuPanel onClose={this._onSubPanelClose}>
                            <MenuList offset={yPosition} menus={subMenuItems} onClose={this._onSubPanelClose} showLabels={true} showPanel={false} />
                        </MenuPanel>
                    }
                </div>
            </nav>
        );
    };
}
Menu.displayName = 'Menu';
Menu.propTypes = {
    handleBrandClick: PropTypes.func,
    menus: PropTypes.array.isRequired,
    homePath: PropTypes.string,
    pathname: PropTypes.string,
    showPanel: PropTypes.bool,
    showLabels: PropTypes.bool
};
Menu.defaultProps =  {
    menus: [],
    showLabels: false,
    showPanel: true
};
export default Menu;
