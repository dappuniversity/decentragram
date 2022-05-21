"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

var _ThemeProvider = require("./ThemeProvider");

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');

var ModalTitle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ModalTitle, _React$Component);

  function ModalTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ModalTitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "bsPrefix", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return ModalTitle;
}(_react.default.Component);

ModalTitle.defaultProps = {
  as: DivStyledAsH4
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(ModalTitle, 'modal-title');

exports.default = _default;
module.exports = exports["default"];