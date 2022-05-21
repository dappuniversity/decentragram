import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import warning from 'warning';
import mapContextToProps from 'react-context-toolbox/mapContextToProps';
import Feedback from './Feedback';
import FormContext from './FormContext';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  as: 'input'
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        type = _this$props.type,
        size = _this$props.size,
        id = _this$props.id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        plaintext = _this$props.plaintext,
        readOnly = _this$props.readOnly,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "type", "size", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

    var classes;

    if (plaintext) {
      var _classes;

      classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
    } else if (type === 'file') {
      var _classes2;

      classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
    } else {
      var _classes3;

      classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
    }

    return React.createElement(Component, _extends({}, props, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly,
      className: classNames(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
    }));
  };

  return FormControl;
}(React.Component);

FormControl.defaultProps = defaultProps;

var mapContext = function mapContext(_ref, _ref2) {
  var controlId = _ref.controlId;
  var id = _ref2.id;
  process.env.NODE_ENV !== "production" ? warning(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return {
    id: id || controlId
  };
};

var DecoratedFormControl = mapContextToProps(FormContext, mapContext, createBootstrapComponent(FormControl, {
  prefix: 'form-control',
  forwardRefAs: 'inputRef'
}));
DecoratedFormControl.Feedback = Feedback;
export default DecoratedFormControl;