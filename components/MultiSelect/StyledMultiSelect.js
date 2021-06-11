"use strict";

exports.__esModule = true;
exports.SearchWrapper = exports.OptionLabel = exports.OptionText = exports.OptionWrapper = exports.CheckBox = exports.OptionBox = exports.SelectOption = exports.OptionsBox = exports.CheckBoxWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../utils");

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckBoxWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
exports.CheckBoxWrapper = CheckBoxWrapper;

var OptionsBox = _styledComponents["default"].div.withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-1"
})(["position:relative;scroll-behavior:smooth;overflow:auto;"]);

exports.OptionsBox = OptionsBox;
var SelectOption = (0, _styledComponents["default"])(_Button.Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-2"
})(["display:block;width:100%;background:", ";"], function (props) {
  return props.active ? props.theme.select.activeColor : 'transparent';
});
exports.SelectOption = SelectOption;
var OptionBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-3"
})(["", ""], function (props) {
  return props.selected && _utils.selectedStyle;
});
exports.OptionBox = OptionBox;
var CheckBox = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__CheckBox",
  componentId: "sc-1yaxkjp-4"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.check && props.theme.multiselect.checkbox.check.extend;
});
exports.CheckBox = CheckBox;
var OptionWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionWrapper",
  componentId: "sc-1yaxkjp-5"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.wrapper.extend;
});
exports.OptionWrapper = OptionWrapper;
var OptionText = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__OptionText",
  componentId: "sc-1yaxkjp-6"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.option.extend;
});
exports.OptionText = OptionText;
var OptionLabel = (0, _styledComponents["default"])(_Text.Text).withConfig({
  displayName: "StyledMultiSelect__OptionLabel",
  componentId: "sc-1yaxkjp-7"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.label.extend;
});
exports.OptionLabel = OptionLabel;
var SearchWrapper = (0, _styledComponents["default"])(_Box.Box).withConfig({
  displayName: "StyledMultiSelect__SearchWrapper",
  componentId: "sc-1yaxkjp-8"
})(["", ";"], function (props) {
  return props.theme.multiselect.searchbox.container.extend;
});
exports.SearchWrapper = SearchWrapper;