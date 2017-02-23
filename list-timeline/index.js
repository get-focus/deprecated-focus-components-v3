'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
// var Line = require('./line').mixin;
// var uuid= require('uuid');
//
// var translationMixin = require('../../common/i18n').mixin;
// var infiniteScrollMixin = require('../mixin/infinite-scroll').mixin;
// var referenceMixin = require('../../common/mixin/reference-property');

//Add a ref to the props if the component is not pure add nothing in the other case.
//import {addRefToPropsIfNotPure, LINE} from '../../utils/is-react-class-component';

var Timeline = function (_PureComponent) {
    _inherits(Timeline, _PureComponent);

    function Timeline() {
        var _temp, _this, _ret;

        _classCallCheck(this, Timeline);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this._renderLines = function () {
            //const {LineComponent = React.createClass(Line), idField, dateField, onLineClick, data, ...otherProps} = this.props;
            // LEGACY CODE
            var customLineComponent = _this.props.lineComponent;
            if (customLineComponent) {
                console.warn('%c DEPRECATED : You are using the lineComponent prop in a timeline component, this will be removed in the next release of Focus Components. Please use LineComponent prop instead.', 'color: #FF9C00; font-weight: bold');
            }
            var FinalLineComponent = customLineComponent || _line2.default;
            // END OF LEGACY CODE

            var _this$props = _this.props,
                data = _this$props.data,
                dateField = _this$props.dateField,
                idField = _this$props.idField,
                otherProps = _objectWithoutProperties(_this$props, ['data', 'dateField', 'idField']);

            return data.map(function (line, idx) {
                var timelineFinalProps = _extends({}, otherProps, {
                    data: line,
                    dateField: dateField,
                    key: line[idField]
                });
                return _react2.default.createElement(FinalLineComponent, timelineFinalProps);
            });
        }, _this._renderLoading = function () {
            if (_this.props.isLoading) {
                if (_this.props.loader) {
                    return _this.props.loader();
                }
                return _react2.default.createElement(
                    'li',
                    { className: 'timeline-loading' },
                    _i18next2.default.t('list.loading'),
                    ' ...'
                );
            }
        }, _this._renderManualFetch = function () {
            if (_this.props.isManualFetch && _this.props.hasMoreData) {
                var style = { className: 'primary' };
                return _react2.default.createElement(
                    'li',
                    { className: 'timeline-button' },
                    _react2.default.createElement(_button2.default, { label: 'list.button.showMore',
                        type: 'button',
                        handleOnClick: _this.handleShowMore,
                        style: style })
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    Timeline.prototype.render = function render() {
        return _react2.default.createElement(
            'ul',
            { className: 'timeline' },
            this._renderLines(),
            this._renderLoading(),
            this._renderManualFetch()
        );
    };

    return Timeline;
}(_react.PureComponent);

Timeline.displayName = 'Timeline';
Timeline.defaultProps = {
    data: [],
    idField: 'id',
    dateField: 'date',
    isLoading: false
};
Timeline.propTypes = {
    data: _react.PropTypes.array,
    idField: _react.PropTypes.string,
    dateField: _react.PropTypes.string,
    dateComponent: _react.PropTypes.object,
    lineComponent: _react.PropTypes.func,
    isloading: _react.PropTypes.bool,
    loader: _react.PropTypes.func,
    onLineClick: _react.PropTypes.func
};
exports.default = Timeline;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyLUZSLmpzIl0sIm5hbWVzIjpbIlRpbWVsaW5lIiwiX3JlbmRlckxpbmVzIiwiY3VzdG9tTGluZUNvbXBvbmVudCIsInByb3BzIiwibGluZUNvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwiRmluYWxMaW5lQ29tcG9uZW50IiwiZGF0YSIsImRhdGVGaWVsZCIsImlkRmllbGQiLCJvdGhlclByb3BzIiwibWFwIiwibGluZSIsImlkeCIsInRpbWVsaW5lRmluYWxQcm9wcyIsImtleSIsIl9yZW5kZXJMb2FkaW5nIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwidCIsIl9yZW5kZXJNYW51YWxGZXRjaCIsImlzTWFudWFsRmV0Y2giLCJoYXNNb3JlRGF0YSIsInN0eWxlIiwiY2xhc3NOYW1lIiwiaGFuZGxlU2hvd01vcmUiLCJyZW5kZXIiLCJkaXNwbGF5TmFtZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsImFycmF5Iiwic3RyaW5nIiwiZGF0ZUNvbXBvbmVudCIsIm9iamVjdCIsImZ1bmMiLCJpc2xvYWRpbmciLCJib29sIiwib25MaW5lQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7OztBQVBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztJQUVNQSxRO2NBQUFBLFE7O2FBQUFBLFE7Ozs4QkFBQUEsUTs7Ozs7O3dKQUNGQyxZLEdBQWUsWUFBTTtBQUNqQjtBQUNBO0FBQ0EsZ0JBQU1DLHNCQUFzQixNQUFLQyxLQUFMLENBQVdDLGFBQXZDO0FBQ0EsZ0JBQUlGLG1CQUFKLEVBQXlCO0FBQ3JCRyx3QkFBUUMsSUFBUixDQUFhLG9MQUFiLEVBQW1NLG1DQUFuTTtBQUNIO0FBQ0QsZ0JBQU1DLHFCQUFxQkwscUNBQTNCO0FBQ0E7O0FBUmlCLDhCQVMrQixNQUFLQyxLQVRwQztBQUFBLGdCQVNWSyxJQVRVLGVBU1ZBLElBVFU7QUFBQSxnQkFTTEMsU0FUSyxlQVNMQSxTQVRLO0FBQUEsZ0JBU0tDLE9BVEwsZUFTS0EsT0FUTDtBQUFBLGdCQVNpQkMsVUFUakI7O0FBVWpCLG1CQUFPSCxLQUFLSSxHQUFMLENBQVMsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDM0Isb0JBQU1DLGtDQUNLSixVQURMO0FBRUVILDBCQUFNSyxJQUZSO0FBR0VKLHdDQUhGO0FBSUVPLHlCQUFLSCxLQUFLSCxPQUFMO0FBSlAsa0JBQU47QUFNQSx1QkFBTyw4QkFBQyxrQkFBRCxFQUF3Qkssa0JBQXhCLENBQVA7QUFDSCxhQVJNLENBQVA7QUFTSCxTLFFBRURFLGMsR0FBZ0IsWUFBTztBQUNuQixnQkFBRyxNQUFLZCxLQUFMLENBQVdlLFNBQWQsRUFBeUI7QUFDckIsb0JBQUcsTUFBS2YsS0FBTCxDQUFXZ0IsTUFBZCxFQUFzQjtBQUNsQiwyQkFBTyxNQUFLaEIsS0FBTCxDQUFXZ0IsTUFBWCxFQUFQO0FBQ0g7QUFDRCx1QkFDSTtBQUFBO0FBQUEsc0JBQUksV0FBVSxrQkFBZDtBQUFrQyxzQ0FBS0MsQ0FBTCxDQUFPLGNBQVAsQ0FBbEM7QUFBQTtBQUFBLGlCQURKO0FBR0g7QUFDSixTLFFBRURDLGtCLEdBQW9CLFlBQU07QUFDdEIsZ0JBQUcsTUFBS2xCLEtBQUwsQ0FBV21CLGFBQVgsSUFBNEIsTUFBS25CLEtBQUwsQ0FBV29CLFdBQTFDLEVBQXVEO0FBQ25ELG9CQUFJQyxRQUFRLEVBQUNDLFdBQVcsU0FBWixFQUFaO0FBQ0EsdUJBQ0k7QUFBQTtBQUFBLHNCQUFJLFdBQVUsaUJBQWQ7QUFDSSxzRUFBUSxPQUFNLHNCQUFkO0FBQ0ksOEJBQUssUUFEVDtBQUVJLHVDQUFlLE1BQUtDLGNBRnhCO0FBR0ksK0JBQU9GLEtBSFg7QUFESixpQkFESjtBQVFIO0FBQ0osUzs7O0FBN0NDeEIsWSxXQStDRjJCLE0scUJBQVU7QUFDTixlQUNJO0FBQUE7QUFBQSxjQUFJLFdBQVUsVUFBZDtBQUNLLGlCQUFLMUIsWUFBTCxFQURMO0FBRUssaUJBQUtnQixjQUFMLEVBRkw7QUFHSyxpQkFBS0ksa0JBQUw7QUFITCxTQURKO0FBT0gsSzs7V0F2RENyQixROzs7QUEyRE5BLFNBQVM0QixXQUFULEdBQXVCLFVBQXZCO0FBQ0E1QixTQUFTNkIsWUFBVCxHQUF3QjtBQUNwQnJCLFVBQU0sRUFEYztBQUVwQkUsYUFBUyxJQUZXO0FBR3BCRCxlQUFXLE1BSFM7QUFJcEJTLGVBQVc7QUFKUyxDQUF4QjtBQU1BbEIsU0FBUzhCLFNBQVQsR0FBcUI7QUFDakJ0QixVQUFNLGlCQUFVdUIsS0FEQztBQUVqQnJCLGFBQVMsaUJBQVVzQixNQUZGO0FBR2pCdkIsZUFBVyxpQkFBVXVCLE1BSEo7QUFJakJDLG1CQUFlLGlCQUFVQyxNQUpSO0FBS2pCOUIsbUJBQWUsaUJBQVUrQixJQUxSO0FBTWpCQyxlQUFXLGlCQUFVQyxJQU5KO0FBT2pCbEIsWUFBUSxpQkFBVWdCLElBUEQ7QUFRakJHLGlCQUFhLGlCQUFVSDtBQVJOLENBQXJCO2tCQVVlbkMsUSIsImZpbGUiOiJmci1GUi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcywgUHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaTE4biBmcm9tICdpMThuZXh0J1xyXG5cclxuaW1wb3J0IExpbmUgZnJvbSAnLi9saW5lJ1xyXG4vLyB2YXIgTGluZSA9IHJlcXVpcmUoJy4vbGluZScpLm1peGluO1xyXG4vLyB2YXIgdXVpZD0gcmVxdWlyZSgndXVpZCcpO1xyXG4vL1xyXG4vLyB2YXIgdHJhbnNsYXRpb25NaXhpbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9pMThuJykubWl4aW47XHJcbi8vIHZhciBpbmZpbml0ZVNjcm9sbE1peGluID0gcmVxdWlyZSgnLi4vbWl4aW4vaW5maW5pdGUtc2Nyb2xsJykubWl4aW47XHJcbi8vIHZhciByZWZlcmVuY2VNaXhpbiA9IHJlcXVpcmUoJy4uLy4uL2NvbW1vbi9taXhpbi9yZWZlcmVuY2UtcHJvcGVydHknKTtcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcclxuLy9BZGQgYSByZWYgdG8gdGhlIHByb3BzIGlmIHRoZSBjb21wb25lbnQgaXMgbm90IHB1cmUgYWRkIG5vdGhpbmcgaW4gdGhlIG90aGVyIGNhc2UuXHJcbi8vaW1wb3J0IHthZGRSZWZUb1Byb3BzSWZOb3RQdXJlLCBMSU5FfSBmcm9tICcuLi8uLi91dGlscy9pcy1yZWFjdC1jbGFzcy1jb21wb25lbnQnO1xyXG5cclxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIF9yZW5kZXJMaW5lcyA9ICgpID0+IHtcclxuICAgICAgICAvL2NvbnN0IHtMaW5lQ29tcG9uZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3MoTGluZSksIGlkRmllbGQsIGRhdGVGaWVsZCwgb25MaW5lQ2xpY2ssIGRhdGEsIC4uLm90aGVyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAvLyBMRUdBQ1kgQ09ERVxyXG4gICAgICAgIGNvbnN0IGN1c3RvbUxpbmVDb21wb25lbnQgPSB0aGlzLnByb3BzLmxpbmVDb21wb25lbnQ7XHJcbiAgICAgICAgaWYgKGN1c3RvbUxpbmVDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCclYyBERVBSRUNBVEVEIDogWW91IGFyZSB1c2luZyB0aGUgbGluZUNvbXBvbmVudCBwcm9wIGluIGEgdGltZWxpbmUgY29tcG9uZW50LCB0aGlzIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCByZWxlYXNlIG9mIEZvY3VzIENvbXBvbmVudHMuIFBsZWFzZSB1c2UgTGluZUNvbXBvbmVudCBwcm9wIGluc3RlYWQuJywgJ2NvbG9yOiAjRkY5QzAwOyBmb250LXdlaWdodDogYm9sZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBGaW5hbExpbmVDb21wb25lbnQgPSBjdXN0b21MaW5lQ29tcG9uZW50IHx8IExpbmU7XHJcbiAgICAgICAgLy8gRU5EIE9GIExFR0FDWSBDT0RFXHJcbiAgICAgICAgY29uc3Qge2RhdGEsZGF0ZUZpZWxkLGlkRmllbGQsIC4uLm90aGVyUHJvcHN9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXAoKGxpbmUsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lbGluZUZpbmFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ub3RoZXJQcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBsaW5lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVGaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGxpbmVbaWRGaWVsZF1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiA8RmluYWxMaW5lQ29tcG9uZW50IHsuLi50aW1lbGluZUZpbmFsUHJvcHN9IC8+O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZW5kZXJMb2FkaW5nPSAoKSA9PiAge1xyXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMubG9hZGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5sb2FkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpbWVsaW5lLWxvYWRpbmdcIj57aTE4bi50KCdsaXN0LmxvYWRpbmcnKX0gLi4uPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbmRlck1hbnVhbEZldGNoPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pc01hbnVhbEZldGNoICYmIHRoaXMucHJvcHMuaGFzTW9yZURhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0ge2NsYXNzTmFtZTogJ3ByaW1hcnknfTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aW1lbGluZS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwibGlzdC5idXR0b24uc2hvd01vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT25DbGljaz17dGhpcy5oYW5kbGVTaG93TW9yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfS8+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0aW1lbGluZVwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlckxpbmVzKCl9XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyTG9hZGluZygpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlck1hbnVhbEZldGNoKCl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblRpbWVsaW5lLmRpc3BsYXlOYW1lID0gJ1RpbWVsaW5lJztcclxuVGltZWxpbmUuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgZGF0YTogW10sXHJcbiAgICBpZEZpZWxkOiAnaWQnLFxyXG4gICAgZGF0ZUZpZWxkOiAnZGF0ZScsXHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlXHJcbn1cclxuVGltZWxpbmUucHJvcFR5cGVzID0ge1xyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LFxyXG4gICAgaWRGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRhdGVGaWVsZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRhdGVDb21wb25lbnQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBsaW5lQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIGlzbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBsb2FkZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25MaW5lQ2xpY2s6IFByb3BUeXBlcy5mdW5jXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdfQ==