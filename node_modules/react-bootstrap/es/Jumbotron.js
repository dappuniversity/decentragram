import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import classNames from 'classnames';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = _objectWithoutPropertiesLoose(_this$props, ["as", "className", "fluid", "bsPrefix"]);

    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, classes)
    }));
  };

  return Jumbotron;
}(React.Component);

Jumbotron.defaultProps = defaultProps;
export default createBootstrapComponent(Jumbotron, 'jumbotron');