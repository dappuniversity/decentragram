"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _FormContext = _interopRequireDefault(require("./FormContext"));

var defaultProps = {
  type: 'checkbox'
};

function FormCheckLabel(_ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      innerRef = _ref.innerRef,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "innerRef", "htmlFor"]);
  return _react.default.createElement(_FormContext.default.Consumer, null, function (_ref2) {
    var controlId = _ref2.controlId,
        custom = _ref2.custom;
    return _react.default.createElement("label", (0, _extends2.default)({}, props, {
      ref: innerRef,
      htmlFor: htmlFor || controlId,
      className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-label')
    }));
  });
}

FormCheckLabel.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(FormCheckLabel, 'form-check-label');

exports.default = _default;
module.exports = exports["default"];