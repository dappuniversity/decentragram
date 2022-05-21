import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _fadeStyles;

import classNames from 'classnames';
import React from 'react';
import Transition, { ENTERED, ENTERING } from 'react-transition-group/Transition';
import onEnd from 'dom-helpers/transition/end';
import triggerBrowserReflow from './utils/triggerBrowserReflow';
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[ENTERING] = 'show', _fadeStyles[ENTERED] = 'show', _fadeStyles);

var Fade =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Fade, _React$Component);

  function Fade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (node) {
      triggerBrowserReflow(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    };

    return _this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    return React.createElement(Transition, _extends({
      addEndListener: onEnd
    }, props, {
      onEnter: this.handleEnter
    }), function (status, innerProps) {
      return React.cloneElement(children, _extends({}, innerProps, {
        className: classNames('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(React.Component);

Fade.defaultProps = defaultProps;
export default Fade;