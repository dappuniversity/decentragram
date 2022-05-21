"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "innerRef", "className", "children", "controlId", "as"]);
  return _react.default.createElement(_FormContext.default.Provider, {
    value: {
      controlId: controlId
    }
  }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: innerRef,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children));
}

FormGroup.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(FormGroup, 'form-group');

exports.default = _default;
module.exports = exports["default"];