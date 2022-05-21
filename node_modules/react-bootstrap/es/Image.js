import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Image =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);

    var classes = classNames(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return React.createElement("img", _extends({}, props, {
      className: classNames(className, classes)
    }));
  };

  return Image;
}(React.Component);

Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
export default createBootstrapComponent(Image, 'img');