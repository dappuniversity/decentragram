function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import componentOrElement from 'prop-types-extra/lib/componentOrElement';
import React from 'react';
import ReactDOM from 'react-dom';
import WaitForContainer from './WaitForContainer';
/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.render = function render() {
    var _this = this;

    return this.props.children ? React.createElement(WaitForContainer, {
      container: this.props.container,
      onContainerResolved: this.props.onRendered
    }, function (container) {
      return ReactDOM.createPortal(_this.props.children, container);
    }) : null;
  };

  return Portal;
}(React.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: PropTypes.oneOfType([componentOrElement, PropTypes.func]),
  onRendered: PropTypes.func
};
export default Portal;