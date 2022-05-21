"use strict";

exports.__esModule = true;
exports.default = void 0;

var _offset = _interopRequireDefault(require("dom-helpers/query/offset"));

var _listen = _interopRequireDefault(require("dom-helpers/events/listen"));

var _requestAnimationFrame = _interopRequireDefault(require("dom-helpers/util/requestAnimationFrame"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentOrElement = _interopRequireDefault(require("prop-types-extra/lib/componentOrElement"));

var _react = _interopRequireDefault(require("react"));

var _Affix = _interopRequireDefault(require("./Affix"));

var _getContainer = _interopRequireDefault(require("./utils/getContainer"));

var _getDocumentHeight = _interopRequireDefault(require("./utils/getDocumentHeight"));

var _ownerDocument = _interopRequireDefault(require("./utils/ownerDocument"));

var _ownerWindow = _interopRequireDefault(require("./utils/ownerWindow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var displayName = 'AutoAffix';

var propTypes = _extends({}, _Affix.default.propTypes, {
  /**
   * The logical container node or component for determining offset from bottom
   * of viewport, or a function that returns it
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

  /**
   * Automatically set width when affixed
   */
  autoWidth: _propTypes.default.bool // This intentionally doesn't inherit default props from `<Affix>`, so that the
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
        (0, _requestAnimationFrame.default)(function () {
          return _this.onUpdate();
        });
      }
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

      var _getOffset = (0, _offset.default)(_this.positioner),
          offsetTop = _getOffset.top,
          width = _getOffset.width;

      var container = (0, _getContainer.default)(_this.props.container);
      var offsetBottom;

      if (container) {
        var documentHeight = (0, _getDocumentHeight.default)((0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))));

        var _getOffset2 = (0, _offset.default)(container),
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
    this.removeScrollListener = (0, _listen.default)((0, _ownerWindow.default)(this), 'scroll', function () {
      return _this2.onWindowScroll();
    });
    this.removeResizeListener = (0, _listen.default)((0, _ownerWindow.default)(this), 'resize', function () {
      return _this2.onWindowResize();
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

    return _react.default.createElement("div", null, _react.default.createElement("div", {
      ref: function ref(c) {
        _this3.positioner = c;
      }
    }), _react.default.createElement(_Affix.default, _extends({}, props, {
      offsetTop: effectiveOffsetTop,
      viewportOffsetTop: viewportOffsetTop,
      offsetBottom: offsetBottom,
      affixStyle: affixStyle,
      bottomStyle: bottomStyle
    }), children));
  };

  return AutoAffix;
}(_react.default.Component);

AutoAffix.displayName = displayName;
AutoAffix.propTypes = propTypes;
AutoAffix.defaultProps = defaultProps;
var _default = AutoAffix;
exports.default = _default;
module.exports = exports.default;