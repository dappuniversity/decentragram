"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _invariant = _interopRequireDefault(require("invariant"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

var _ElementChildren = require("./utils/ElementChildren");

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));

var defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange([].concat(values, [value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["children", "type", "name"]);
    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ? process.env.NODE_ENV !== "production" ? (0, _invariant.default)(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : invariant(false) : void 0;
    return _react.default.createElement(_ButtonGroup.default, (0, _extends2.default)({}, props, {
      toggle: true
    }), (0, _ElementChildren.map)(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return _react.default.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: (0, _createChainedFunction.default)(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(_react.default.Component);

ToggleButtonGroup.defaultProps = defaultProps;
var UncontrolledToggleButtonGroup = (0, _uncontrollable.default)(ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = _ToggleButton.default;
var _default = UncontrolledToggleButtonGroup;
exports.default = _default;
module.exports = exports["default"];