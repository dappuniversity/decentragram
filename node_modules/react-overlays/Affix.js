"use strict";

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _height = _interopRequireDefault(require("dom-helpers/query/height"));

var _offset = _interopRequireDefault(require("dom-helpers/query/offset"));

var _listen = _interopRequireDefault(require("dom-helpers/events/listen"));

var _offsetParent = _interopRequireDefault(require("dom-helpers/query/offsetParent"));

var _scrollTop = _interopRequireDefault(require("dom-helpers/query/scrollTop"));

var _requestAnimationFrame = _interopRequireDefault(require("dom-helpers/util/requestAnimationFrame"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _getDocumentHeight = _interopRequireDefault(require("./utils/getDocumentHeight"));

var _ownerDocument = _interopRequireDefault(require("./utils/ownerDocument"));

var _ownerWindow = _interopRequireDefault(require("./utils/ownerWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * The `<Affix/>` component toggles `position: fixed;` on and off, emulating
 * the effect found with `position: sticky;`.
 */
var Affix =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Affix, _React$Component);

  function Affix(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.onWindowScroll = function () {
      _this.onUpdate();
    };

    _this.onDocumentClick = function () {
      (0, _requestAnimationFrame.default)(function () {
        return _this.onUpdate();
      });
    };

    _this.onUpdate = function () {
      if (!_this._isMounted) {
        return;
      }

      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          viewportOffsetTop = _this$props.viewportOffsetTop;
      var scrollTop = (0, _scrollTop.default)((0, _ownerWindow.default)(_assertThisInitialized(_assertThisInitialized(_this))));
      var positionTopMin = scrollTop + (viewportOffsetTop || 0);

      if (positionTopMin <= offsetTop) {
        _this.updateState('top', null, null);

        return;
      }

      if (positionTopMin > _this.getPositionTopMax()) {
        if (_this.state.affixed === 'bottom') {
          _this.updateStateAtBottom();
        } else {
          // Setting position away from `fixed` can change the offset parent of
          // the affix, so we can't calculate the correct position until after
          // we've updated its position.
          _this.setState({
            affixed: 'bottom',
            position: 'absolute',
            top: null
          }, function () {
            if (!_this._isMounted) {
              return;
            }

            _this.updateStateAtBottom();
          });
        }

        return;
      }

      _this.updateState('affix', 'fixed', viewportOffsetTop);
    };

    _this.getPositionTopMax = function () {
      var documentHeight = (0, _getDocumentHeight.default)((0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))));
      var height = (0, _height.default)(_reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))));
      return documentHeight - height - _this.props.offsetBottom;
    };

    _this.updateState = function (affixed, position, top) {
      if (affixed === _this.state.affixed && position === _this.state.position && top === _this.state.top) {
        return;
      }

      var upperName = affixed === 'affix' ? '' : affixed.charAt(0).toUpperCase() + affixed.substr(1);

      if (_this.props['onAffix' + upperName]) {
        _this.props['onAffix' + upperName]();
      }

      _this.setState({
        affixed: affixed,
        position: position,
        top: top
      }, function () {
        if (_this.props['onAffixed' + upperName]) {
          _this.props['onAffixed' + upperName]();
        }
      });
    };

    _this.updateStateAtBottom = function () {
      var positionTopMax = _this.getPositionTopMax();

      var offsetParent = (0, _offsetParent.default)(_reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))));
      var parentTop = (0, _offset.default)(offsetParent).top;

      _this.updateState('bottom', 'absolute', positionTopMax - parentTop);
    };

    _this.state = {
      affixed: 'top',
      position: null,
      top: null
    };
    return _this;
  }

  var _proto = Affix.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;
    this.removeScrollListener = (0, _listen.default)((0, _ownerWindow.default)(this), 'scroll', function () {
      return _this2.onWindowScroll();
    });
    this.removeClickListener = (0, _listen.default)((0, _ownerDocument.default)(this), 'click', function () {
      return _this2.onDocumentClick();
    });
    this.onUpdate();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.onUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    if (this.removeClickListener) this.removeClickListener();
    if (this.removeScrollListener) this.removeScrollListener();
  };

  _proto.render = function render() {
    var child = _react.default.Children.only(this.props.children);

    var _child$props = child.props,
        className = _child$props.className,
        style = _child$props.style;
    var _this$state = this.state,
        affixed = _this$state.affixed,
        position = _this$state.position,
        top = _this$state.top;
    var positionStyle = {
      position: position,
      top: top
    };
    var affixClassName;
    var affixStyle;

    if (affixed === 'top') {
      affixClassName = this.props.topClassName;
      affixStyle = this.props.topStyle;
    } else if (affixed === 'bottom') {
      affixClassName = this.props.bottomClassName;
      affixStyle = this.props.bottomStyle;
    } else {
      affixClassName = this.props.affixClassName;
      affixStyle = this.props.affixStyle;
    }

    return _react.default.cloneElement(child, {
      className: (0, _classnames.default)(affixClassName, className),
      style: _extends({}, positionStyle, affixStyle, style)
    });
  };

  return Affix;
}(_react.default.Component);

Affix.propTypes = {
  /**
   * Pixels to offset from top of screen when calculating position
   */
  offsetTop: _propTypes.default.number,

  /**
   * When affixed, pixels to offset from top of viewport
   */
  viewportOffsetTop: _propTypes.default.number,

  /**
   * Pixels to offset from bottom of screen when calculating position
   */
  offsetBottom: _propTypes.default.number,

  /**
   * CSS class or classes to apply when at top
   */
  topClassName: _propTypes.default.string,

  /**
   * Style to apply when at top
   */
  topStyle: _propTypes.default.object,

  /**
   * CSS class or classes to apply when affixed
   */
  affixClassName: _propTypes.default.string,

  /**
   * Style to apply when affixed
   */
  affixStyle: _propTypes.default.object,

  /**
   * CSS class or classes to apply when at bottom
   */
  bottomClassName: _propTypes.default.string,

  /**
   * Style to apply when at bottom
   */
  bottomStyle: _propTypes.default.object,

  /**
   * Callback fired right before the `affixStyle` and `affixClassName` props are rendered
   */
  onAffix: _propTypes.default.func,

  /**
   * Callback fired after the component `affixStyle` and `affixClassName` props have been rendered
   */
  onAffixed: _propTypes.default.func,

  /**
   * Callback fired right before the `topStyle` and `topClassName` props are rendered
   */
  onAffixTop: _propTypes.default.func,

  /**
   * Callback fired after the component `topStyle` and `topClassName` props have been rendered
   */
  onAffixedTop: _propTypes.default.func,

  /**
   * Callback fired right before the `bottomStyle` and `bottomClassName` props are rendered
   */
  onAffixBottom: _propTypes.default.func,

  /**
   * Callback fired after the component `bottomStyle` and `bottomClassName` props have been rendered
   */
  onAffixedBottom: _propTypes.default.func
};
Affix.defaultProps = {
  offsetTop: 0,
  viewportOffsetTop: null,
  offsetBottom: 0
};
var _default = Affix;
exports.default = _default;
module.exports = exports.default;