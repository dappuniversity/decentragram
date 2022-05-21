import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import FormContext from './FormContext';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  as: 'div'
};

function FormGroup(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "innerRef", "className", "children", "controlId", "as"]);

  return React.createElement(FormContext.Provider, {
    value: {
      controlId: controlId
    }
  }, React.createElement(Component, _extends({}, props, {
    ref: innerRef,
    className: classNames(className, bsPrefix)
  }), children));
}

FormGroup.defaultProps = defaultProps;
export default createBootstrapComponent(FormGroup, 'form-group');