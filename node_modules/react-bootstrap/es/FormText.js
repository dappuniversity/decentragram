import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  as: 'small'
};

function FormText(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "innerRef", "as"]);

  return React.createElement(Component, _extends({}, props, {
    ref: innerRef,
    className: classNames(className, bsPrefix)
  }));
}

FormText.defaultProps = defaultProps;
export default createBootstrapComponent(FormText, 'form-text');