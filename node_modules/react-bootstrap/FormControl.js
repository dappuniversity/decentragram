"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  as: 'input'
};

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(FormControl, _React$Component);

  function FormControl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormControl.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        type = _this$props.type,
        size = _this$props.size,
        id = _this$props.id,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        plaintext = _this$props.plaintext,
        readOnly = _this$props.readOnly,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "type", "size", "id", "inputRef", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);
    var classes;

    if (plaintext) {
      var _classes;

      classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
    } else if (type === 'file') {
      var _classes2;

      classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
    } else {
      var _classes3;

      classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
    }

    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      type: type,
      id: id,
      ref: inputRef,
      readOnly: readOnly,
      className: (0, _classnames.default)(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
    }));
  };

  return FormControl;
}(_react.default.Component);

FormControl.defaultProps = defaultProps;

var mapContext = function mapContext(_ref, _ref2) {
  var controlId = _ref.controlId;
  var id = _ref2.id;
  process.env.NODE_ENV !== "production" ? (0, _warning.default)(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return {
    id: id || controlId
  };
};

var DecoratedFormControl = (0, _mapContextToProps.default)(_FormContext.default, mapContext, (0, _ThemeProvider.createBootstrapComponent)(FormControl, {
  prefix: 'form-control',
  forwardRefAs: 'inputRef'
}));
DecoratedFormControl.Feedback = _Feedback.default;
var _default = DecoratedFormControl;
exports.default = _default;
module.exports = exports["default"];