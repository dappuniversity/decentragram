"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _ThemeProvider = require("./ThemeProvider");

var _AbstractNav = _interopRequireDefault(require("./AbstractNav"));

var _ListGroupItem = _interopRequireDefault(require("./ListGroupItem"));

var ListGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className", "bsPrefix", "variant"]);
    return _react.default.createElement(_AbstractNav.default, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant)
    }));
  };

  return ListGroup;
}(_react.default.Component);

ListGroup.defaultProps = {
  as: 'div',
  variant: null
};
var DecoratedListGroup = (0, _uncontrollable.default)((0, _ThemeProvider.createBootstrapComponent)(ListGroup, 'list-group'), {
  activeKey: 'onSelect'
});
DecoratedListGroup.Item = _ListGroupItem.default;
var _default = DecoratedListGroup;
exports.default = _default;
module.exports = exports["default"];