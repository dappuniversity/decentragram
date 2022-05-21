import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import mapContextToProps from 'react-context-toolbox/mapContextToProps';
import BaseDropdown from 'react-overlays/Dropdown';
import chain from './utils/createChainedFunction';
import { createBootstrapComponent } from './ThemeProvider';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import SelectableContext from './SelectableContext';
import createWithBsPrefix from './utils/createWithBsPrefix';
var defaultProps = {
  as: 'div',
  navbar: false
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      if (_this.props.onSelect) _this.props.onSelect(key, event);

      _this.handleToggle(false, event, 'select');
    };

    _this.handleToggle = function (show, event, source) {
      if (source === void 0) {
        source = event.type;
      }

      if (event.currentTarget === document) source = 'rootClose';

      _this.props.onToggle(show, event, {
        source: source
      });
    };

    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        drop = _this$props.drop,
        show = _this$props.show,
        className = _this$props.className,
        Component = _this$props.as,
        alignRight = _this$props.alignRight,
        _1 = _this$props.onSelect,
        _3 = _this$props.onToggle,
        _4 = _this$props.navbar,
        props = _objectWithoutPropertiesLoose(_this$props, ["bsPrefix", "drop", "show", "className", "as", "alignRight", "onSelect", "onToggle", "navbar"]);

    delete props.onToggle;
    return React.createElement(SelectableContext.Provider, {
      value: this.handleSelect
    }, React.createElement(BaseDropdown.ControlledComponent, {
      drop: drop,
      show: show,
      alignEnd: alignRight,
      onToggle: this.handleToggle,
      itemSelector: "." + bsPrefix + "-item:not(.disabled):not(:disabled)"
    }, function (_ref) {
      var dropdownProps = _ref.props;
      return React.createElement(Component, _extends({}, props, dropdownProps, {
        className: classNames(className, show && 'show', (!drop || drop === 'down') && bsPrefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
      }));
    }));
  };

  return Dropdown;
}(React.Component);

Dropdown.defaultProps = defaultProps;
var UncontrolledDropdown = createBootstrapComponent(BaseDropdown.deferControlTo(Dropdown), 'dropdown');
var DecoratedDropdown = mapContextToProps(SelectableContext, function (onSelect, props) {
  return {
    onSelect: chain(props.onSelect, onSelect)
  };
}, UncontrolledDropdown);
DecoratedDropdown.Toggle = DropdownToggle;
DecoratedDropdown.Menu = DropdownMenu;
DecoratedDropdown.Item = DropdownItem;
DecoratedDropdown.Header = createWithBsPrefix('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
DecoratedDropdown.Divider = createWithBsPrefix('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
export default DecoratedDropdown;