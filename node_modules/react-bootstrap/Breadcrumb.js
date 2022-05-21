"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        listProps = _this$props.listProps,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "listProps", "children", "label", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({
      "aria-label": label,
      className: className
    }, props), _react.default.createElement("ol", (0, _extends2.default)({}, listProps, {
      className: (0, _classnames.default)(bsPrefix, listProps.className)
    }), children));
  };

  return Breadcrumb;
}(_react.default.Component);

Breadcrumb.defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  as: 'nav'
};
var DecoratedBreadcrumb = (0, _ThemeProvider.createBootstrapComponent)(Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = _BreadcrumbItem.default;
var _default = DecoratedBreadcrumb;
exports.default = _default;
module.exports = exports["default"];