function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import getOffset from 'dom-helpers/query/offset';
import listen from 'dom-helpers/events/listen';
import requestAnimationFrame from 'dom-helpers/util/requestAnimationFrame';
import PropTypes from 'prop-types';
import componentOrElement from 'prop-types-extra/lib/componentOrElement';
import React from 'react';
import Affix from './Affix';
import getContainer from './utils/getContainer';
import getDocumentHeight from './utils/getDocumentHeight';
import ownerDocument from './utils/ownerDocument';
import ownerWindow from './utils/ownerWindow';
var displayName = 'AutoAffix';

var propTypes = _extends({}, Affix.propTypes, {
  /**
   * The logical container node or component for determining offset from bottom
   * of viewport, or a function that returns it
   */
  container: PropTypes.oneOfType([componentOrElement, PropTypes.func]),

  /**
   * Automatically set width when affixed
   */
  autoWidth: PropTypes.bool // This intentionally doesn't inherit default props from `<Affix>`, so that the
  // auto-calculated offsets can apply.

});

var defaultProps = {
  viewportOffsetTop: 0,
  autoWidth: true
  /**
   * The `<AutoAffix/>` component wraps `<Affix/>` to automatically calculate
   * offsets in many common cases.
   */

};

var AutoAffix =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(AutoAffix, _React$Component);

  function AutoAffix(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.onWindowScroll = function () {
      _this.onUpdate();
    };

    _this.onWindowResize = function () {
      if (_this.props.autoWidth) {
        requestAnimationFrame(function () {
          return _this.onUpdate();
        });
      }
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

      var _getOffset = getOffset(_this.positioner),
          offsetTop = _getOffset.top,
          width = _getOffset.width;

      var container = getContainer(_this.props.container);
      var offsetBottom;

      if (container) {
        var documentHeight = getDocumentHeight(ownerDocument(_assertThisInitialized(_assertThisInitialized(_this))));

        var _getOffset2 = getOffset(container),
            top = _getOffset2.top,
            height = _getOffset2.height;

        offsetBottom = documentHeight - top - height;
      } else {
        offsetBottom = null;
      }

      _this.updateState(offsetTop, offsetBottom, width);
    };

    _this.updateState = function (offsetTop, offsetBottom, width) {
      if (offsetTop === _this.state.offsetTop && offsetBottom === _this.state.offsetBottom && width === _this.state.width) {
        return;
      }

      _this.setState({
        offsetTop: offsetTop,
        offsetBottom: offsetBottom,
        width: width
      });
    };

    _this.state = {
      offsetTop: null,
      offsetBottom: null,
      width: null
    };
    return _this;
  }

  var _proto = AutoAffix.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._isMounted = true;
    this.removeScrollListener = listen(ownerWindow(this), 'scroll', function () {
      return _this2.onWindowScroll();
    });
    this.removeResizeListener = listen(ownerWindow(this), 'resize', function () {
      return _this2.onWindowResize();
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
    if (this.removeScrollListener) this.removeScrollListener();
    if (this.removeClickListener) this.removeClickListener();
    if (this.removeResizeListener) this.removeResizeListener();
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        autoWidth = _this$props.autoWidth,
        viewportOffsetTop = _this$props.viewportOffsetTop,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["autoWidth", "viewportOffsetTop", "children"]);

    var _this$state = this.state,
        offsetTop = _this$state.offsetTop,
        offsetBottom = _this$state.offsetBottom,
        width = _this$state.width;
    delete props.container;
    var effectiveOffsetTop = Math.max(offsetTop, viewportOffsetTop || 0);
    var _this$props2 = this.props,
        affixStyle = _this$props2.affixStyle,
        bottomStyle = _this$props2.bottomStyle;

    if (autoWidth) {
      affixStyle = _extends({
        width: width
      }, affixStyle);
      bottomStyle = _extends({
        width: width
      }, bottomStyle);
    }

    return React.createElement("div", null, React.createElement("div", {
      ref: function ref(c) {
        _this3.positioner = c;
      }
    }), React.createElement(Affix, _extends({}, props, {
      offsetTop: effectiveOffsetTop,
      viewportOffsetTop: viewportOffsetTop,
      offsetBottom: offsetBottom,
      affixStyle: affixStyle,
      bottomStyle: bottomStyle
    }), children));
  };

  return AutoAffix;
}(React.Component);

AutoAffix.displayName = displayName;
AutoAffix.propTypes = propTypes;
AutoAffix.defaultProps = defaultProps;
export default AutoAffix;