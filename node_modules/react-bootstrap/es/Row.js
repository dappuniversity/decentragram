import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        Component = _this$props.as,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "noGutters", "as", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(React.Component);

Row.defaultProps = {
  as: 'div',
  noGutters: false
};
export default createBootstrapComponent(Row, 'row');