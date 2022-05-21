"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        active = _this$props.active,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active"]);
    return _react.default.createElement(_Dropdown.default, (0, _extends2.default)({}, props, {
      as: _NavItem.default
    }), _react.default.createElement(_Dropdown.default.Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: _NavLink.default
    }, title), _react.default.createElement(_Dropdown.default.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return NavDropdown;
}(_react.default.Component);

NavDropdown.Item = _Dropdown.default.Item;
NavDropdown.Divider = _Dropdown.default.Divider;
NavDropdown.Header = _Dropdown.default.Header;
var _default = NavDropdown;
exports.default = _default;
module.exports = exports["default"];