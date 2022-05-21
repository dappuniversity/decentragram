"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children", "bsPrefix"]);
    return _react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
      return _react.default.createElement(_Collapse.default, (0, _extends2.default)({
        in: !!(context && context.expanded)
      }, props), _react.default.createElement("div", {
        className: bsPrefix
      }, children));
    });
  };

  return NavbarCollapse;
}(_react.default.Component);

var _default = (0, _ThemeProvider.createBootstrapComponent)(NavbarCollapse, 'navbar-collapse');

exports.default = _default;
module.exports = exports["default"];