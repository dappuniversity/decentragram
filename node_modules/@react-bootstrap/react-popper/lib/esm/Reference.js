import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import * as React from 'react';
import warning from 'warning';
import { ManagerContext } from './Manager';
import { safeInvoke, unwrapArray } from './utils';

var InnerReference = function (_React$Component) {
  _inherits(InnerReference, _React$Component);

  function InnerReference() {
    var _temp, _this, _ret;

    _classCallCheck(this, InnerReference);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.refHandler = function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.getReferenceRef, node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  InnerReference.prototype.render = function render() {
    warning(this.props.getReferenceRef, '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({ ref: this.refHandler });
  };

  return InnerReference;
}(React.Component);

export default function Reference(props) {
  return React.createElement(
    ManagerContext.Consumer,
    null,
    function (_ref) {
      var getReferenceRef = _ref.getReferenceRef;
      return React.createElement(InnerReference, _extends({ getReferenceRef: getReferenceRef }, props));
    }
  );
}