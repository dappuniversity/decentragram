import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import NavbarContext from './NavbarContext';

var NavbarToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavbarToggle, _React$Component);

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
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "children", "label", "as"]);

    if (Component === 'button') {
      props.type = 'button';
    }

    return React.createElement(NavbarContext.Consumer, null, function (context) {
      _this2.navbarContext = context || {};
      return React.createElement(Component, _extends({}, props, {
        onClick: _this2.handleClick,
        "aria-label": label,
        className: classNames(className, bsPrefix, !!(context && context.expanded) && 'collapsed')
      }), children || React.createElement("span", {
        className: bsPrefix + "-icon"
      }));
    });
  };

  return NavbarToggle;
}(React.Component);

NavbarToggle.defaultProps = {
  label: 'Toggle navigation',
  as: 'button'
};
export default createBootstrapComponent(NavbarToggle, 'navbar-toggler');