"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  as: 'div'
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return Media;
}(_react.default.Component);

Media.defaultProps = defaultProps;
var DecoratedMedia = (0, _ThemeProvider.createBootstrapComponent)(Media, 'media');
DecoratedMedia.Body = (0, _createWithBsPrefix.default)('media-body');
var _default = DecoratedMedia;
exports.default = _default;
module.exports = exports["default"];