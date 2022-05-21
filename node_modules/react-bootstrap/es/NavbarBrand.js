import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var NavbarBrand =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavbarBrand, _React$Component);

  function NavbarBrand() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarBrand.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        as = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "as"]);

    var Component = as || (props.href ? 'a' : 'span');
    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return NavbarBrand;
}(React.Component);

export default createBootstrapComponent(NavbarBrand, 'navbar-brand');