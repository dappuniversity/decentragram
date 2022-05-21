function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import componentOrElement from 'prop-types-extra/lib/componentOrElement';
import canUseDom from 'dom-helpers/util/inDOM';
import ownerDocument from 'dom-helpers/ownerDocument';
import React from 'react';
import ReactDOM from 'react-dom';
import getContainer from './utils/getContainer';
var propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: PropTypes.oneOfType([componentOrElement, PropTypes.func]),
  onContainerResolved: PropTypes.func
};

var WaitForContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(WaitForContainer, _React$Component);

  function WaitForContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    if (!canUseDom) return _assertThisInitialized(_this);
    var container = _this.props.container;
    if (typeof container === 'function') container = container();

    if (container && !ReactDOM.findDOMNode(container)) {
      // The container is a React component that has not yet been rendered.
      // Don't set the container node yet.
      return _assertThisInitialized(_this);
    }

    _this.setContainer(container);

    return _this;
  }

  var _proto = WaitForContainer.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (!this._container) {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onContainerResolved);
    } else if (this.props.onContainerResolved) {
      this.props.onContainerResolved();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._container = null;
  };

  _proto.setContainer = function setContainer(container) {
    this._container = getContainer(container, ownerDocument().body);
  };

  _proto.render = function render() {
    return this._container ? this.props.children(this._container) : null;
  };

  return WaitForContainer;
}(React.Component);

WaitForContainer.propTypes = propTypes;
export default WaitForContainer;