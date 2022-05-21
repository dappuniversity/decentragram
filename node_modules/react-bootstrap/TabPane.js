"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

var _ThemeProvider = require("./ThemeProvider");

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var _Fade = _interopRequireDefault(require("./Fade"));

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabPane, _React$Component);

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
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "active", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);
    if (!active && unmountOnExit) return null;

    var pane = _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      role: "tabpanel",
      "aria-hidden": !active,
      className: (0, _classnames.default)(className, bsPrefix, {
        active: active
      })
    }));

    if (Transition) pane = _react.default.createElement(Transition, {
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

    return _react.default.createElement(_TabContext.default.Provider, {
      value: null
    }, _react.default.createElement(_SelectableContext.default.Provider, {
      value: null
    }, pane));
  };

  return TabPane;
}(_react.default.Component);

var _default = (0, _mapContextToProps.default)(_TabContext.default, function (context, props) {
  if (!context) return null;
  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0, _objectWithoutPropertiesLoose2.default)(context, ["activeKey", "getControlledId", "getControllerId"]);
  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = (0, _SelectableContext.makeEventKey)(props.eventKey);
  return {
    active: props.active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade.default),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  };
}, (0, _ThemeProvider.createBootstrapComponent)(TabPane, 'tab-pane'));

exports.default = _default;
module.exports = exports["default"];