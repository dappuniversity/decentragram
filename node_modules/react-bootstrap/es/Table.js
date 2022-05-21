import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';

var Table =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        hover = _this$props.hover,
        size = _this$props.size,
        variant = _this$props.variant,
        responsive = _this$props.responsive,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "striped", "bordered", "hover", "size", "variant", "responsive"]);

    var classes = classNames(bsPrefix, className, variant && bsPrefix + "-" + variant, size && bsPrefix + "-" + size, striped && bsPrefix + "-striped", bordered && bsPrefix + "-bordered", hover && bsPrefix + "-hover");
    var table = React.createElement("table", _extends({}, props, {
      className: classes
    }));

    if (responsive) {
      var responsiveClass = bsPrefix + "-responsive";

      if (typeof responsive === 'string') {
        responsiveClass = responsiveClass + "-" + responsive;
      }

      return React.createElement("div", {
        className: responsiveClass
      }, table);
    }

    return table;
  };

  return Table;
}(React.Component);

export default createBootstrapComponent(Table, 'table');