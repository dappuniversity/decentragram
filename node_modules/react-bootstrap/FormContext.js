"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _transformContext = _interopRequireDefault(require("react-context-toolbox/transformContext"));

var FormContext = _react.default.createContext({
  controlId: undefined
});

FormContext.Transform = (0, _transformContext.default)(FormContext);
var _default = FormContext;
exports.default = _default;
module.exports = exports["default"];