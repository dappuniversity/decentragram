import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Container =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Container, _React$Component);

  function Container() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        fluid = _this$props.fluid,
        Component = _this$props.as,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "fluid", "as", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, fluid ? bsPrefix + "-fluid" : bsPrefix)
    }));
  };

  return Container;
}(React.Component);

Container.defaultProps = {
  as: 'div',
  fluid: false
};
export default createBootstrapComponent(Container, 'container');