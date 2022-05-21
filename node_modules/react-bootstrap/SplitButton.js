"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

/**
 * @inherits Button, Dropdown
 */
var SplitButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SplitButton, _React$Component);

  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        variant = _this$props.variant,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        onClick = _this$props.onClick,
        href = _this$props.href,
        target = _this$props.target,
        menuRole = _this$props.menuRole,
        rootCloseEvent = _this$props.rootCloseEvent,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "bsPrefix", "size", "variant", "title", "toggleLabel", "children", "onClick", "href", "target", "menuRole", "rootCloseEvent"]);
    return _react.default.createElement(_Dropdown.default, (0, _extends2.default)({}, props, {
      as: _ButtonGroup.default
    }), _react.default.createElement(_Button.default, {
      size: size,
      variant: variant,
      disabled: props.disabled,
      bsPrefix: bsPrefix,
      href: href,
      target: target,
      onClick: onClick
    }, title), _react.default.createElement(_Dropdown.default.Toggle, {
      split: true,
      id: id,
      size: size,
      variant: variant,
      disabled: props.disabled,
      childBsPrefix: bsPrefix
    }, _react.default.createElement("span", {
      className: "sr-only"
    }, toggleLabel)), _react.default.createElement(_Dropdown.default.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return SplitButton;
}(_react.default.Component);

SplitButton.defaultProps = {
  toggleLabel: 'Toggle dropdown'
};
var _default = SplitButton;
exports.default = _default;
module.exports = exports["default"];