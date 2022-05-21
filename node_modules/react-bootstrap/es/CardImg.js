import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var CardImg =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CardImg, _React$Component);

  function CardImg() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CardImg.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        variant = _this$props.variant,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "variant", "as"]);

    var baseClass = variant ? bsPrefix + "-" + variant : bsPrefix;
    return React.createElement(Component, _extends({
      className: classNames(baseClass, className)
    }, props));
  };

  return CardImg;
}(React.Component);

CardImg.defaultProps = {
  as: 'img',
  variant: null
};
export default createBootstrapComponent(CardImg, 'card-img');