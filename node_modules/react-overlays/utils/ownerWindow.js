"use strict";

exports.__esModule = true;
exports.default = _default;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ownerWindow = _interopRequireDefault(require("dom-helpers/ownerWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(componentOrElement) {
  return (0, _ownerWindow.default)(_reactDom.default.findDOMNode(componentOrElement));
}

module.exports = exports.default;