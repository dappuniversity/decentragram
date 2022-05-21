'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = Reference;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Manager = require('./Manager');

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerReference = function (_React$Component) {
  (0, _inherits3.default)(InnerReference, _React$Component);

  function InnerReference() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InnerReference);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.refHandler = function (node) {
      (0, _utils.safeInvoke)(_this.props.innerRef, node);
      (0, _utils.safeInvoke)(_this.props.getReferenceRef, node);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  InnerReference.prototype.render = function render() {
    (0, _warning2.default)(this.props.getReferenceRef, '`Reference` should not be used outside of a `Manager` component.');
    return (0, _utils.unwrapArray)(this.props.children)({ ref: this.refHandler });
  };

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(
    _Manager.ManagerContext.Consumer,
    null,
    function (_ref) {
      var getReferenceRef = _ref.getReferenceRef;
      return React.createElement(InnerReference, (0, _extends3.default)({ getReferenceRef: getReferenceRef }, props));
    }
  );
}