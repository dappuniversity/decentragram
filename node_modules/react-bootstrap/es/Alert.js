import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import uncontrollable from 'uncontrollable';
import divWithClassName from './utils/divWithClassName';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { createBootstrapComponent } from './ThemeProvider';
import Fade from './Fade';
import CloseButton from './CloseButton';
import SafeAnchor from './SafeAnchor';
/**
 * @property {AlertHeading} Heading
 * @property {AlertLink} Link
 */

var Alert =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Alert, _React$Component);

  function Alert() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClose = function (e) {
      _this.props.onClose(false, e);
    };

    return _this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        show = _this$props.show,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        variant = _this$props.variant,
        dismissible = _this$props.dismissible,
        Transition = _this$props.transition,
        _ = _this$props.onClose,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "dismissible", "transition", "onClose"]);

    var alert = React.createElement("div", _extends({
      role: "alert"
    }, Transition ? props : undefined, {
      className: classNames(className, bsPrefix, variant && bsPrefix + "-" + variant, dismissible && bsPrefix + "-dismissible")
    }), dismissible && React.createElement(CloseButton, {
      onClick: this.handleClose,
      label: closeLabel
    }), children);
    if (!Transition) return show ? alert : null;
    return React.createElement(Transition, _extends({
      unmountOnExit: true
    }, props, {
      in: show
    }), alert);
  };

  return Alert;
}(React.Component);

Alert.defaultProps = {
  show: true,
  transition: Fade,
  closeLabel: 'Close alert'
};
var DecoratedAlert = uncontrollable(createBootstrapComponent(Alert, 'alert'), {
  show: 'onClose'
});
var DivStyledAsH4 = divWithClassName('h4');
DecoratedAlert.Link = createWithBsPrefix('alert-link', {
  Component: SafeAnchor
});
DecoratedAlert.Heading = createWithBsPrefix('alert-heading', {
  Component: DivStyledAsH4
});
export default DecoratedAlert;