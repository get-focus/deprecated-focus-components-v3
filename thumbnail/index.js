'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // Dependencies


var Thumbnail = function (_PureComponent) {
    _inherits(Thumbnail, _PureComponent);

    function Thumbnail(props) {
        _classCallCheck(this, Thumbnail);

        return _possibleConstructorReturn(this, _PureComponent.call(this, props));
    }

    Thumbnail.prototype.render = function render() {
        var _props = this.props,
            title = _props.title,
            src = _props.src;

        return _react2.default.createElement(
            'div',
            { 'data-focus': 'Thumbnail' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('img', { src: src, alt: title, style: { width: "304px", height: "228px" } }),
                _react2.default.createElement(
                    'div',
                    null,
                    title
                )
            )
        );
    };

    return Thumbnail;
}(_react.PureComponent);

Thumbnail.displayName = 'Title';
Thumbnail.propType = {
    src: _react.PropTypes.string,
    title: _react.PropTypes.string,
    actions: _react.PropTypes.array
};
exports.default = Thumbnail;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyLUZSLmpzIl0sIm5hbWVzIjpbIlRodW1ibmFpbCIsInByb3BzIiwicmVuZGVyIiwidGl0bGUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGUiLCJzdHJpbmciLCJhY3Rpb25zIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7K2VBREE7OztJQUdNQSxTO2NBQUFBLFM7O0FBQ0YsYUFERUEsU0FDRixDQUFZQyxLQUFaLEVBQW1CO0FBQUEsOEJBRGpCRCxTQUNpQjs7QUFBQSxnREFDZiwwQkFBTUMsS0FBTixDQURlO0FBRWxCOztBQUhDRCxhLFdBSUZFLE0scUJBQVM7QUFBQSxxQkFDZ0IsS0FBS0QsS0FEckI7QUFBQSxZQUNFRSxLQURGLFVBQ0VBLEtBREY7QUFBQSxZQUNTQyxHQURULFVBQ1NBLEdBRFQ7O0FBRUwsZUFDSTtBQUFBO0FBQUEsY0FBSyxjQUFXLFdBQWhCO0FBQTRCO0FBQUE7QUFBQTtBQUFLLHVEQUFLLEtBQUtBLEdBQVYsRUFBZSxLQUFLRCxLQUFwQixFQUEyQixPQUFPLEVBQUNFLE9BQU0sT0FBUCxFQUFlQyxRQUFPLE9BQXRCLEVBQWxDLEdBQUw7QUFBd0U7QUFBQTtBQUFBO0FBQU1IO0FBQU47QUFBeEU7QUFBNUIsU0FESjtBQUdILEs7O1dBVENILFM7OztBQVdOQSxVQUFVTyxXQUFWLEdBQXdCLE9BQXhCO0FBQ0FQLFVBQVVRLFFBQVYsR0FBcUI7QUFDakJKLFNBQUssaUJBQVVLLE1BREU7QUFFakJOLFdBQU8saUJBQVVNLE1BRkE7QUFHakJDLGFBQVMsaUJBQVVDO0FBSEYsQ0FBckI7a0JBS2VYLFMiLCJmaWxlIjoiZnItRlIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzLCBQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBUaHVtYm5haWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfTtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7dGl0bGUsIHNyY30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBkYXRhLWZvY3VzPSdUaHVtYm5haWwnPjxkaXY+PGltZyBzcmM9e3NyY30gYWx0PXt0aXRsZX0gc3R5bGU9e3t3aWR0aDpcIjMwNHB4XCIsaGVpZ2h0OlwiMjI4cHhcIn19Lz48ZGl2Pnt0aXRsZX08L2Rpdj48L2Rpdj48L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblRodW1ibmFpbC5kaXNwbGF5TmFtZSA9ICdUaXRsZSc7XHJcblRodW1ibmFpbC5wcm9wVHlwZSA9IHtcclxuICAgIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDtcclxuIl19