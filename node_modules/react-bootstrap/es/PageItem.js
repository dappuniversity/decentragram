import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

/* eslint-disable react/no-multi-comp */
import classNames from 'classnames';
import React from 'react';
import SafeAnchor from './SafeAnchor';
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
export default function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);

  var Component = active || disabled ? 'span' : SafeAnchor;
  return React.createElement("li", {
    style: style,
    className: classNames(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, React.createElement(Component, _extends({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && React.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
}
PageItem.defaultProps = defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

      delete props.active;
      return React.createElement(PageItem, props, React.createElement("span", {
        "aria-hidden": "true"
      }, children || defaultValue), React.createElement("span", {
        className: "sr-only"
      }, label));
    };

    return _class;
  }(React.Component), _class.displayName = name, _temp;
}

export var First = createButton('First', "\xAB");
export var Prev = createButton('Prev', "\u2039", 'Previous');
export var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
export var Next = createButton('Next', "\u203A");
export var Last = createButton('Last', "\xBB");