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

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var defaultProps = {
  disabled: false
};

var AbstractNavItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AbstractNavItem, _React$Component);

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
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["active", "className", "tabIndex", "eventKey", "onSelect", "as"]);
    var navKey = (0, _SelectableContext.makeEventKey)(eventKey, props.href);
    return _react.default.createElement(_SelectableContext.default.Consumer, null, function (parentOnSelect) {
      return _react.default.createElement(_NavContext.default.Consumer, null, function (navContext) {
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

        return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
          className: (0, _classnames.default)(className, isActive && 'active'),
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
}(_react.default.Component);

AbstractNavItem.defaultProps = defaultProps;
var _default = AbstractNavItem;
exports.default = _default;
module.exports = exports["default"];