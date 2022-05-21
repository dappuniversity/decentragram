function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import classNames from 'classnames';
import getHeight from 'dom-helpers/query/height';
import getOffset from 'dom-helpers/query/offset';
import listen from 'dom-helpers/events/listen';
import getOffsetParent from 'dom-helpers/query/offsetParent';
import getScrollTop from 'dom-helpers/query/scrollTop';
import requestAnimationFrame from 'dom-helpers/util/requestAnimationFrame';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import getDocumentHeight from './utils/getDocumentHeight';
import ownerDocument from './utils/ownerDocument';
import ownerWindow from './utils/ownerWindow';
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
      requestAnimationFrame(function () {
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
      var scrollTop = getScrollTop(ownerWindow(_assertThisInitialized(_assertThisInitialized(_this))));
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
      var documentHeight = getDocumentHeight(ownerDocument(_assertThisInitialized(_assertThisInitialized(_this))));
      var height = getHeight(ReactDOM.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))));
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

      var offsetParent = getOffsetParent(ReactDOM.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))));
      var parentTop = getOffset(offsetParent).top;

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
    this.removeScrollListener = listen(ownerWindow(this), 'scroll', function () {
      return _this2.onWindowScroll();
    });
    this.removeClickListener = listen(ownerDocument(this), 'click', function () {
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
    var child = React.Children.only(this.props.children);
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

    return React.cloneElement(child, {
      className: classNames(affixClassName, className),
      style: _extends({}, positionStyle, affixStyle, style)
    });
  };

  return Affix;
}(React.Component);

Affix.propTypes = {
  /**
   * Pixels to offset from top of screen when calculating position
   */
  offsetTop: PropTypes.number,

  /**
   * When affixed, pixels to offset from top of viewport
   */
  viewportOffsetTop: PropTypes.number,

  /**
   * Pixels to offset from bottom of screen when calculating position
   */
  offsetBottom: PropTypes.number,

  /**
   * CSS class or classes to apply when at top
   */
  topClassName: PropTypes.string,

  /**
   * Style to apply when at top
   */
  topStyle: PropTypes.object,

  /**
   * CSS class or classes to apply when affixed
   */
  affixClassName: PropTypes.string,

  /**
   * Style to apply when affixed
   */
  affixStyle: PropTypes.object,

  /**
   * CSS class or classes to apply when at bottom
   */
  bottomClassName: PropTypes.string,

  /**
   * Style to apply when at bottom
   */
  bottomStyle: PropTypes.object,

  /**
   * Callback fired right before the `affixStyle` and `affixClassName` props are rendered
   */
  onAffix: PropTypes.func,

  /**
   * Callback fired after the component `affixStyle` and `affixClassName` props have been rendered
   */
  onAffixed: PropTypes.func,

  /**
   * Callback fired right before the `topStyle` and `topClassName` props are rendered
   */
  onAffixTop: PropTypes.func,

  /**
   * Callback fired after the component `topStyle` and `topClassName` props have been rendered
   */
  onAffixedTop: PropTypes.func,

  /**
   * Callback fired right before the `bottomStyle` and `bottomClassName` props are rendered
   */
  onAffixBottom: PropTypes.func,

  /**
   * Callback fired after the component `bottomStyle` and `bottomClassName` props have been rendered
   */
  onAffixedBottom: PropTypes.func
};
Affix.defaultProps = {
  offsetTop: 0,
  viewportOffsetTop: null,
  offsetBottom: 0
};
export default Affix;