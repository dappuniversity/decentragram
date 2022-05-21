import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';

var Feedback =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Feedback, _React$Component);

  function Feedback() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Feedback.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        type = _this$props.type,
        props = _objectWithoutPropertiesLoose(_this$props, ["as", "className", "type"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, type && type + "-feedback")
    }));
  };

  return Feedback;
}(React.Component);

Feedback.defaultProps = {
  type: 'valid',
  as: 'div'
};
export default Feedback;