import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { createBootstrapComponent } from './ThemeProvider';
/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */

var InputGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        className = _this$props.className,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "size", "className", "as"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix, size && bsPrefix + "-" + size)
    }));
  };

  return InputGroup;
}(React.Component);

InputGroup.defaultProps = {
  as: 'div'
};
var InputGroupAppend = createWithBsPrefix('input-group-append');
var InputGroupPrepend = createWithBsPrefix('input-group-prepend');
var InputGroupText = createWithBsPrefix('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return React.createElement(InputGroupText, null, React.createElement("input", _extends({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return React.createElement(InputGroupText, null, React.createElement("input", _extends({
    type: "radio"
  }, props)));
};

var DecoratedInputGroup = createBootstrapComponent(InputGroup, 'input-group');
DecoratedInputGroup.Text = InputGroupText;
DecoratedInputGroup.Radio = InputGroupRadio;
DecoratedInputGroup.Checkbox = InputGroupCheckbox;
DecoratedInputGroup.Append = InputGroupAppend;
DecoratedInputGroup.Prepend = InputGroupPrepend;
export default DecoratedInputGroup;