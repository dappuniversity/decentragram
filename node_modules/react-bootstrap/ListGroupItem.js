"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _AbstractNavItem = _interopRequireDefault(require("./AbstractNavItem"));

var _SelectableContext = require("./SelectableContext");

var _ThemeProvider = require("./ThemeProvider");

var ListGroupItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ListGroupItem, _React$Component);

  function ListGroupItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) onClick(event);
    };

    return _this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        className = _this$props2.className,
        variant = _this$props2.variant,
        action = _this$props2.action,
        as = _this$props2.as,
        eventKey = _this$props2.eventKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey"]);
    return _react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
      eventKey: (0, _SelectableContext.makeEventKey)(eventKey, props.href) // eslint-disable-next-line
      ,
      as: as || (action ? props.href ? 'a' : 'button' : 'div'),
      onClick: this.handleClick,
      className: (0, _classnames.default)(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
    }));
  };

  return ListGroupItem;
}(_react.default.Component);

ListGroupItem.defaultProps = {
  variant: null,
  active: false,
  disabled: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(ListGroupItem, 'list-group-item');

exports.default = _default;
module.exports = exports["default"];