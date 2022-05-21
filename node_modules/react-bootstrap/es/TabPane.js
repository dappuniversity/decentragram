import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import mapContextToProps from 'react-context-toolbox/mapContextToProps';
import { createBootstrapComponent } from './ThemeProvider';
import TabContext from './TabContext';
import SelectableContext, { makeEventKey } from './SelectableContext';
import Fade from './Fade';

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TabPane, _React$Component);

  function TabPane() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        onExited = _this$props.onExited,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        Transition = _this$props.transition,
        _this$props$as = _this$props.as,
        Component = _this$props$as === void 0 ? 'div' : _this$props$as,
        _ = _this$props.eventKey,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "active", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

    if (!active && unmountOnExit) return null;
    var pane = React.createElement(Component, _extends({}, props, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: classNames(className, bsPrefix, {
        active: active
      })
    }));
    if (Transition) pane = React.createElement(Transition, {
      in: active,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited,
      mountOnEnter: mountOnEnter,
      unmountOnExit: mountOnEnter
    }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
    // conflict with the top level one.

    return React.createElement(TabContext.Provider, {
      value: null
    }, React.createElement(SelectableContext.Provider, {
      value: null
    }, pane));
  };

  return TabPane;
}(React.Component);

export default mapContextToProps(TabContext, function (context, props) {
  if (!context) return null;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = _objectWithoutPropertiesLoose(context, ["activeKey", "getControlledId", "getControllerId"]);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = makeEventKey(props.eventKey);
  return {
    active: props.active == null && key != null ? makeEventKey(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || Fade),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  };
}, createBootstrapComponent(TabPane, 'tab-pane'));