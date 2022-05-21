"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _PageItem = _interopRequireWildcard(require("./PageItem"));

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        size = _this$props.size,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "children", "size"]);
    return _react.default.createElement("ul", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, size && bsPrefix + "-" + size)
    }), children);
  };

  return Pagination;
}(_react.default.Component);

var DecoratedPagination = (0, _ThemeProvider.createBootstrapComponent)(Pagination, 'pagination');
DecoratedPagination.First = _PageItem.First;
DecoratedPagination.Prev = _PageItem.Prev;
DecoratedPagination.Ellipsis = _PageItem.Ellipsis;
DecoratedPagination.Item = _PageItem.default;
DecoratedPagination.Next = _PageItem.Next;
DecoratedPagination.Last = _PageItem.Last;
var _default = DecoratedPagination;
exports.default = _default;
module.exports = exports["default"];