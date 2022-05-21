"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _TabContainer = _interopRequireDefault(require("./TabContainer"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

var _ElementChildren = require("./utils/ElementChildren");

var TabContainer = _TabContainer.default.ControlledComponent;
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  (0, _ElementChildren.forEach)(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return _react.default.createElement(_NavItem.default, {
      as: _NavLink.default,
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        transition = _this$props.transition,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);
    return _react.default.createElement(TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, _react.default.createElement(_Nav.default, (0, _extends2.default)({}, props, {
      role: "tablist",
      as: "nav"
    }), (0, _ElementChildren.map)(children, this.renderTab)), _react.default.createElement(_TabContent.default, null, (0, _ElementChildren.map)(children, function (child) {
      var childProps = (0, _extends2.default)({}, child.props);
      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return _react.default.createElement(_TabPane.default, childProps);
    })));
  };

  return Tabs;
}(_react.default.Component);

Tabs.defaultProps = defaultProps;

var _default = (0, _uncontrollable.default)(Tabs, {
  activeKey: 'onSelect'
});

exports.default = _default;
module.exports = exports["default"];