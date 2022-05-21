import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import warning from 'warning';
import mapContextToProps from 'react-context-toolbox/mapContextToProps';
import Col from './Col';
import FormContext from './FormContext';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  column: false,
  srOnly: false
};

function FormLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      innerRef = _ref.innerRef,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "column", "srOnly", "className", "innerRef"]);

  var classes = classNames(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return React.createElement(Col, _extends({}, props, {
    className: classes,
    as: "label"
  })); // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control

  return React.createElement("label", _extends({}, props, {
    ref: innerRef,
    className: classes
  }));
}

FormLabel.defaultProps = defaultProps;

var mapContext = function mapContext(_ref2, _ref3) {
  var controlId = _ref2.controlId;
  var htmlFor = _ref3.htmlFor;
  process.env.NODE_ENV !== "production" ? warning(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  return {
    htmlFor: htmlFor || controlId
  };
};

export default mapContextToProps(FormContext, mapContext, createBootstrapComponent(FormLabel, 'form-label'));