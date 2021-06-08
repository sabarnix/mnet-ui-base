import styled, { css } from 'styled-components';
import { disabledStyle, getInputPadBySide, focusStyle, inputStyle, parseMetricToNum, placeholderStyle } from '../../utils';
import { defaultProps } from '../../default-props';

var sizeStyle = function sizeStyle(props) {
  var data = props.theme.text[props.size];
  return css(["font-size:", ";line-height:", ";"], data.size, data.height);
};

var plainStyle = css(["outline:none;border:none;box-shadow:none;"]);
var StyledTextInput = styled.input.withConfig({
  displayName: "StyledTextInput",
  componentId: "ilbntv-0"
})(["", " width:100%;", " ", " ", " ", " ", " &::-moz-focus-inner{border:none;outline:none;}", ";", " ", ";box-shadow:none;", " border-bottom-width:2px;", " ", " transition:width 0.2s ease 0s,background 0.2s ease 0s,border 0.2s ease 0s;"], inputStyle, function (props) {
  return props.fill && "height: 100%;";
}, function (props) {
  return props.size && sizeStyle(props);
}, function (props) {
  return props.plain && plainStyle;
}, placeholderStyle, function (props) {
  return props.icon && (props.reverse ? "padding-right: " + props.theme.global.edgeSize.large + ";" : "padding-left: " + props.theme.global.edgeSize.xlarge + ";");
}, function (props) {
  return props.focus && !props.plain && focusStyle();
}, function (props) {
  return props.disabled && disabledStyle(props.theme.textInput.disabled && props.theme.textInput.disabled.opacity);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.extend;
}, function (props) {
  return !props.plain && "border: " + props.theme.textInput.border;
}, function (props) {
  return props.focus && props.theme.textInput.focus;
}, function (props) {
  return props.error && props.theme.textInput.error.extend;
});
StyledTextInput.defaultProps = {};
Object.setPrototypeOf(StyledTextInput.defaultProps, defaultProps);
var StyledTextInputContainer = styled.div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "ilbntv-1"
})(["position:relative;width:100%;", " ", ";"], function (props) {
  return props.fill && "height: 100%;";
}, function (props) {
  return props.theme.textInput && props.theme.textInput.container && props.theme.textInput.container.extend;
});
StyledTextInputContainer.defaultProps = {};
Object.setPrototypeOf(StyledTextInputContainer.defaultProps, defaultProps);
var StyledPlaceholder = styled.div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "ilbntv-2"
})(["position:absolute;left:", "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;", ";"], function (props) {
  return parseMetricToNum(getInputPadBySide(props, 'left')) - parseMetricToNum(props.theme.global.control.border.width);
}, function (props) {
  return props.theme.textInput && props.theme.textInput.placeholder && props.theme.textInput.placeholder.extend;
});
StyledPlaceholder.defaultProps = {};
Object.setPrototypeOf(StyledPlaceholder.defaultProps, defaultProps);
var StyledIcon = styled.div.withConfig({
  displayName: "StyledTextInput__StyledIcon",
  componentId: "ilbntv-3"
})(["position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);", ""], function (props) {
  return props.reverse ? "right: " + getInputPadBySide(props, 'right') + ";" : "left: " + getInputPadBySide(props, 'left') + ";";
});
var StyledSuggestions = styled.ol.withConfig({
  displayName: "StyledTextInput__StyledSuggestions",
  componentId: "ilbntv-4"
})(["border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;", ";"], function (props) {
  return props.theme.textInput && props.theme.textInput.suggestions && props.theme.textInput.suggestions.extend;
});
StyledSuggestions.defaultProps = {};
Object.setPrototypeOf(StyledSuggestions.defaultProps, defaultProps);
export { StyledTextInput, StyledTextInputContainer, StyledPlaceholder, StyledIcon, StyledSuggestions };