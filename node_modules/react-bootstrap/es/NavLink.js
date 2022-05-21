import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import SafeAnchor from './SafeAnchor';
import AbstractNavItem from './AbstractNavItem';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  disabled: false,
  as: SafeAnchor
};

function NavLink(_ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      innerRef = _ref.innerRef,
      as = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "innerRef", "as"]);

  return React.createElement(AbstractNavItem, _extends({}, props, {
    href: href,
    ref: innerRef,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classNames(className, bsPrefix, disabled && 'disabled')
  }));
}

NavLink.defaultProps = defaultProps;
export default createBootstrapComponent(NavLink, 'nav-link');