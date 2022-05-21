'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Please remember to update also the TypeScript test files that can
// be found under `/typings/tests` please. Thanks! 🤗

var Test = exports.Test = function Test() {
  var _React$createElement;

  return _react2.default.createElement(
    _.Manager,
    null,
    _react2.default.createElement(_.Reference, null),
    _react2.default.createElement(
      _.Reference,
      null,
      function (_ref) {
        var ref = _ref.ref;
        return _react2.default.createElement('div', { ref: ref });
      }
    ),
    _react2.default.createElement(
      _.Popper
      // $FlowExpectError: should be boolean
      ,
      (_React$createElement = { eventsEnabled: 'foo'
      }, _React$createElement['eventsEnabled'] = true, _React$createElement.positionFixed = 2, _React$createElement['positionFixed'] = true, _React$createElement.modifiers = { flip: { enabled: 'bar', order: 'foo' } }, _React$createElement['modifiers'] = { flip: { enabled: false } }, _React$createElement),
      function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement,
            outOfBoundaries = _ref2.outOfBoundaries,
            scheduleUpdate = _ref2.scheduleUpdate,
            arrowProps = _ref2.arrowProps;
        return _react2.default.createElement(
          'div',
          {
            ref: ref,
            style: (0, _extends3.default)({}, style, { opacity: outOfBoundaries ? 0 : 1 }),
            'data-placement': placement,
            onClick: function onClick() {
              return scheduleUpdate();
            }
          },
          'Popper',
          _react2.default.createElement('div', { ref: arrowProps.ref, style: arrowProps.style })
        );
      }
    ),
    _react2.default.createElement(
      _.Popper,
      null,
      function (_ref3) {
        var ref = _ref3.ref,
            style = _ref3.style,
            placement = _ref3.placement;
        return _react2.default.createElement(
          'div',
          { ref: ref, style: style, 'data-placement': placement },
          'Popper'
        );
      }
    )
  );
};