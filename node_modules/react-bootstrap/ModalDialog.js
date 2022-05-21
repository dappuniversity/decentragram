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

var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ModalDialog, _React$Component);

  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        centered = _this$props.centered,
        size = _this$props.size,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "centered", "size", "children"]);
    var bsClass = bsPrefix + "-dialog";
    return _react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(bsClass, className, size && bsPrefix + "-" + size, centered && bsClass + "-centered")
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(bsPrefix + "-content")
    }, children));
  };

  return ModalDialog;
}(_react.default.Component);

var _default = (0, _ThemeProvider.createBootstrapComponent)(ModalDialog, 'modal');

exports.default = _default;
module.exports = exports["default"];