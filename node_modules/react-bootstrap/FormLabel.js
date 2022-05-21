"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

var _Col = _interopRequireDefault(require("./Col"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

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
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "column", "srOnly", "className", "innerRef"]);
  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return _react.default.createElement(_Col.default, (0, _extends2.default)({}, props, {
    className: classes,
    as: "label"
  })); // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control

  return _react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: innerRef,
    className: classes
  }));
}

FormLabel.defaultProps = defaultProps;

var mapContext = function mapContext(_ref2, _ref3) {
  var controlId = _ref2.controlId;
  var htmlFor = _ref3.htmlFor;
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  return {
    htmlFor: htmlFor || controlId
  };
};

var _default = (0, _mapContextToProps.default)(_FormContext.default, mapContext, (0, _ThemeProvider.createBootstrapComponent)(FormLabel, 'form-label'));

exports.default = _default;
module.exports = exports["default"];