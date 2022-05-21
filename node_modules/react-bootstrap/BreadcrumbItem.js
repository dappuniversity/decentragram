"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _ThemeProvider = require("./ThemeProvider");

var BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "active", "className", "as"]);
    var href = props.href,
        title = props.title,
        target = props.target,
        elementProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["href", "title", "target"]);
    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return _react.default.createElement(Component, {
      className: (0, _classnames.default)(bsPrefix, className, {
        active: active
      }),
      "aria-current": active ? 'page' : undefined
    }, active ? _react.default.createElement("span", (0, _extends2.default)({}, elementProps, {
      className: (0, _classnames.default)({
        active: active
      })
    })) : _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, elementProps, linkProps)));
  };

  return BreadcrumbItem;
}(_react.default.Component);

BreadcrumbItem.defaultProps = {
  active: false,
  as: 'li'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(BreadcrumbItem, 'breadcrumb-item');

exports.default = _default;
module.exports = exports["default"];