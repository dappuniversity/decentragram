"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _ModalContext = _interopRequireDefault(require("./ModalContext"));

var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ModalHeader, _React$Component);

  function ModalHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        closeLabel = _this$props.closeLabel,
        closeButton = _this$props.closeButton,
        onHide = _this$props.onHide,
        className = _this$props.className,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);
    return _react.default.createElement(_ModalContext.default.Consumer, null, function (context) {
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(className, bsPrefix)
      }), children, closeButton && _react.default.createElement(_CloseButton.default, {
        label: closeLabel,
        onClick: (0, _createChainedFunction.default)(context && context.onHide, onHide)
      }));
    });
  };

  return ModalHeader;
}(_react.default.Component);

ModalHeader.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(ModalHeader, 'modal-header');

exports.default = _default;
module.exports = exports["default"];