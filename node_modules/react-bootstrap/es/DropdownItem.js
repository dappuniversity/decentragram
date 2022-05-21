import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import mapContextToProps from 'react-context-toolbox/mapContextToProps';
import chain from './utils/createChainedFunction';
import SafeAnchor from './SafeAnchor';
import SelectableContext, { makeEventKey } from './SelectableContext';
import { createBootstrapComponent } from './ThemeProvider';
import NavContext from './NavContext';

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey,
          href = _this$props.href;
      var key = makeEventKey(eventKey, href); // SafeAnchor handles the disabled case, but be handle it here
      // for other components

      if (disabled) return;
      if (onClick) onClick(event);
      if (onSelect) onSelect(key, event);
      if (key !== null && _this.contextSelect) _this.contextSelect(key, event);
    };

    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        className = _this$props2.className,
        children = _this$props2.children,
        _ = _this$props2.eventKey,
        _1 = _this$props2.onSelect,
        Component = _this$props2.as,
        props = _objectWithoutPropertiesLoose(_this$props2, ["bsPrefix", "active", "className", "children", "eventKey", "onSelect", "as"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix, active && 'active', props.disabled && 'disabled'),
      onClick: this.handleClick
    }), children);
  };

  return DropdownItem;
}(React.Component);

DropdownItem.defaultProps = {
  as: SafeAnchor,
  disabled: false
};
export default mapContextToProps([SelectableContext, NavContext], function (onSelect, navContext, props) {
  var _ref = navContext || {},
      activeKey = _ref.activeKey;

  var key = makeEventKey(props.eventKey, props.href);
  return {
    onSelect: chain(props.onSelect, onSelect),
    active: props.active == null && key != null ? makeEventKey(activeKey) === key : props.active
  };
}, createBootstrapComponent(DropdownItem, 'dropdown-item'));