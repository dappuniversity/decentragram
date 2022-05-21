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

var CardImg =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(CardImg, _React$Component);

  function CardImg() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CardImg.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        variant = _this$props.variant,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "variant", "as"]);
    var baseClass = variant ? bsPrefix + "-" + variant : bsPrefix;
    return _react.default.createElement(Component, (0, _extends2.default)({
      className: (0, _classnames.default)(baseClass, className)
    }, props));
  };

  return CardImg;
}(_react.default.Component);

CardImg.defaultProps = {
  as: 'img',
  variant: null
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(CardImg, 'card-img');

exports.default = _default;
module.exports = exports["default"];