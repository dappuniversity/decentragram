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

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);
    var classes = (0, _classnames.default)(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return _react.default.createElement("img", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Image, 'img');

exports.default = _default;
module.exports = exports["default"];