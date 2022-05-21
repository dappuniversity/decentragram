"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "className", "fluid", "bsPrefix"]);
    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return Jumbotron;
}(_react.default.Component);

Jumbotron.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(Jumbotron, 'jumbotron');

exports.default = _default;
module.exports = exports["default"];