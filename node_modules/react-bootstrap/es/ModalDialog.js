import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ModalDialog, _React$Component);

  function ModalDialog() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalDialog.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        centered = _this$props.centered,
        size = _this$props.size,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "centered", "size", "children"]);

    var bsClass = bsPrefix + "-dialog";
    return React.createElement("div", _extends({}, props, {
      className: classNames(bsClass, className, size && bsPrefix + "-" + size, centered && bsClass + "-centered")
    }), React.createElement("div", {
      className: classNames(bsPrefix + "-content")
    }, children));
  };

  return ModalDialog;
}(React.Component);

export default createBootstrapComponent(ModalDialog, 'modal');