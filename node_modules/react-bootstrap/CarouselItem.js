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

var CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(CarouselItem, _React$Component);

  function CarouselItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CarouselItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        children = _this$props.children,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "children", "className"]);
    return _react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }), children);
  };

  return CarouselItem;
}(_react.default.Component);

var _default = (0, _ThemeProvider.createBootstrapComponent)(CarouselItem, 'carousel-item');

exports.default = _default;
module.exports = exports["default"];