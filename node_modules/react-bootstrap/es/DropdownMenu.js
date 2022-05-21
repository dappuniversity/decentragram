import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import React from 'react';
import BaseDropdownMenu from 'react-overlays/DropdownMenu';
import NavbarContext from './NavbarContext';
import { createBootstrapComponent } from './ThemeProvider';

var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(findDOMNode(r));
  });

  return props;
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

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
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "flip", "popperConfig", "show", "as"]);

    return React.createElement(NavbarContext.Consumer, null, function (isNavbar) {
      return React.createElement(BaseDropdownMenu, {
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
          style = _extends({}, style, menuProps.style);
          props['x-placement'] = placement;
        }

        return React.createElement(Component, _extends({}, props, menuProps, {
          style: style,
          className: classNames(className, bsPrefix, show && 'show', alignEnd && bsPrefix + "-right")
        }));
      });
    });
  };

  return DropdownMenu;
}(React.Component);

DropdownMenu.defaultProps = {
  alignRight: false,
  as: 'div',
  flip: true
};
export default createBootstrapComponent(DropdownMenu, 'dropdown-menu');