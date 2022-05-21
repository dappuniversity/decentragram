import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import forwardRef from 'react-context-toolbox/forwardRef';
import React from 'react';

var _React$createContext = React.createContext(new Map()),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ThemeProvider, _React$Component);

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
    return React.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(React.Component);

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return forwardRef(function (_ref, ref) {
    var props = _extends({}, _ref);

    props[forwardRefAs] = ref;
    return React.createElement(Consumer, null, function (prefixes) {
      return React.createElement(Component, _extends({}, props, {
        bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
      }));
    });
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

export { createBootstrapComponent, Consumer as ThemeConsumer };
export default ThemeProvider;