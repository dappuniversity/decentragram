import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React from 'react';
import invariant from 'invariant';
import uncontrollable from 'uncontrollable';
import chainFunction from './utils/createChainedFunction';
import { map } from './utils/ElementChildren';
import ButtonGroup from './ButtonGroup';
import ToggleButton from './ToggleButton';
var defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange([].concat(values, [value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = _objectWithoutPropertiesLoose(_this$props2, ["children", "type", "name"]);

    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ? process.env.NODE_ENV !== "production" ? invariant(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : invariant(false) : void 0;
    return React.createElement(ButtonGroup, _extends({}, props, {
      toggle: true
    }), map(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return React.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: chainFunction(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(React.Component);

ToggleButtonGroup.defaultProps = defaultProps;
var UncontrolledToggleButtonGroup = uncontrollable(ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = ToggleButton;
export default UncontrolledToggleButtonGroup;