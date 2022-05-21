import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import BreadcrumbItem from './BreadcrumbItem';

var Breadcrumb =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Breadcrumb, _React$Component);

  function Breadcrumb() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Breadcrumb.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        listProps = _this$props.listProps,
        children = _this$props.children,
        label = _this$props.label,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "listProps", "children", "label", "as"]);

    return React.createElement(Component, _extends({
      "aria-label": label,
      className: className
    }, props), React.createElement("ol", _extends({}, listProps, {
      className: classNames(bsPrefix, listProps.className)
    }), children));
  };

  return Breadcrumb;
}(React.Component);

Breadcrumb.defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  as: 'nav'
};
var DecoratedBreadcrumb = createBootstrapComponent(Breadcrumb, 'breadcrumb');
DecoratedBreadcrumb.Item = BreadcrumbItem;
export default DecoratedBreadcrumb;