import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import createWithBsPrefix from './utils/createWithBsPrefix';
import divWithClassName from './utils/divWithClassName';
import CardContext from './CardContext';
import CardImg from './CardImg';
var CardBody = createWithBsPrefix('card-body');

var Card =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Card, _React$Component);

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
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "as", "bg", "text", "border", "body", "children"]);

    var classes = classNames(className, bsPrefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border);
    return React.createElement(CardContext.Provider, {
      value: this.state.cardContext
    }, React.createElement(Component, _extends({
      className: classes
    }, props), body ? React.createElement(CardBody, null, children) : children));
  };

  return Card;
}(React.Component);

Card.defaultProps = {
  as: 'div',
  body: false
};
var DivStyledAsH5 = divWithClassName('h5');
var DivStyledAsH6 = divWithClassName('h6');
var DecoratedCard = createBootstrapComponent(Card, 'card');
DecoratedCard.Img = CardImg;
DecoratedCard.Title = createWithBsPrefix('card-title', {
  Component: DivStyledAsH5
});
DecoratedCard.Subtitle = createWithBsPrefix('card-subtitle', {
  Component: DivStyledAsH6
});
DecoratedCard.Body = CardBody;
DecoratedCard.Link = createWithBsPrefix('card-link', {
  Component: 'a'
});
DecoratedCard.Text = createWithBsPrefix('card-text', {
  Component: 'p'
});
DecoratedCard.Header = createWithBsPrefix('card-header');
DecoratedCard.Footer = createWithBsPrefix('card-footer');
DecoratedCard.ImgOverlay = createWithBsPrefix('card-img-overlay');
export default DecoratedCard;