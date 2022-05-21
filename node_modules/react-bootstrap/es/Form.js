import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { createBootstrapComponent } from './ThemeProvider';
import FormGroup from './FormGroup';
import FormControl from './FormControl';
import FormCheck from './FormCheck';
import FormLabel from './FormLabel';
import FormText from './FormText';
var defaultProps = {
  inline: false,
  as: 'form'
};

function Form(_ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      innerRef = _ref.innerRef,
      validated = _ref.validated,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "inline", "className", "innerRef", "validated", "as"]);

  return React.createElement(Component, _extends({}, props, {
    ref: innerRef,
    className: classNames(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
}

Form.defaultProps = defaultProps;
var DecoratedForm = createBootstrapComponent(Form, 'form');
DecoratedForm.Row = createWithBsPrefix('form-row');
DecoratedForm.Group = FormGroup;
DecoratedForm.Control = FormControl;
DecoratedForm.Check = FormCheck;
DecoratedForm.Label = FormLabel;
DecoratedForm.Text = FormText;
export default DecoratedForm;