import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import Button from './Button';

var noop = function noop() {};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ToggleButton, _React$Component);

  function ToggleButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: false
      });
    };

    return _this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        className = _this$props.className,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        disabled = _this$props.disabled,
        inputRef = _this$props.inputRef,
        innerRef = _this$props.innerRef,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef", "innerRef"]);

    var focused = this.state.focused;
    return React.createElement(Button, _extends({}, props, {
      ref: innerRef,
      className: classNames(className, focused && 'focus', disabled && 'disabled'),
      type: null,
      active: !!checked,
      as: "label"
    }), React.createElement("input", {
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange || noop
    }), children);
  };

  return ToggleButton;
}(React.Component);

export default React.forwardRef(function (props, ref) {
  return React.createElement(ToggleButton, _extends({
    innerRef: ref
  }, props));
});