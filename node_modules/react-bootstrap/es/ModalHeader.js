import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import createChainedFunction from './utils/createChainedFunction';
import CloseButton from './CloseButton';
import ModalContext from './ModalContext';
var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ModalHeader, _React$Component);

  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);

    return React.createElement(ModalContext.Consumer, null, function (context) {
      return React.createElement("div", _extends({}, props, {
        className: classNames(className, bsPrefix)
      }), children, closeButton && React.createElement(CloseButton, {
        label: closeLabel,
        onClick: createChainedFunction(context && context.onHide, onHide)
      }));
    });
  };

  return ModalHeader;
}(React.Component);

ModalHeader.defaultProps = defaultProps;
export default createBootstrapComponent(ModalHeader, 'modal-header');