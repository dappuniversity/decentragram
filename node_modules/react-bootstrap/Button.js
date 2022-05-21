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

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var Button =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Button, _React$Component);

  function Button() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        size = _this$props.size,
        active = _this$props.active,
        className = _this$props.className,
        block = _this$props.block,
        type = _this$props.type,
        as = _this$props.as,
        innerRef = _this$props.innerRef,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as", "innerRef"]);
    var classes = (0, _classnames.default)(className, bsPrefix, active && 'active', bsPrefix + "-" + variant, block && bsPrefix + "-block", size && bsPrefix + "-" + size);

    if (props.href) {
      return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
        as: as,
        innerRef: innerRef,
        className: (0, _classnames.default)(classes, props.disabled && 'disabled')
      }));
    }

    var Component = as || 'button';
    if (innerRef) props.ref = innerRef;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      type: type,
      className: classes
    }));
  };

  return Button;
}(_react.default.Component);

Button.defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Button, {
  prefix: 'btn',
  forwardRefAs: 'innerRef'
});

exports.default = _default;
module.exports = exports["default"];