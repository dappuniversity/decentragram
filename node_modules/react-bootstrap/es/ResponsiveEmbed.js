import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        aspectRatio = _this$props.aspectRatio,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "children", "aspectRatio"]);

    var child = React.Children.only(children);
    return React.createElement("div", _extends({}, props, {
      className: classNames(bsPrefix, className, aspectRatio && bsPrefix + "-" + aspectRatio)
    }), React.cloneElement(child, {
      className: classNames(child.props.className, bsPrefix + "-item")
    }));
  };

  return ResponsiveEmbed;
}(React.Component);

ResponsiveEmbed.defaultProps = defaultProps;
export default createBootstrapComponent(ResponsiveEmbed, 'embed-responsive');