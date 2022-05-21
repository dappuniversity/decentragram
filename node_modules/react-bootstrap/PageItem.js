"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = PageItem;
exports.Last = exports.Next = exports.Ellipsis = exports.Prev = exports.First = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

/* eslint-disable react/no-multi-comp */
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};

function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);
  var Component = active || disabled ? 'span' : _SafeAnchor.default;
  return _react.default.createElement("li", {
    style: style,
    className: (0, _classnames.default)(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, _react.default.createElement(Component, (0, _extends2.default)({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && _react.default.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
}

PageItem.defaultProps = defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inheritsLoose2.default)(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children"]);
      delete props.active;
      return _react.default.createElement(PageItem, props, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, children || defaultValue), _react.default.createElement("span", {
        className: "sr-only"
      }, label));
    };

    return _class;
  }(_react.default.Component), _class.displayName = name, _temp;
}

var First = createButton('First', "\xAB");
exports.First = First;
var Prev = createButton('Prev', "\u2039", 'Previous');
exports.Prev = Prev;
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
exports.Ellipsis = Ellipsis;
var Next = createButton('Next', "\u203A");
exports.Next = Next;
var Last = createButton('Last', "\xBB");
exports.Last = Last;