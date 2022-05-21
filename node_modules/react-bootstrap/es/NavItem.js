import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var NavItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavItem, _React$Component);

  function NavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "children", "as"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }), children);
  };

  return NavItem;
}(React.Component);

NavItem.defaultProps = {
  as: 'div'
};
export default createBootstrapComponent(NavItem, 'nav-item');