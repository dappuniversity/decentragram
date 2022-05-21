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

var Badge =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        pill = _this$props.pill,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "variant", "pill", "className"]);
    return _react.default.createElement("span", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, pill && bsPrefix + "-pill", variant && bsPrefix + "-" + variant)
    }));
  };

  return Badge;
}(_react.default.Component);

Badge.defaultProps = {
  pill: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Badge, 'badge');

exports.default = _default;
module.exports = exports["default"];