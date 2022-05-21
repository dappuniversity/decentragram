"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

var _FormControl = _interopRequireDefault(require("./FormControl"));

var _FormCheck = _interopRequireDefault(require("./FormCheck"));

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

var _FormText = _interopRequireDefault(require("./FormText"));

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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "innerRef", "validated", "as"]);
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: innerRef,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
}

Form.defaultProps = defaultProps;
var DecoratedForm = (0, _ThemeProvider.createBootstrapComponent)(Form, 'form');
DecoratedForm.Row = (0, _createWithBsPrefix.default)('form-row');
DecoratedForm.Group = _FormGroup.default;
DecoratedForm.Control = _FormControl.default;
DecoratedForm.Check = _FormCheck.default;
DecoratedForm.Label = _FormLabel.default;
DecoratedForm.Text = _FormText.default;
var _default = DecoratedForm;
exports.default = _default;
module.exports = exports["default"];