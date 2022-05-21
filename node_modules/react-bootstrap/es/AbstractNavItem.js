import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import NavContext from './NavContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
var defaultProps = {
  disabled: false
};

var AbstractNavItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(AbstractNavItem, _React$Component);

  function AbstractNavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AbstractNavItem.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        active = _this$props.active,
        className = _this$props.className,
        tabIndex = _this$props.tabIndex,
        eventKey = _this$props.eventKey,
        onSelect = _this$props.onSelect,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["active", "className", "tabIndex", "eventKey", "onSelect", "as"]);

    var navKey = makeEventKey(eventKey, props.href);
    return React.createElement(SelectableContext.Consumer, null, function (parentOnSelect) {
      return React.createElement(NavContext.Consumer, null, function (navContext) {
        var isActive = active;

        if (navContext) {
          if (!props.role && navContext.role === 'tablist') props.role = 'tab';
          props['data-rb-event-key'] = navKey;
          props.id = navContext.getControllerId(navKey);
          props['aria-controls'] = navContext.getControlledId(navKey);
          isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
        }

        if (props.role === 'tab') {
          props.tabIndex = isActive ? tabIndex : -1;
          props['aria-selected'] = isActive;
        }

        return React.createElement(Component, _extends({}, props, {
          className: classNames(className, isActive && 'active'),
          onClick: function onClick(e) {
            var onClick = _this.props.onClick;
            if (onClick) onClick(e);
            if (navKey == null) return;
            if (onSelect) onSelect(navKey, e);
            if (parentOnSelect) parentOnSelect(navKey, e);
          }
        }));
      });
    });
  };

  return AbstractNavItem;
}(React.Component);

AbstractNavItem.defaultProps = defaultProps;
export default AbstractNavItem;