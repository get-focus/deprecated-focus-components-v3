'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _material = require('../behaviours/material');

var _material2 = _interopRequireDefault(_material);

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var BTN_JS = 'mdl-js-button';
var BTN_CLASS = 'mdl-button';
var BUTTON_PRFX = 'mdl-button--';
var RIPPLE_EFFECT = 'mdl-js-ripple-effect';

var propTypes = {
    color: _react.PropTypes.oneOf([undefined, 'colored', 'primary', 'accent']),
    id: _react.PropTypes.string,
    handleOnClick: _react.PropTypes.func, //to remove in V2
    hasRipple: _react.PropTypes.bool,
    isJs: _react.PropTypes.bool,
    icon: _react.PropTypes.string,
    iconLibrary: _react.PropTypes.oneOf(['material', 'font-awesome', 'font-custom']),
    label: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    shape: _react.PropTypes.oneOf([undefined, 'raised', 'fab', 'icon', 'mini-fab']),
    type: _react.PropTypes.oneOf(['submit', 'button']),
    disabled: _react.PropTypes.oneOfType[(_react.PropTypes.string, _react.PropTypes.bool)],
    loading: _react.PropTypes.bool
};

var defaultProps = {
    type: 'submit',
    shape: 'raised',
    label: '',
    icon: null,
    id: '',
    hasRipple: true,
    isJs: true,
    iconLibrary: 'material'
};

var DoubleActionButton = (_dec = (0, _material2.default)('materialButton', 'MaterialButton'), _dec(_class = function (_Component) {
    _inherits(DoubleActionButton, _Component);

    function DoubleActionButton() {
        _classCallCheck(this, DoubleActionButton);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    /**
    * Called when component is mounted.
    */
    DoubleActionButton.prototype.componentDidMount = function componentDidMount() {
        var hasRipple = this.props.hasRipple;

        var refNode = _reactDom2.default.findDOMNode(this.refs['materialButton']);
        if (hasRipple) {
            componentHandler.upgradeElement(refNode, 'MaterialRipple');
        }
    };

    DoubleActionButton.prototype.componentDidUpdate = function componentDidUpdate() {
        var spinnerNode = _reactDom2.default.findDOMNode(this.refs['double-action-button-spinner']);
        if (spinnerNode) {
            componentHandler.upgradeElement(spinnerNode, 'MaterialSpinner');
        }
    };

    /**
    * Date de composant.
    * @return {string} Classe.
    */


    DoubleActionButton.prototype._getComponentClassName = function _getComponentClassName() {
        var _props = this.props,
            shape = _props.shape,
            color = _props.color,
            hasRipple = _props.hasRipple,
            isJs = _props.isJs;

        var SHAPE_CLASS = void 0;

        switch (shape) {
            case 'raised':
                SHAPE_CLASS = BUTTON_PRFX + 'raised';
                break;
            case 'fab':
                SHAPE_CLASS = BUTTON_PRFX + 'fab';
                break;
            case 'icon':
                SHAPE_CLASS = BUTTON_PRFX + 'icon';
                break;
            case 'mini-fab':
                SHAPE_CLASS = BUTTON_PRFX + 'mini-fab ' + BUTTON_PRFX + 'fab';
                break;
            case null:
                SHAPE_CLASS = '';
                break;
            default:
                SHAPE_CLASS = null;
                break;
        }

        var COLOR_CLASS = color ? '' + BUTTON_PRFX + color : '';
        var JS_CLASS = isJs ? BTN_JS : '';
        var RIPPLE_EFFECT_CLASS = hasRipple ? RIPPLE_EFFECT : '';
        return BTN_CLASS + ' ' + COLOR_CLASS + ' ' + SHAPE_CLASS + ' ' + JS_CLASS + ' ' + RIPPLE_EFFECT_CLASS;
    };

    /**
    * Render the pressed button.
    * @return {Component} - Component button.
    */


    DoubleActionButton.prototype.renderPressedButton = function renderPressedButton() {
        return _react2.default.createElement(
            'button',
            null,
            'Loading...'
        );
    };

    /**
    * Render an icon.
    * @return {Component} - Composant icone.
    */


    DoubleActionButton.prototype._renderIcon = function _renderIcon() {
        var _props2 = this.props,
            icon = _props2.icon,
            iconLibrary = _props2.iconLibrary;

        switch (iconLibrary) {
            case 'material':
                return _react2.default.createElement(
                    'i',
                    { className: 'material-icons' },
                    icon
                );
            case 'font-awesome':
                var faCss = 'fa fa-' + icon;
                return _react2.default.createElement('i', { className: faCss });
            case 'font-custom':
                return _react2.default.createElement('span', { className: 'icon-' + icon });
            default:
                return null;
        }
    };

    /**
    * Render the label.
    * @return {Component} - Tle button label.
    */
    DoubleActionButton.prototype._renderLabel = function _renderLabel() {
        var _props3 = this.props,
            label = _props3.label,
            shape = _props3.shape;

        if (label && 'fab' !== shape && 'icon' !== shape && 'mini-fab' !== shape) {
            return _i18next2.default.t(label);
        }
        return null;
    };

    /** inheritedDoc */
    DoubleActionButton.prototype.render = function render() {
        // attribute doc : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Button
        // be careful the way you declare your attribute names : https://developer.mozilla.org/fr/docs/Web/HTML/Element/Button
        var _props4 = this.props,
            className = _props4.className,
            disabled = _props4.disabled,
            formNoValidate = _props4.formNoValidate,
            handleOnClick = _props4.handleOnClick,
            icon = _props4.icon,
            id = _props4.id,
            onClick = _props4.onClick,
            type = _props4.type,
            label = _props4.label,
            style = _props4.style,
            hasRipple = _props4.hasRipple,
            isJs = _props4.isJs,
            iconLibrary = _props4.iconLibrary,
            saving = _props4.saving,
            otherProps = _objectWithoutProperties(_props4, ['className', 'disabled', 'formNoValidate', 'handleOnClick', 'icon', 'id', 'onClick', 'type', 'label', 'style', 'hasRipple', 'isJs', 'iconLibrary', 'saving']);

        var otherInputProps = _extends({ formNoValidate: formNoValidate, onClick: handleOnClick ? handleOnClick : onClick, style: style, type: type }, otherProps); //on click for legacy. Remove handleOnClick in v2
        var renderedClassName = ((className ? className : '') + ' ' + this._getComponentClassName.call(this)).trim();

        if (saving) console.log('MORRAY cest a dire que...');
        return _react2.default.createElement(
            'button',
            _extends({ alt: _i18next2.default.t(label), onClick: this._handleOnClick, className: renderedClassName, disabled: saving, 'data-focus': 'button-action', id: id, title: _i18next2.default.t(label) }, otherInputProps, { ref: 'materialButton' }),
            !saving && icon && this._renderIcon.call(this),
            !saving && this._renderLabel.call(this),
            saving && _react2.default.createElement('div', { className: 'mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active', 'data-focus': 'double-action-button-spinner', ref: 'double-action-button-spinner' })
        );
    };

    return DoubleActionButton;
}(_react.Component)) || _class);


DoubleActionButton.displayName = 'DoubleActionButton';
DoubleActionButton.defaultProps = defaultProps;
DoubleActionButton.propTypes = propTypes;

exports.default = DoubleActionButton;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyLUZSLmpzIl0sIm5hbWVzIjpbIkJUTl9KUyIsIkJUTl9DTEFTUyIsIkJVVFRPTl9QUkZYIiwiUklQUExFX0VGRkVDVCIsInByb3BUeXBlcyIsImNvbG9yIiwib25lT2YiLCJ1bmRlZmluZWQiLCJpZCIsInN0cmluZyIsImhhbmRsZU9uQ2xpY2siLCJmdW5jIiwiaGFzUmlwcGxlIiwiYm9vbCIsImlzSnMiLCJpY29uIiwiaWNvbkxpYnJhcnkiLCJsYWJlbCIsIm9uQ2xpY2siLCJzaGFwZSIsInR5cGUiLCJkaXNhYmxlZCIsIm9uZU9mVHlwZSIsImxvYWRpbmciLCJkZWZhdWx0UHJvcHMiLCJEb3VibGVBY3Rpb25CdXR0b24iLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwicmVmTm9kZSIsImZpbmRET01Ob2RlIiwicmVmcyIsImNvbXBvbmVudEhhbmRsZXIiLCJ1cGdyYWRlRWxlbWVudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInNwaW5uZXJOb2RlIiwiX2dldENvbXBvbmVudENsYXNzTmFtZSIsIlNIQVBFX0NMQVNTIiwiQ09MT1JfQ0xBU1MiLCJKU19DTEFTUyIsIlJJUFBMRV9FRkZFQ1RfQ0xBU1MiLCJyZW5kZXJQcmVzc2VkQnV0dG9uIiwiX3JlbmRlckljb24iLCJmYUNzcyIsIl9yZW5kZXJMYWJlbCIsInQiLCJyZW5kZXIiLCJjbGFzc05hbWUiLCJmb3JtTm9WYWxpZGF0ZSIsInN0eWxlIiwic2F2aW5nIiwib3RoZXJQcm9wcyIsIm90aGVySW5wdXRQcm9wcyIsInJlbmRlcmVkQ2xhc3NOYW1lIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJfaGFuZGxlT25DbGljayIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLGVBQWY7QUFDQSxJQUFNQyxZQUFZLFlBQWxCO0FBQ0EsSUFBTUMsY0FBYyxjQUFwQjtBQUNBLElB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a0JBQVFvQyxDQUFSLENBQVUzQixLQUFWLENBQXZKLElBQTZLa0MsZUFBN0ssSUFBOEwsS0FBSSxnQkFBbE07QUFDSyxhQUFDRixNQUFELElBQVdsQyxJQUFYLElBQXFCLEtBQUswQixXQUFQLE1BQUUsSUFBRixDQUR4QjtBQUVLLGFBQUNRLE1BQUQsSUFBYSxLQUFLTixZQUFQLE1BQUUsSUFBRixDQUZoQjtBQUdLTSxzQkFBVSx1Q0FBSyxXQUFVLGdFQUFmLEVBQWdGLGNBQVcsOEJBQTNGLEVBQTBILEtBQUksOEJBQTlIO0FBSGYsU0FESjtBQU9ILEs7O1dBOUdDeEIsa0I7Ozs7QUFpSE5BLG1CQUFtQmdDLFdBQW5CLEdBQWlDLG9CQUFqQztBQUNBaEMsbUJBQW1CRCxZQUFuQixHQUFrQ0EsWUFBbEM7QUFDQUMsbUJBQW1CckIsU0FBbkIsR0FBK0JBLFNBQS9COztrQkFFZXFCLGtCIiwiZmlsZSI6ImZyLUZSLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBNREJlaGF2aW91ciBmcm9tICcuLi9iZWhhdmlvdXJzL21hdGVyaWFsJztcclxuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XHJcblxyXG5jb25zdCBCVE5fSlMgPSAnbWRsLWpzLWJ1dHRvbic7XHJcbmNvbnN0IEJUTl9DTEFTUyA9ICdtZGwtYnV0dG9uJztcclxuY29uc3QgQlVUVE9OX1BSRlggPSAnbWRsLWJ1dHRvbi0tJztcclxuY29uc3QgUklQUExFX0VGRkVDVCA9ICdtZGwtanMtcmlwcGxlLWVmZmVjdCc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFt1bmRlZmluZWQsJ2NvbG9yZWQnLCAncHJpbWFyeScsICdhY2NlbnQnXSksXHJcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhhbmRsZU9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLCAvL3RvIHJlbW92ZSBpbiBWMlxyXG4gICAgaGFzUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIGlzSnM6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGljb25MaWJyYXJ5OiBQcm9wVHlwZXMub25lT2YoWydtYXRlcmlhbCcsICdmb250LWF3ZXNvbWUnLCAnZm9udC1jdXN0b20nXSksXHJcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbdW5kZWZpbmVkLCAncmFpc2VkJywgJ2ZhYicsICdpY29uJywgJ21pbmktZmFiJ10pLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnc3VibWl0JywgJ2J1dHRvbiddKSxcclxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSxcbiAgICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbFxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0eXBlOiAnc3VibWl0JyxcclxuICAgIHNoYXBlOiAncmFpc2VkJyxcclxuICAgIGxhYmVsOiAnJyxcclxuICAgIGljb246IG51bGwsXHJcbiAgICBpZDogJycsXHJcbiAgICBoYXNSaXBwbGU6IHRydWUsXHJcbiAgICBpc0pzOiB0cnVlLFxyXG4gICAgaWNvbkxpYnJhcnk6ICdtYXRlcmlhbCdcclxufVxyXG5cclxuQE1EQmVoYXZpb3VyKCdtYXRlcmlhbEJ1dHRvbicsICdNYXRlcmlhbEJ1dHRvbicpXHJcbmNsYXNzIERvdWJsZUFjdGlvbkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG4gICAgKi9cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHtoYXNSaXBwbGV9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCByZWZOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzWydtYXRlcmlhbEJ1dHRvbiddKTtcclxuICAgICAgICBpZiAoaGFzUmlwcGxlKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQocmVmTm9kZSwgJ01hdGVyaWFsUmlwcGxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBzcGlubmVyTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmc1snZG91YmxlLWFjdGlvbi1idXR0b24tc3Bpbm5lciddKTtcclxuICAgICAgICBpZihzcGlubmVyTm9kZSkge1xyXG4gICAgICAgICAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KHNwaW5uZXJOb2RlLCAnTWF0ZXJpYWxTcGlubmVyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBEYXRlIGRlIGNvbXBvc2FudC5cclxuICAgICogQHJldHVybiB7c3RyaW5nfSBDbGFzc2UuXHJcbiAgICAqL1xyXG4gICAgX2dldENvbXBvbmVudENsYXNzTmFtZSgpIHtcclxuICAgICAgICBjb25zdCB7c2hhcGUsIGNvbG9yLCBoYXNSaXBwbGUsIGlzSnN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgU0hBUEVfQ0xBU1M7XG5cclxuICAgICAgICBzd2l0Y2ggKHNoYXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3JhaXNlZCc6XHJcbiAgICAgICAgICAgICAgICBTSEFQRV9DTEFTUyA9IGAke0JVVFRPTl9QUkZYfXJhaXNlZGA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZmFiJzpcclxuICAgICAgICAgICAgICAgIFNIQVBFX0NMQVNTID0gYCR7QlVUVE9OX1BSRlh9ZmFiYDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdpY29uJzpcclxuICAgICAgICAgICAgICAgIFNIQVBFX0NMQVNTID0gYCR7QlVUVE9OX1BSRlh9aWNvbmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWluaS1mYWInOlxyXG4gICAgICAgICAgICAgICAgU0hBUEVfQ0xBU1MgPSBgJHtCVVRUT05fUFJGWH1taW5pLWZhYiAke0JVVFRPTl9QUkZYfWZhYmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBudWxsOlxyXG4gICAgICAgICAgICAgICAgU0hBUEVfQ0xBU1MgPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgU0hBUEVfQ0xBU1MgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxuXHJcbiAgICAgICAgY29uc3QgQ09MT1JfQ0xBU1MgPSBjb2xvciA/IGAke0JVVFRPTl9QUkZYfSR7Y29sb3J9YCA6ICcnO1xyXG4gICAgICAgIGNvbnN0IEpTX0NMQVNTID0gaXNKcyA/IEJUTl9KUyA6ICcnO1xyXG4gICAgICAgIGNvbnN0IFJJUFBMRV9FRkZFQ1RfQ0xBU1MgPSBoYXNSaXBwbGUgPyBSSVBQTEVfRUZGRUNUIDogJyc7XHJcbiAgICAgICAgcmV0dXJuIGAke0JUTl9DTEFTU30gJHtDT0xPUl9DTEFTU30gJHtTSEFQRV9DTEFTU30gJHtKU19DTEFTU30gJHtSSVBQTEVfRUZGRUNUX0NMQVNTfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIFJlbmRlciB0aGUgcHJlc3NlZCBidXR0b24uXHJcbiAgICAqIEByZXR1cm4ge0NvbXBvbmVudH0gLSBDb21wb25lbnQgYnV0dG9uLlxyXG4gICAgKi9cclxuICAgIHJlbmRlclByZXNzZWRCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuICg8YnV0dG9uPkxvYWRpbmcuLi48L2J1dHRvbj4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZW5kZXIgYW4gaWNvbi5cclxuICAgICogQHJldHVybiB7Q29tcG9uZW50fSAtIENvbXBvc2FudCBpY29uZS5cclxuICAgICovXHJcbiAgICBfcmVuZGVySWNvbigpIHtcclxuICAgICAgICBjb25zdCB7aWNvbiwgaWNvbkxpYnJhcnl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBzd2l0Y2ggKGljb25MaWJyYXJ5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ21hdGVyaWFsJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiA8aSBjbGFzc05hbWU9J21hdGVyaWFsLWljb25zJz57aWNvbn08L2k+O1xyXG4gICAgICAgICAgICBjYXNlICdmb250LWF3ZXNvbWUnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFDc3MgPSBgZmEgZmEtJHtpY29ufWA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPXtmYUNzc30+PC9pPjtcclxuICAgICAgICAgICAgY2FzZSAnZm9udC1jdXN0b20nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17YGljb24tJHtpY29ufWB9Pjwvc3Bhbj47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBSZW5kZXIgdGhlIGxhYmVsLlxyXG4gICAgKiBAcmV0dXJuIHtDb21wb25lbnR9IC0gVGxlIGJ1dHRvbiBsYWJlbC5cclxuICAgICovXHJcbiAgICBfcmVuZGVyTGFiZWwoKSB7XHJcbiAgICAgICAgY29uc3Qge2xhYmVsLCBzaGFwZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChsYWJlbCAmJiAnZmFiJyAhPT0gc2hhcGUgJiYgJ2ljb24nICE9PSBzaGFwZSAmJiAnbWluaS1mYWInICE9PSBzaGFwZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGkxOG5leHQudChsYWJlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKiogaW5oZXJpdGVkRG9jICovXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gYXR0cmlidXRlIGRvYyA6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9CdXR0b25cclxuICAgICAgICAvLyBiZSBjYXJlZnVsIHRoZSB3YXkgeW91IGRlY2xhcmUgeW91ciBhdHRyaWJ1dGUgbmFtZXMgOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvQnV0dG9uXHJcbiAgICAgICAgY29uc3Qge2NsYXNzTmFtZSwgZGlzYWJsZWQsIGZvcm1Ob1ZhbGlkYXRlLCBoYW5kbGVPbkNsaWNrLCBpY29uLCBpZCwgb25DbGljaywgdHlwZSwgbGFiZWwsIHN0eWxlLCBoYXNSaXBwbGUsIGlzSnMsIGljb25MaWJyYXJ5LCBzYXZpbmcsIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3Qgb3RoZXJJbnB1dFByb3BzID0geyBmb3JtTm9WYWxpZGF0ZSwgb25DbGljazogaGFuZGxlT25DbGljayA/IGhhbmRsZU9uQ2xpY2sgOiBvbkNsaWNrLCBzdHlsZSwgdHlwZSwgLi4ub3RoZXJQcm9wc307IC8vb24gY2xpY2sgZm9yIGxlZ2FjeS4gUmVtb3ZlIGhhbmRsZU9uQ2xpY2sgaW4gdjJcclxuICAgICAgICBjb25zdCByZW5kZXJlZENsYXNzTmFtZSA9IGAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfSAkezo6dGhpcy5fZ2V0Q29tcG9uZW50Q2xhc3NOYW1lKCl9YC50cmltKCk7XG5cbiAgICAgICAgaWYoc2F2aW5nKSBjb25zb2xlLmxvZygnTU9SUkFZIGNlc3QgYSBkaXJlIHF1ZS4uLicpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBhbHQ9e2kxOG5leHQudChsYWJlbCl9IG9uQ2xpY2s9e3RoaXMuX2hhbmRsZU9uQ2xpY2t9IGNsYXNzTmFtZT17cmVuZGVyZWRDbGFzc05hbWV9IGRpc2FibGVkPXtzYXZpbmd9IGRhdGEtZm9jdXM9J2J1dHRvbi1hY3Rpb24nIGlkPXtpZH0gdGl0bGU9e2kxOG5leHQudChsYWJlbCl9IHsuLi5vdGhlcklucHV0UHJvcHN9IHJlZj0nbWF0ZXJpYWxCdXR0b24nPlxuICAgICAgICAgICAgICAgIHshc2F2aW5nICYmIGljb24gJiYgOjp0aGlzLl9yZW5kZXJJY29uKCl9XHJcbiAgICAgICAgICAgICAgICB7IXNhdmluZyAmJiA6OnRoaXMuX3JlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgICAgICB7c2F2aW5nICYmIDxkaXYgY2xhc3NOYW1lPSdtZGwtc3Bpbm5lciBtZGwtc3Bpbm5lci0tc2luZ2xlLWNvbG9yIG1kbC1qcy1zcGlubmVyIGlzLWFjdGl2ZScgZGF0YS1mb2N1cz0nZG91YmxlLWFjdGlvbi1idXR0b24tc3Bpbm5lcicgcmVmPSdkb3VibGUtYWN0aW9uLWJ1dHRvbi1zcGlubmVyJyA+PC9kaXY+fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Eb3VibGVBY3Rpb25CdXR0b24uZGlzcGxheU5hbWUgPSAnRG91YmxlQWN0aW9uQnV0dG9uJ1xyXG5Eb3VibGVBY3Rpb25CdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xyXG5Eb3VibGVBY3Rpb25CdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG91YmxlQWN0aW9uQnV0dG9uO1xyXG4iXX0=