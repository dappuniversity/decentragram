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

var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className"]);
    return _react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return ButtonToolbar;
}(_react.default.Component);

ButtonToolbar.defaultProps = {
  role: 'toolbar'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(ButtonToolbar, 'btn-toolbar');

exports.default = _default;
module.exports = exports["default"];