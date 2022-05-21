import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  as: 'div'
};

var CarouselCaption =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CarouselCaption, _React$Component);

  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        props = _objectWithoutPropertiesLoose(_this$props, ["as", "className", "bsPrefix"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return CarouselCaption;
}(React.Component);

CarouselCaption.defaultProps = defaultProps;
export default createBootstrapComponent(CarouselCaption, 'carousel-caption');