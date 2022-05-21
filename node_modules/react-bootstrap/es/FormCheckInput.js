import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import FormContext from './FormContext';
var defaultProps = {
  type: 'checkbox'
};

function FormCheckInput(_ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      innerRef = _ref.innerRef,
      isStatic = _ref.isStatic,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "innerRef", "isStatic"]);

  return React.createElement(FormContext.Consumer, null, function (_ref2) {
    var controlId = _ref2.controlId,
        custom = _ref2.custom;
    return React.createElement("input", _extends({}, props, {
      ref: innerRef,
      id: id || controlId,
      className: classNames(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
    }));
  });
}

FormCheckInput.defaultProps = defaultProps;
export default createBootstrapComponent(FormCheckInput, 'form-check-input');