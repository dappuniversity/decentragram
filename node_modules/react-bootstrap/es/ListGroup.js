import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import uncontrollable from 'uncontrollable';
import { createBootstrapComponent } from './ThemeProvider';
import AbstractNav from './AbstractNav';
import ListGroupItem from './ListGroupItem';

var ListGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "bsPrefix", "variant"]);

    return React.createElement(AbstractNav, _extends({}, props, {
      className: classNames(className, bsPrefix, variant && bsPrefix + "-" + variant)
    }));
  };

  return ListGroup;
}(React.Component);

ListGroup.defaultProps = {
  as: 'div',
  variant: null
};
var DecoratedListGroup = uncontrollable(createBootstrapComponent(ListGroup, 'list-group'), {
  activeKey: 'onSelect'
});
DecoratedListGroup.Item = ListGroupItem;
export default DecoratedListGroup;