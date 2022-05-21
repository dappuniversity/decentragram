import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var ModalFooter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ModalFooter, _React$Component);

  function ModalFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalFooter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["as", "bsPrefix", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return ModalFooter;
}(React.Component);

ModalFooter.defaultProps = {
  as: 'div'
};
export default createBootstrapComponent(ModalFooter, 'modal-footer');