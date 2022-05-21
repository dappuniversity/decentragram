import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  placement: 'right'
};

function Popover(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "title", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  return React.createElement("div", _extends({
    role: "tooltip",
    ref: innerRef,
    style: style,
    "x-placement": placement,
    className: classNames(className, bsPrefix, "bs-popover-" + placement)
  }, props), React.createElement("div", _extends({
    className: "arrow"
  }, arrowProps)), title && React.createElement("div", {
    className: bsPrefix + "-header h3"
  }, title), React.createElement("div", {
    className: bsPrefix + "-body"
  }, children));
}

Popover.defaultProps = defaultProps;
export default createBootstrapComponent(Popover, 'popover');