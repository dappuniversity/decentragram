"use strict";

exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = _interopRequireDefault(require("dom-helpers/query/isWindow"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument.default)(node);
  var win = (0, _isWindow.default)(doc);
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

module.exports = exports.default;