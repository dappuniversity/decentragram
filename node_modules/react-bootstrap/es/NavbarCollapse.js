import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import Collapse from './Collapse';
import { createBootstrapComponent } from './ThemeProvider';
import NavbarContext from './NavbarContext';

var NavbarCollapse =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavbarCollapse.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "bsPrefix"]);

    return React.createElement(NavbarContext.Consumer, null, function (context) {
      return React.createElement(Collapse, _extends({
        in: !!(context && context.expanded)
      }, props), React.createElement("div", {
        className: bsPrefix
      }, children));
    });
  };

  return NavbarCollapse;
}(React.Component);

export default createBootstrapComponent(NavbarCollapse, 'navbar-collapse');