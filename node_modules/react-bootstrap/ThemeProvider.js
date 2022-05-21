"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _forwardRef = _interopRequireDefault(require("react-context-toolbox/forwardRef"));

var _react = _interopRequireDefault(require("react"));

var _React$createContext = _react.default.createContext(new Map()),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    return _react.default.createElement(Consumer, null, function (prefixes) {
      return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
        bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
      }));
    });
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;