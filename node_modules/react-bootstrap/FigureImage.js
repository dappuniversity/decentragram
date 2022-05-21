"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var FigureImage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(FigureImage, _React$Component);

  function FigureImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FigureImage.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className"]);
    return _react.default.createElement(_Image.default, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, 'figure-img')
    }));
  };

  return FigureImage;
}(_react.default.Component);

FigureImage.defaultProps = {
  fluid: true
};
var _default = FigureImage;
exports.default = _default;
module.exports = exports["default"];