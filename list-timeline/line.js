"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**@jsx*/


// import builder from 'focus-core/component/builder';
// import type from 'focus-core/component/types';
// var translationMixin = require('../../common/i18n').mixin;
// var referenceMixin = require('../../common/mixin/reference-property');
// var definitionMixin = require('../../common/mixin/definition');
// var builtInComponentsMixin = require('../mixin/built-in-components');


var Line = function (_PureComponent) {
    _inherits(Line, _PureComponent);

    function Line() {
        var _temp, _this, _ret;

        _classCallCheck(this, Line);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.getValue = function () {
            return {
                item: _this.props.data
            };
        }, _this._handleLineClick = function (event) {
            if (_this.props.onLineClick) {
                _this.props.onLineClick(_this.props.data);
            }
        }, _this._renderLineContent = function () {
            if (_this.renderLineContent) {
                return _this.renderLineContent(_this.props.data);
            } else {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "timeline-heading" },
                        _react2.default.createElement(
                            "h4",
                            { className: "timeline-title" },
                            _this.props.data.title
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "timeline-body" },
                        _react2.default.createElement(
                            "p",
                            null,
                            _this.props.data.body
                        )
                    )
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
     * Get the line value.
     * @returns {object} - the data od the line.
     */


    /**
     * Line Click handler.
     * @param {object} event - the event
     */


    /**
     * render content for a line.
     * @returns {XML} the line content
     */


    /**
     * Render line in list.
     * @returns {XML} - the render of the line
     */
    Line.prototype.render = function render() {
        if (this.renderLine) {
            return this.renderLine();
        } else {
            return _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "timeline-date" },
                    this.props.data[this.props.dateField]
                ),
                _react2.default.createElement("div", { className: "timeline-badge" }),
                _react2.default.createElement(
                    "div",
                    { className: "timeline-panel", onClick: this._handleLineClick },
                    this._renderLineContent()
                )
            );
        }
    };

    return Line;
}(_react.PureComponent);

Line.displayName = 'timeline-line';
Line.propTypes = {
    data: _react.PropTypes.object,
    dateField: _react.PropTypes.string,
    dateComponent: _react.PropTypes.object,
    onLineClick: _react.PropTypes.func
};

exports.default = Line;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyLUZSLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJnZXRWYWx1ZSIsIml0ZW0iLCJwcm9wcyIsImRhdGEiLCJfaGFuZGxlTGluZUNsaWNrIiwiZXZlbnQiLCJvbkxpbmVDbGljayIsIl9yZW5kZXJMaW5lQ29udGVudCIsInJlbmRlckxpbmVDb250ZW50IiwidGl0bGUiLCJib2R5IiwicmVuZGVyIiwicmVuZGVyTGluZSIsImRhdGVGaWVsZCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiZGF0ZUNvbXBvbmVudCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7K2VBREE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBR01BLEk7Y0FBQUEsSTs7YUFBQUEsSTs7OzhCQUFBQSxJOzs7Ozs7d0pBTUVDLFEsR0FBVyxZQUFPO0FBQ2QsbUJBQU87QUFDSEMsc0JBQU0sTUFBS0MsS0FBTCxDQUFXQztBQURkLGFBQVA7QUFHSCxTLFFBTURDLGdCLEdBQW1CLFVBQUNDLEtBQUQsRUFBVztBQUMxQixnQkFBRyxNQUFLSCxLQUFMLENBQVdJLFdBQWQsRUFBMkI7QUFDdkIsc0JBQUtKLEtBQUwsQ0FBV0ksV0FBWCxDQUF1QixNQUFLSixLQUFMLENBQVdDLElBQWxDO0FBQ0g7QUFDSixTLFFBTURJLGtCLEdBQXFCLFlBQU07QUFDdkIsZ0JBQUcsTUFBS0MsaUJBQVIsRUFBMkI7QUFDdkIsdUJBQU8sTUFBS0EsaUJBQUwsQ0FBdUIsTUFBS04sS0FBTCxDQUFXQyxJQUFsQyxDQUFQO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsdUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLDBCQUFLLFdBQVUsa0JBQWY7QUFDSTtBQUFBO0FBQUEsOEJBQUksV0FBVSxnQkFBZDtBQUFnQyxrQ0FBS0QsS0FBTCxDQUFXQyxJQUFYLENBQWdCTTtBQUFoRDtBQURKLHFCQURKO0FBSUk7QUFBQTtBQUFBLDBCQUFLLFdBQVUsZUFBZjtBQUNJO0FBQUE7QUFBQTtBQUFJLGtDQUFLUCxLQUFMLENBQVdDLElBQVgsQ0FBZ0JPO0FBQXBCO0FBREo7QUFKSixpQkFESjtBQVdIO0FBQ0osUzs7O0FBeENEOzs7Ozs7QUFVQTs7Ozs7O0FBVUE7Ozs7OztBQXNCQTs7OztBQTVDRlgsUSxXQWdERVksTSxxQkFBUztBQUNMLFlBQUcsS0FBS0MsVUFBUixFQUFvQjtBQUNoQixtQkFBTyxLQUFLQSxVQUFMLEVBQVA7QUFDSCxTQUZELE1BRUs7QUFDRCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxlQUFmO0FBQWdDLHlCQUFLVixLQUFMLENBQVdDLElBQVgsQ0FBZ0IsS0FBS0QsS0FBTCxDQUFXVyxTQUEzQjtBQUFoQyxpQkFESjtBQUVJLHVEQUFLLFdBQVUsZ0JBQWYsR0FGSjtBQUdJO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGdCQUFmLEVBQWdDLFNBQVMsS0FBS1QsZ0JBQTlDO0FBQ0sseUJBQUtHLGtCQUFMO0FBREw7QUFISixhQURKO0FBU0g7QUFDSixLOztXQTlESFIsSTs7O0FBaUVOQSxLQUFLZSxXQUFMLEdBQW1CLGVBQW5CO0FBQ0FmLEtBQUtnQixTQUFMLEdBQWlCO0FBQ2JaLFVBQU0saUJBQVVhLE1BREg7QUFFYkgsZUFBVyxpQkFBVUksTUFGUjtBQUdiQyxtQkFBZSxpQkFBVUYsTUFIWjtBQUliVixpQkFBYSxpQkFBVWE7QUFKVixDQUFqQjs7a0JBT2VwQixJIiwiZmlsZSI6ImZyLUZSLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCovXHJcbmltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gaW1wb3J0IGJ1aWxkZXIgZnJvbSAnZm9jdXMtY29yZS9jb21wb25lbnQvYnVpbGRlcic7XHJcbi8vIGltcG9ydCB0eXBlIGZyb20gJ2ZvY3VzLWNvcmUvY29tcG9uZW50L3R5cGVzJztcclxuLy8gdmFyIHRyYW5zbGF0aW9uTWl4aW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vaTE4bicpLm1peGluO1xyXG4vLyB2YXIgcmVmZXJlbmNlTWl4aW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbWl4aW4vcmVmZXJlbmNlLXByb3BlcnR5Jyk7XHJcbi8vIHZhciBkZWZpbml0aW9uTWl4aW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vbWl4aW4vZGVmaW5pdGlvbicpO1xyXG4vLyB2YXIgYnVpbHRJbkNvbXBvbmVudHNNaXhpbiA9IHJlcXVpcmUoJy4uL21peGluL2J1aWx0LWluLWNvbXBvbmVudHMnKTtcclxuXHJcblxyXG5jbGFzcyBMaW5lIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEdldCB0aGUgbGluZSB2YWx1ZS5cclxuICAgICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIHRoZSBkYXRhIG9kIHRoZSBsaW5lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFZhbHVlID0gKCkgPT4gIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IHRoaXMucHJvcHMuZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGluZSBDbGljayBoYW5kbGVyLlxyXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCAtIHRoZSBldmVudFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIF9oYW5kbGVMaW5lQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5vbkxpbmVDbGljaykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkxpbmVDbGljayh0aGlzLnByb3BzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiByZW5kZXIgY29udGVudCBmb3IgYSBsaW5lLlxyXG4gICAgICAgICAqIEByZXR1cm5zIHtYTUx9IHRoZSBsaW5lIGNvbnRlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICBfcmVuZGVyTGluZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVuZGVyTGluZUNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckxpbmVDb250ZW50KHRoaXMucHJvcHMuZGF0YSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aW1lbGluZS10aXRsZVwiPnt0aGlzLnByb3BzLmRhdGEudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmUtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuZGF0YS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmVuZGVyIGxpbmUgaW4gbGlzdC5cclxuICAgICAgICAgKiBAcmV0dXJucyB7WE1MfSAtIHRoZSByZW5kZXIgb2YgdGhlIGxpbmVcclxuICAgICAgICAgKi9cclxuICAgICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVuZGVyTGluZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTGluZSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLWRhdGVcIj57dGhpcy5wcm9wcy5kYXRhW3RoaXMucHJvcHMuZGF0ZUZpZWxkXX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZS1iYWRnZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lLXBhbmVsXCIgb25DbGljaz17dGhpcy5faGFuZGxlTGluZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJMaW5lQ29udGVudCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuTGluZS5kaXNwbGF5TmFtZSA9ICd0aW1lbGluZS1saW5lJ1xyXG5MaW5lLnByb3BUeXBlcyA9IHtcclxuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBkYXRlRmllbGQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBkYXRlQ29tcG9uZW50OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgb25MaW5lQ2xpY2s6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbmU7XHJcbiJdfQ==