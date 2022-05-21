import _extends from "babel-runtime/helpers/extends";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import * as React from "react";
import createContext from "create-react-context";

export var ManagerContext = createContext({ getReferenceRef: undefined, referenceNode: undefined });

var Manager = function (_React$Component) {
  _inherits(Manager, _React$Component);

  function Manager() {
    _classCallCheck(this, Manager);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.getReferenceRef = function (referenceNode) {
      return _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: _extends({}, context, { referenceNode: referenceNode })
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

export default Manager;