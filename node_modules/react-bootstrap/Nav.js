"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _all = _interopRequireDefault(require("prop-types-extra/lib/all"));

var _react = _interopRequireDefault(require("react"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _CardContext = _interopRequireDefault(require("./CardContext"));

var _AbstractNav = _interopRequireDefault(require("./AbstractNav"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var Nav =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Nav, _React$Component);

  function Nav() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Nav.prototype;

  _proto.render = function render() {
    var _classNames;

    var _this$props = this.props,
        as = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        navbarBsPrefix = _this$props.navbarBsPrefix,
        cardHeaderBsPrefix = _this$props.cardHeaderBsPrefix,
        variant = _this$props.variant,
        fill = _this$props.fill,
        justify = _this$props.justify,
        navbar = _this$props.navbar,
        className = _this$props.className,
        children = _this$props.children,
        activeKey = _this$props.activeKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "bsPrefix", "navbarBsPrefix", "cardHeaderBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);
    return _react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
      as: as,
      activeKey: activeKey,
      className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
    }, props), children);
  };

  return Nav;
}(_react.default.Component);

Nav.defaultProps = {
  justify: false,
  fill: false,
  as: 'div'
};
var UncontrolledNav = (0, _uncontrollable.default)((0, _ThemeProvider.createBootstrapComponent)(Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = (0, _mapContextToProps.default)([_NavbarContext.default, _CardContext.default], function (navbarContext, cardContext, _ref) {
  var navbar = _ref.navbar;
  if (!navbarContext && !cardContext) return {};
  if (navbarContext) return {
    navbarBsPrefix: navbarContext.bsPrefix,
    navbar: navbar == null ? true : navbar
  };
  return {
    cardHeaderBsPrefix: cardContext.cardHeaderBsPrefix
  };
}, UncontrolledNav);
DecoratedNav.Item = _NavItem.default;
DecoratedNav.Link = _NavLink.default;
DecoratedNav._Nav = Nav; // for Testing until enzyme is working with context

var _default = DecoratedNav;
exports.default = _default;
module.exports = exports["default"];