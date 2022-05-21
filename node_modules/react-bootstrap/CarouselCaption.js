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

var defaultProps = {
  as: 'div'
};

var CarouselCaption =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(CarouselCaption, _React$Component);

  function CarouselCaption() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselCaption.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "className", "bsPrefix"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return CarouselCaption;
}(_react.default.Component);

CarouselCaption.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(CarouselCaption, 'carousel-caption');

exports.default = _default;
module.exports = exports["default"];