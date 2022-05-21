function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React from 'react';
var propTypes = {
  children: PropTypes.node
};
/**
 * Internal helper component to allow attaching a non-conflicting ref to a
 * child element that may not accept refs.
 */

var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(React.Component);

RefHolder.propTypes = propTypes;
export default RefHolder;