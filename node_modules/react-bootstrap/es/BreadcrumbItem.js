import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import SafeAnchor from './SafeAnchor';
import { createBootstrapComponent } from './ThemeProvider';

var BreadcrumbItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BreadcrumbItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        active = _this$props.active,
        className = _this$props.className,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "active", "className", "as"]);

    var href = props.href,
        title = props.title,
        target = props.target,
        elementProps = _objectWithoutPropertiesLoose(props, ["href", "title", "target"]);

    var linkProps = {
      href: href,
      title: title,
      target: target
    };
    return React.createElement(Component, {
      className: classNames(bsPrefix, className, {
        active: active
      }),
      "aria-current": active ? 'page' : undefined
    }, active ? React.createElement("span", _extends({}, elementProps, {
      className: classNames({
        active: active
      })
    })) : React.createElement(SafeAnchor, _extends({}, elementProps, linkProps)));
  };

  return BreadcrumbItem;
}(React.Component);

BreadcrumbItem.defaultProps = {
  active: false,
  as: 'li'
};
export default createBootstrapComponent(BreadcrumbItem, 'breadcrumb-item');