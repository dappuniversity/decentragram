"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var Feedback =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Feedback, _React$Component);

  function Feedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Feedback.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        type = _this$props.type,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "className", "type"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, type && type + "-feedback")
    }));
  };

  return Feedback;
}(_react.default.Component);

Feedback.defaultProps = {
  type: 'valid',
  as: 'div'
};
var _default = Feedback;
exports.default = _default;
module.exports = exports["default"];