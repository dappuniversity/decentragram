import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import camelize from 'dom-helpers/util/camelize';
import { createBootstrapComponent } from '../ThemeProvider';

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + camelize(str).slice(1);
};

export default function createWithBsPrefix(prefix, _temp) {
  var _class, _temp2;

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  return createBootstrapComponent((_temp2 = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          bsPrefix = _this$props.bsPrefix,
          _this$props$as = _this$props.as,
          Tag = _this$props$as === void 0 ? Component : _this$props$as,
          props = _objectWithoutPropertiesLoose(_this$props, ["className", "bsPrefix", "as"]);

      return React.createElement(Tag, _extends({}, defaultProps, props, {
        className: classNames(className, bsPrefix)
      }));
    };

    return _class;
  }(React.Component), _class.displayName = displayName, _temp2), prefix);
}