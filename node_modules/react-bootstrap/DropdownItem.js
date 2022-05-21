"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var _ThemeProvider = require("./ThemeProvider");

var _NavContext = _interopRequireDefault(require("./NavContext"));

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DropdownItem, _React$Component);

  function DropdownItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          eventKey = _this$props.eventKey,
          href = _this$props.href;
      var key = (0, _SelectableContext.makeEventKey)(eventKey, href); // SafeAnchor handles the disabled case, but be handle it here
      // for other components

      if (disabled) return;
      if (onClick) onClick(event);
      if (onSelect) onSelect(key, event);
      if (key !== null && _this.contextSelect) _this.contextSelect(key, event);
    };

    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        className = _this$props2.className,
        children = _this$props2.children,
        _ = _this$props2.eventKey,
        _1 = _this$props2.onSelect,
        Component = _this$props2.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["bsPrefix", "active", "className", "children", "eventKey", "onSelect", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, active && 'active', props.disabled && 'disabled'),
      onClick: this.handleClick
    }), children);
  };

  return DropdownItem;
}(_react.default.Component);

DropdownItem.defaultProps = {
  as: _SafeAnchor.default,
  disabled: false
};

var _default = (0, _mapContextToProps.default)([_SelectableContext.default, _NavContext.default], function (onSelect, navContext, props) {
  var _ref = navContext || {},
      activeKey = _ref.activeKey;

  var key = (0, _SelectableContext.makeEventKey)(props.eventKey, props.href);
  return {
    onSelect: (0, _createChainedFunction.default)(props.onSelect, onSelect),
    active: props.active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : props.active
  };
}, (0, _ThemeProvider.createBootstrapComponent)(DropdownItem, 'dropdown-item'));

exports.default = _default;
module.exports = exports["default"];