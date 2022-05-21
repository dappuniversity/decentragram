import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import { createBootstrapComponent } from './ThemeProvider';
import FigureImage from './FigureImage';
import FigureCaption from './FigureCaption';

var Figure =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Figure, _React$Component);

  function Figure() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Figure.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.as,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        props = _objectWithoutPropertiesLoose(_this$props, ["as", "bsPrefix", "className"]);

    return React.createElement(Component, _extends({}, props, {
      className: classNames(className, bsPrefix)
    }));
  };

  return Figure;
}(React.Component);

Figure.defaultProps = {
  as: 'figure'
};
var DecoratedFigure = createBootstrapComponent(Figure, 'figure');
DecoratedFigure.Image = FigureImage;
DecoratedFigure.Caption = FigureCaption;
export default DecoratedFigure;