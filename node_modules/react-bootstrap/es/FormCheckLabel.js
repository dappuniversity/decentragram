import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import FormContext from './FormContext';
var defaultProps = {
  type: 'checkbox'
};

function FormCheckLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      htmlFor = _ref.htmlFor,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "innerRef", "htmlFor"]);

  return React.createElement(FormContext.Consumer, null, function (_ref2) {
    var controlId = _ref2.controlId,
        custom = _ref2.custom;
    return React.createElement("label", _extends({}, props, {
      ref: innerRef,
      htmlFor: htmlFor || controlId,
      className: classNames(className, !custom && bsPrefix, custom && 'custom-control-label')
    }));
  });
}

FormCheckLabel.defaultProps = defaultProps;
export default createBootstrapComponent(FormCheckLabel, 'form-check-label');