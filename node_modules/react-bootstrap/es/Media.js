import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import createWithBsPrefix from './utils/createWithBsPrefix';
import { createBootstrapComponent } from './ThemeProvider';
var defaultProps = {
  as: 'div'
};

var Media =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Media, _React$Component);

  function Media() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Media.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        Component = _this$props.as,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "className", "as"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return Media;
}(React.Component);

Media.defaultProps = defaultProps;
var DecoratedMedia = createBootstrapComponent(Media, 'media');
DecoratedMedia.Body = createWithBsPrefix('media-body');
export default DecoratedMedia;