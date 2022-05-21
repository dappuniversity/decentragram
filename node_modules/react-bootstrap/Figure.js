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

var _FigureImage = _interopRequireDefault(require("./FigureImage"));

var _FigureCaption = _interopRequireDefault(require("./FigureCaption"));

var Figure =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Figure, _React$Component);

  function Figure() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Figure.prototype;

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

  return Figure;
}(_react.default.Component);

Figure.defaultProps = {
  as: 'figure'
};
var DecoratedFigure = (0, _ThemeProvider.createBootstrapComponent)(Figure, 'figure');
DecoratedFigure.Image = _FigureImage.default;
DecoratedFigure.Caption = _FigureCaption.default;
var _default = DecoratedFigure;
exports.default = _default;
module.exports = exports["default"];