import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        children = _this$props.children,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "children", "className"]);

    return React.createElement("div", _extends({}, props, {
      className: classNames(className, bsPrefix)
    }), children);
  };

  return CarouselItem;
}(React.Component);

export default createBootstrapComponent(CarouselItem, 'carousel-item');