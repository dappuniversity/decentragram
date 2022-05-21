import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import all from 'prop-types-extra/lib/all';
import React from 'react';
import mapContextToProps from 'react-context-toolbox/mapContextToProps';
import uncontrollable from 'uncontrollable';
import { createBootstrapComponent } from './ThemeProvider';
import NavbarContext from './NavbarContext';
import CardContext from './CardContext';
import AbstractNav from './AbstractNav';
import NavItem from './NavItem';
import NavLink from './NavLink';

var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Nav, _React$Component);

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
        props = _objectWithoutPropertiesLoose(_this$props, ["as", "bsPrefix", "navbarBsPrefix", "cardHeaderBsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

    return React.createElement(AbstractNav, _extends({
      as: as,
      activeKey: activeKey,
      className: classNames(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
    }, props), children);
  };

  return Nav;
}(React.Component);

Nav.defaultProps = {
  justify: false,
  fill: false,
  as: 'div'
};
var UncontrolledNav = uncontrollable(createBootstrapComponent(Nav, 'nav'), {
  activeKey: 'onSelect'
});
var DecoratedNav = mapContextToProps([NavbarContext, CardContext], function (navbarContext, cardContext, _ref) {
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
DecoratedNav.Item = NavItem;
DecoratedNav.Link = NavLink;
DecoratedNav._Nav = Nav; // for Testing until enzyme is working with context

export default DecoratedNav;