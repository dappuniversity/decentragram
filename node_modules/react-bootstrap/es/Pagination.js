import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import PageItem, { First, Prev, Ellipsis, Next, Last } from './PageItem';
/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        size = _this$props.size,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "children", "size"]);

    return React.createElement("ul", _extends({}, props, {
      className: classNames(className, bsPrefix, size && bsPrefix + "-" + size)
    }), children);
  };

  return Pagination;
}(React.Component);

var DecoratedPagination = createBootstrapComponent(Pagination, 'pagination');
DecoratedPagination.First = First;
DecoratedPagination.Prev = Prev;
DecoratedPagination.Ellipsis = Ellipsis;
DecoratedPagination.Item = PageItem;
DecoratedPagination.Next = Next;
DecoratedPagination.Last = Last;
export default DecoratedPagination;