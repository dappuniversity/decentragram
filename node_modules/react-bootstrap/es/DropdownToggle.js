import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import BaseDropdownToggle from 'react-overlays/DropdownToggle';
import React from 'react';
import Button from './Button';
import { createBootstrapComponent } from './ThemeProvider';

var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(findDOMNode(r));
  });

  return props;
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        split = _this$props.split,
        className = _this$props.className,
        children = _this$props.children,
        childBsPrefix = _this$props.childBsPrefix,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]); // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.


    return React.createElement(BaseDropdownToggle, null, function (_ref) {
      var toggle = _ref.toggle,
          toggleProps = _ref.props;
      return React.createElement(Component, _extends({
        onClick: toggle,
        bsPrefix: childBsPrefix,
        className: classNames(className, bsPrefix, split && bsPrefix + "-split")
      }, wrapRef(toggleProps), props), children);
    });
  };

  return DropdownToggle;
}(React.Component);

DropdownToggle.defaultProps = {
  as: Button
};
export default createBootstrapComponent(DropdownToggle, 'dropdown-toggle');