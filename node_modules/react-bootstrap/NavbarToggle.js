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

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavbarToggle, _React$Component);

  function NavbarToggle() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      var onClick = _this.props.onClick;
      var onToggle = _this.navbarContext.onToggle;
      if (onClick) onClick(e);
      if (onToggle) onToggle();
    };

    return _this;
  }

  var _proto = NavbarToggle.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "children", "label", "as"]);

    if (Component === 'button') {
      props.type = 'button';
    }

    return _react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
      _this2.navbarContext = context || {};
      return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
        onClick: _this2.handleClick,
        "aria-label": label,
        className: (0, _classnames.default)(className, bsPrefix, !!(context && context.expanded) && 'collapsed')
      }), children || _react.default.createElement("span", {
        className: bsPrefix + "-icon"
      }));
    });
  };

  return NavbarToggle;
}(_react.default.Component);

NavbarToggle.defaultProps = {
  label: 'Toggle navigation',
  as: 'button'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(NavbarToggle, 'navbar-toggler');

exports.default = _default;
module.exports = exports["default"];