import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import Dropdown from './Dropdown';

/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */
var DropdownButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownButton, _React$Component);

  function DropdownButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        variant = _this$props.variant,
        size = _this$props.size,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        href = _this$props.href,
        id = _this$props.id,
        props = _objectWithoutPropertiesLoose(_this$props, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuRole", "disabled", "href", "id"]);

    return React.createElement(Dropdown, props, React.createElement(Dropdown.Toggle, {
      id: id,
      href: href,
      size: size,
      variant: variant,
      disabled: disabled,
      childBsPrefix: bsPrefix
    }, title), React.createElement(Dropdown.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return DropdownButton;
}(React.Component);

export default DropdownButton;