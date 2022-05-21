"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        toggle = _this$props.toggle,
        vertical = _this$props.vertical,
        className = _this$props.className,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);
    var baseClass = bsPrefix;
    if (vertical) baseClass = bsPrefix + "-vertical";
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, baseClass, size && bsPrefix + "-" + size, toggle && bsPrefix + "-toggle")
    }));
  };

  return ButtonGroup;
}(_react.default.Component);

ButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(ButtonGroup, 'btn-group');

exports.default = _default;
module.exports = exports["default"];