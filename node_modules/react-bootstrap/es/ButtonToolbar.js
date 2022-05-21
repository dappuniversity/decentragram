import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var ButtonToolbar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ButtonToolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className"]);

    return React.createElement("div", _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return ButtonToolbar;
}(React.Component);

ButtonToolbar.defaultProps = {
  role: 'toolbar'
};
export default createBootstrapComponent(ButtonToolbar, 'btn-toolbar');