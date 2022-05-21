"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

var _Dropdown = _interopRequireDefault(require("react-overlays/Dropdown"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

var _ThemeProvider = require("./ThemeProvider");

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var defaultProps = {
  as: 'div',
  navbar: false
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      if (_this.props.onSelect) _this.props.onSelect(key, event);

      _this.handleToggle(false, event, 'select');
    };

    _this.handleToggle = function (show, event, source) {
      if (source === void 0) {
        source = event.type;
      }

      if (event.currentTarget === document) source = 'rootClose';

      _this.props.onToggle(show, event, {
        source: source
      });
    };

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        drop = _this$props.drop,
        show = _this$props.show,
        className = _this$props.className,
        Component = _this$props.as,
        alignRight = _this$props.alignRight,
        _1 = _this$props.onSelect,
        _3 = _this$props.onToggle,
        _4 = _this$props.navbar,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "drop", "show", "className", "as", "alignRight", "onSelect", "onToggle", "navbar"]);
    delete props.onToggle;
    return _react.default.createElement(_SelectableContext.default.Provider, {
      value: this.handleSelect
    }, _react.default.createElement(_Dropdown.default.ControlledComponent, {
      drop: drop,
      show: show,
      alignEnd: alignRight,
      onToggle: this.handleToggle,
      itemSelector: "." + bsPrefix + "-item:not(.disabled):not(:disabled)"
    }, function (_ref) {
      var dropdownProps = _ref.props;
      return _react.default.createElement(Component, (0, _extends2.default)({}, props, dropdownProps, {
        className: (0, _classnames.default)(className, show && 'show', (!drop || drop === 'down') && bsPrefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
      }));
    }));
  };

  return Dropdown;
}(_react.default.Component);

Dropdown.defaultProps = defaultProps;
var UncontrolledDropdown = (0, _ThemeProvider.createBootstrapComponent)(_Dropdown.default.deferControlTo(Dropdown), 'dropdown');
var DecoratedDropdown = (0, _mapContextToProps.default)(_SelectableContext.default, function (onSelect, props) {
  return {
    onSelect: (0, _createChainedFunction.default)(props.onSelect, onSelect)
  };
}, UncontrolledDropdown);
DecoratedDropdown.Toggle = _DropdownToggle.default;
DecoratedDropdown.Menu = _DropdownMenu.default;
DecoratedDropdown.Item = _DropdownItem.default;
DecoratedDropdown.Header = (0, _createWithBsPrefix.default)('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
DecoratedDropdown.Divider = (0, _createWithBsPrefix.default)('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
var _default = DecoratedDropdown;
exports.default = _default;
module.exports = exports["default"];