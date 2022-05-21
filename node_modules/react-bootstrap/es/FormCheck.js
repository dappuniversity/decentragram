import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import FormContext from './FormContext';
import Feedback from './Feedback';
import FormCheckInput from './FormCheckInput';
import FormCheckLabel from './FormCheckLabel';

var FormCheck =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormCheck, _React$Component);

  function FormCheck() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormCheck.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        feedback = _this$props.feedback,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        type = _this$props.type,
        label = _this$props.label,
        children = _this$props.children,
        custom = _this$props.custom,
        props = _objectWithoutPropertiesLoose(_this$props, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "inputRef", "className", "style", "title", "type", "label", "children", "custom"]);

    var hasLabel = label != null && label !== false && !children;
    var input = React.createElement(FormCheckInput, _extends({}, props, {
      type: type,
      ref: inputRef,
      isValid: isValid,
      isInvalid: isInvalid,
      isStatic: !hasLabel,
      disabled: disabled
    }));
    return React.createElement(FormContext.Transform, {
      mapToValue: function mapToValue(_ref) {
        var controlId = _ref.controlId;
        return {
          controlId: id || controlId,
          custom: custom
        };
      }
    }, React.createElement("div", {
      style: style,
      className: classNames(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
    }, children || React.createElement(React.Fragment, null, input, hasLabel && React.createElement(FormCheckLabel, {
      title: title
    }, label), (isValid || isInvalid) && React.createElement(Feedback, {
      type: isValid ? 'valid' : 'invalid'
    }, feedback))));
  };

  return FormCheck;
}(React.Component);

FormCheck.defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};
var DecoratedFormCheck = createBootstrapComponent(FormCheck, {
  forwardRefAs: 'inputRef',
  prefix: 'form-check'
});
DecoratedFormCheck.Input = FormCheckInput;
DecoratedFormCheck.Label = FormCheckLabel;
export default DecoratedFormCheck;