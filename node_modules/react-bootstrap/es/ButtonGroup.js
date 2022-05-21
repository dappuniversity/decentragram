import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var ButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ButtonGroup, _React$Component);

  function ButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        toggle = _this$props.toggle,
        vertical = _this$props.vertical,
        className = _this$props.className,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);

    var baseClass = bsPrefix;
    if (vertical) baseClass = bsPrefix + "-vertical";
    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, baseClass, size && bsPrefix + "-" + size, toggle && bsPrefix + "-toggle")
    }));
  };

  return ButtonGroup;
}(React.Component);

ButtonGroup.defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};
export default createBootstrapComponent(ButtonGroup, 'btn-group');