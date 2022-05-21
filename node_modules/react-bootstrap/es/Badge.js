import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Badge =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        pill = _this$props.pill,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "variant", "pill", "className"]);

    return React.createElement("span", _extends({}, props, {
      className: classNames(className, bsPrefix, pill && bsPrefix + "-pill", variant && bsPrefix + "-" + variant)
    }));
  };

  return Badge;
}(React.Component);

Badge.defaultProps = {
  pill: false
};
export default createBootstrapComponent(Badge, 'badge');