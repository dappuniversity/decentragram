import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import Image from './Image';

var FigureImage =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FigureImage, _React$Component);

  function FigureImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureImage.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    return React.createElement(Image, _extends({}, props, {
      className: classNames(className, 'figure-img')
    }));
  };

  return FigureImage;
}(React.Component);

FigureImage.defaultProps = {
  fluid: true
};
export default FigureImage;