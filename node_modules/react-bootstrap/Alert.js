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

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var _Fade = _interopRequireDefault(require("./Fade"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

/**
 * @property {AlertHeading} Heading
 * @property {AlertLink} Link
 */
var Alert =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Alert, _React$Component);

  function Alert() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClose = function (e) {
      _this.props.onClose(false, e);
    };

    return _this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        show = _this$props.show,
        closeLabel = _this$props.closeLabel,
        className = _this$props.className,
        children = _this$props.children,
        variant = _this$props.variant,
        dismissible = _this$props.dismissible,
        Transition = _this$props.transition,
        _ = _this$props.onClose,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "dismissible", "transition", "onClose"]);

    var alert = _react.default.createElement("div", (0, _extends2.default)({
      role: "alert"
    }, Transition ? props : undefined, {
      className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant, dismissible && bsPrefix + "-dismissible")
    }), dismissible && _react.default.createElement(_CloseButton.default, {
      onClick: this.handleClose,
      label: closeLabel
    }), children);

    if (!Transition) return show ? alert : null;
    return _react.default.createElement(Transition, (0, _extends2.default)({
      unmountOnExit: true
    }, props, {
      in: show
    }), alert);
  };

  return Alert;
}(_react.default.Component);

Alert.defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};
var DecoratedAlert = (0, _uncontrollable.default)((0, _ThemeProvider.createBootstrapComponent)(Alert, 'alert'), {
  show: 'onClose'
});
var DivStyledAsH4 = (0, _divWithClassName.default)('h4');
DecoratedAlert.Link = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
DecoratedAlert.Heading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: DivStyledAsH4
});
var _default = DecoratedAlert;
exports.default = _default;
module.exports = exports["default"];