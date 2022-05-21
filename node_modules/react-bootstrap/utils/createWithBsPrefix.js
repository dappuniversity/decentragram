"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _camelize = _interopRequireDefault(require("dom-helpers/util/camelize"));

var _ThemeProvider = require("../ThemeProvider");

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _class, _temp2;

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  return (0, _ThemeProvider.createBootstrapComponent)((_temp2 = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inheritsLoose2.default)(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bsPrefix = _this$props.bsPrefix,
          _this$props$as = _this$props.as,
          Tag = _this$props$as === void 0 ? Component : _this$props$as,
          props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className", "bsPrefix", "as"]);
      return _react.default.createElement(Tag, (0, _extends2.default)({}, defaultProps, props, {
        className: (0, _classnames.default)(className, bsPrefix)
      }));
    };

    return _class;
  }(_react.default.Component), _class.displayName = displayName, _temp2), prefix);
}

module.exports = exports["default"];