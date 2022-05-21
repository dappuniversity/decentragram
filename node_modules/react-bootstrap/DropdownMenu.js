"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = require("react-dom");

var _react = _interopRequireDefault(require("react"));

var _DropdownMenu = _interopRequireDefault(require("react-overlays/DropdownMenu"));

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _ThemeProvider = require("./ThemeProvider");

var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref((0, _reactDom.findDOMNode)(r));
  });

  return props;
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        alignRight = _this$props.alignRight,
        rootCloseEvent = _this$props.rootCloseEvent,
        flip = _this$props.flip,
        popperConfig = _this$props.popperConfig,
        showProps = _this$props.show,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "flip", "popperConfig", "show", "as"]);
    return _react.default.createElement(_NavbarContext.default.Consumer, null, function (isNavbar) {
      return _react.default.createElement(_DropdownMenu.default, {
        flip: flip,
        show: showProps,
        alignEnd: alignRight,
        usePopper: !isNavbar,
        popperConfig: popperConfig,
        rootCloseEvent: rootCloseEvent
      }, function (_ref) {
        var placement = _ref.placement,
            show = _ref.show,
            alignEnd = _ref.alignEnd,
            close = _ref.close,
            menuProps = _ref.props;
        wrapRef(menuProps); // For custom components provide additional, non-DOM, props;

        if (typeof Component !== 'string') {
          menuProps.show = show;
          menuProps.close = close;
          menuProps.alignRight = alignEnd;
        }

        var style = props.style;

        if (placement) {
          // we don't need the default popper style,
          // menus are display: none when not shown.
          style = (0, _extends2.default)({}, style, menuProps.style);
          props['x-placement'] = placement;
        }

        return _react.default.createElement(Component, (0, _extends2.default)({}, props, menuProps, {
          style: style,
          className: (0, _classnames.default)(className, bsPrefix, show && 'show', alignEnd && bsPrefix + "-right")
        }));
      });
    });
  };

  return DropdownMenu;
}(_react.default.Component);

DropdownMenu.defaultProps = {
  alignRight: false,
  as: 'div',
  flip: true
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(DropdownMenu, 'dropdown-menu');

exports.default = _default;
module.exports = exports["default"];