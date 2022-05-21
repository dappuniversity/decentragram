"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

var _CardContext = _interopRequireDefault(require("./CardContext"));

var _CardImg = _interopRequireDefault(require("./CardImg"));

var CardBody = (0, _createWithBsPrefix.default)('card-body');

var Card =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Card, _React$Component);

  function Card() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {};
    return _this;
  }

  Card.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var bsPrefix = _ref.bsPrefix;
    return {
      cardContext: {
        cardHeaderBsPrefix: bsPrefix + "-header"
      }
    };
  };

  var _proto = Card.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        bg = _this$props.bg,
        text = _this$props.text,
        border = _this$props.border,
        body = _this$props.body,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "as", "bg", "text", "border", "body", "children"]);
    var classes = (0, _classnames.default)(className, bsPrefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border);
    return _react.default.createElement(_CardContext.default.Provider, {
      value: this.state.cardContext
    }, _react.default.createElement(Component, (0, _extends2.default)({
      className: classes
    }, props), body ? _react.default.createElement(CardBody, null, children) : children));
  };

  return Card;
}(_react.default.Component);

Card.defaultProps = {
  as: 'div',
  body: false
};
var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var DecoratedCard = (0, _ThemeProvider.createBootstrapComponent)(Card, 'card');
DecoratedCard.Img = _CardImg.default;
DecoratedCard.Title = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
DecoratedCard.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
DecoratedCard.Body = CardBody;
DecoratedCard.Link = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
DecoratedCard.Text = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
DecoratedCard.Header = (0, _createWithBsPrefix.default)('card-header');
DecoratedCard.Footer = (0, _createWithBsPrefix.default)('card-footer');
DecoratedCard.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var _default = DecoratedCard;
exports.default = _default;
module.exports = exports["default"];