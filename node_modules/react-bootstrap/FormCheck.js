"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _FormCheckInput = _interopRequireDefault(require("./FormCheckInput"));

var _FormCheckLabel = _interopRequireDefault(require("./FormCheckLabel"));

var FormCheck =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(FormCheck, _React$Component);

  function FormCheck() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = FormCheck.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        inline = _this$props.inline,
        disabled = _this$props.disabled,
        isValid = _this$props.isValid,
        isInvalid = _this$props.isInvalid,
        feedback = _this$props.feedback,
        inputRef = _this$props.inputRef,
        className = _this$props.className,
        style = _this$props.style,
        title = _this$props.title,
        type = _this$props.type,
        label = _this$props.label,
        children = _this$props.children,
        custom = _this$props.custom,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "inputRef", "className", "style", "title", "type", "label", "children", "custom"]);
    var hasLabel = label != null && label !== false && !children;

    var input = _react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
      type: type,
      ref: inputRef,
      isValid: isValid,
      isInvalid: isInvalid,
      isStatic: !hasLabel,
      disabled: disabled
    }));

    return _react.default.createElement(_FormContext.default.Transform, {
      mapToValue: function mapToValue(_ref) {
        var controlId = _ref.controlId;
        return {
          controlId: id || controlId,
          custom: custom
        };
      }
    }, _react.default.createElement("div", {
      style: style,
      className: (0, _classnames.default)(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
    }, children || _react.default.createElement(_react.default.Fragment, null, input, hasLabel && _react.default.createElement(_FormCheckLabel.default, {
      title: title
    }, label), (isValid || isInvalid) && _react.default.createElement(_Feedback.default, {
      type: isValid ? 'valid' : 'invalid'
    }, feedback))));
  };

  return FormCheck;
}(_react.default.Component);

FormCheck.defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};
var DecoratedFormCheck = (0, _ThemeProvider.createBootstrapComponent)(FormCheck, {
  forwardRefAs: 'inputRef',
  prefix: 'form-check'
});
DecoratedFormCheck.Input = _FormCheckInput.default;
DecoratedFormCheck.Label = _FormCheckLabel.default;
var _default = DecoratedFormCheck;
exports.default = _default;
module.exports = exports["default"];