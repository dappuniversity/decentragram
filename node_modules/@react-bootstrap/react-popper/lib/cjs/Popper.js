'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placements = exports.InnerPopper = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = Popper;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _popper = require('popper.js');

var _popper2 = _interopRequireDefault(_popper);

var _Manager = require('./Manager');

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};

var initialArrowStyle = {};

var InnerPopper = exports.InnerPopper = function (_React$Component) {
  (0, _inherits3.default)(InnerPopper, _React$Component);

  function InnerPopper() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, InnerPopper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      data: undefined,
      placement: undefined
    }, _this.popperNode = null, _this.arrowNode = null, _this.setPopperNode = function (popperNode) {
      if (_this.popperNode === popperNode) return;

      (0, _utils.safeInvoke)(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      if (!_this.popperInstance) _this.updatePopperInstance();
    }, _this.setArrowNode = function (arrowNode) {
      if (_this.arrowNode === arrowNode) return;
      _this.arrowNode = arrowNode;

      if (!_this.popperInstance) _this.updatePopperInstance();
    }, _this.updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({ data: data, placement: placement }, placement !== _this.state.placement ? _this.scheduleUpdate : undefined);
        return data;
      }
    }, _this.getOptions = function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: (0, _extends3.default)({}, _this.props.modifiers, {
          arrow: {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          },
          applyStyle: { enabled: false },
          updateStateModifier: _this.updateStateModifier
        })
      };
    }, _this.getPopperStyle = function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : (0, _extends3.default)({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    }, _this.getPopperPlacement = function () {
      return !_this.state.data ? undefined : _this.state.placement;
    }, _this.getArrowStyle = function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    }, _this.getOutOfBoundariesState = function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    }, _this.destroyPopperInstance = function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();
      _this.popperInstance = null;
    }, _this.updatePopperInstance = function () {
      _this.destroyPopperInstance();

      var _this2 = _this,
          popperNode = _this2.popperNode;
      var referenceElement = _this.props.referenceElement;


      if (!referenceElement || !popperNode) return;

      _this.popperInstance = new _popper2.default(referenceElement, popperNode, _this.getOptions());
    }, _this.scheduleUpdate = function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  InnerPopper.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    }

    // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.
    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  InnerPopper.prototype.componentWillUnmount = function componentWillUnmount() {
    this.destroyPopperInstance();
  };

  InnerPopper.prototype.render = function render() {
    return (0, _utils.unwrapArray)(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(React.Component);

InnerPopper.defaultProps = {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
};


var placements = _popper2.default.placements;
exports.placements = placements;
function Popper(props) {
  return React.createElement(
    _Manager.ManagerContext.Consumer,
    null,
    function (_ref) {
      var referenceNode = _ref.referenceNode;
      return React.createElement(InnerPopper, (0, _extends3.default)({ referenceElement: referenceNode }, props));
    }
  );
}