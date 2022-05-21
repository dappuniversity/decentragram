import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import Dropdown from './Dropdown';
import NavItem from './NavItem';
import NavLink from './NavLink';

var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        active = _this$props.active,
        props = _objectWithoutPropertiesLoose(_this$props, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active"]);

    return React.createElement(Dropdown, _extends({}, props, {
      as: NavItem
    }), React.createElement(Dropdown.Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: NavLink
    }, title), React.createElement(Dropdown.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return NavDropdown;
}(React.Component);

NavDropdown.Item = Dropdown.Item;
NavDropdown.Divider = Dropdown.Divider;
NavDropdown.Header = Dropdown.Header;
export default NavDropdown;