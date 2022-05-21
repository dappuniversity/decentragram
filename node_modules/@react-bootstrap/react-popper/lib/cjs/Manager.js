"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManagerContext = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _createReactContext = require("create-react-context");

var _createReactContext2 = _interopRequireDefault(_createReactContext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ManagerContext = exports.ManagerContext = (0, _createReactContext2.default)({ getReferenceRef: undefined, referenceNode: undefined });

var Manager = function (_React$Component) {
  (0, _inherits3.default)(Manager, _React$Component);

  function Manager() {
    (0, _classCallCheck3.default)(this, Manager);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this.getReferenceRef = function (referenceNode) {
      return _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: (0, _extends3.default)({}, context, { referenceNode: referenceNode })
        };
      });
    };

    _this.state = {
      context: {
        getReferenceRef: _this.getReferenceRef,
        referenceNode: undefined
      }
    };
    return _this;
  }

  Manager.prototype.render = function render() {
    return React.createElement(
      ManagerContext.Provider,
      { value: this.state.context },
      this.props.children
    );
  };

  return Manager;
}(React.Component);

exports.default = Manager;