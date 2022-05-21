import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import SafeAnchor from './SafeAnchor';

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

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
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as", "innerRef"]);

    var classes = classNames(className, bsPrefix, active && 'active', bsPrefix + "-" + variant, block && bsPrefix + "-block", size && bsPrefix + "-" + size);

    if (props.href) {
      return React.createElement(SafeAnchor, _extends({}, props, {
        as: as,
        innerRef: innerRef,
        className: classNames(classes, props.disabled && 'disabled')
      }));
    }

    var Component = as || 'button';
    if (innerRef) props.ref = innerRef;
    return React.createElement(Component, _extends({}, props, {
      type: type,
      className: classes
    }));
  };

  return Button;
}(React.Component);

Button.defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
export default createBootstrapComponent(Button, {
  prefix: 'btn',
  forwardRefAs: 'innerRef'
});