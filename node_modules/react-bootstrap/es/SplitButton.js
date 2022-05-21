import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Dropdown from './Dropdown';
/**
 * @inherits Button, Dropdown
 */

var SplitButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SplitButton, _React$Component);

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
        props = _objectWithoutPropertiesLoose(_this$props, ["id", "bsPrefix", "size", "variant", "title", "toggleLabel", "children", "onClick", "href", "target", "menuRole", "rootCloseEvent"]);

    return React.createElement(Dropdown, _extends({}, props, {
      as: ButtonGroup
    }), React.createElement(Button, {
      size: size,
      variant: variant,
      disabled: props.disabled,
      bsPrefix: bsPrefix,
      href: href,
      target: target,
      onClick: onClick
    }, title), React.createElement(Dropdown.Toggle, {
      split: true,
      id: id,
      size: size,
      variant: variant,
      disabled: props.disabled,
      childBsPrefix: bsPrefix
    }, React.createElement("span", {
      className: "sr-only"
    }, toggleLabel)), React.createElement(Dropdown.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return SplitButton;
}(React.Component);

SplitButton.defaultProps = {
  toggleLabel: 'Toggle dropdown'
};
export default SplitButton;