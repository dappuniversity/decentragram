import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import requiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import uncontrollable from 'uncontrollable';
import Nav from './Nav';
import NavLink from './NavLink';
import NavItem from './NavItem';
import UncontrolledTabContainer from './TabContainer';
import TabContent from './TabContent';
import TabPane from './TabPane';
import { forEach, map } from './utils/ElementChildren';
var TabContainer = UncontrolledTabContainer.ControlledComponent;
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Tabs, _React$Component);

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

    return React.createElement(NavItem, {
      as: NavLink,
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
        props = _objectWithoutPropertiesLoose(_this$props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

    return React.createElement(TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, React.createElement(Nav, _extends({}, props, {
      role: "tablist",
      as: "nav"
    }), map(children, this.renderTab)), React.createElement(TabContent, null, map(children, function (child) {
      var childProps = _extends({}, child.props);

      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return React.createElement(TabPane, childProps);
    })));
  };

  return Tabs;
}(React.Component);

Tabs.defaultProps = defaultProps;
export default uncontrollable(Tabs, {
  activeKey: 'onSelect'
});