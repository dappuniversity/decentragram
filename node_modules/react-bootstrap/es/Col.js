import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

var Col =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Col, _React$Component);

  function Col() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Col.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "as"]);

    var spans = [];
    var classes = [];
    DEVICE_SIZES.forEach(function (brkPoint) {
      var propValue = props[brkPoint];
      delete props[brkPoint];
      var span, offset, order;

      if (propValue != null && typeof propValue === 'object') {
        var _propValue$span = propValue.span;
        span = _propValue$span === void 0 ? true : _propValue$span;
        offset = propValue.offset;
        order = propValue.order;
      } else {
        span = propValue;
      }

      var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
      if (span != null) spans.push(span === true ? "" + bsPrefix + infix : "" + bsPrefix + infix + "-" + span);
      if (order != null) classes.push("order" + infix + "-" + order);
      if (offset != null) classes.push("offset" + infix + "-" + offset);
    });

    if (!spans.length) {
      spans.push(bsPrefix); // plain 'col'
    }

    return React.createElement(Component, _extends({}, props, {
      className: classNames.apply(void 0, [className].concat(spans, classes))
    }));
  };

  return Col;
}(React.Component);

Col.defaultProps = {
  as: 'div'
};
export default createBootstrapComponent(Col, 'col');