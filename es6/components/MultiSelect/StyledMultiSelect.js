import styled from 'styled-components';
import { selectedStyle } from '../../utils';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
var CheckBoxWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBoxWrapper",
  componentId: "sc-1yaxkjp-0"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.extend;
});
var OptionsBox = styled.div.withConfig({
  displayName: "StyledMultiSelect__OptionsBox",
  componentId: "sc-1yaxkjp-1"
})(["position:relative;scroll-behavior:smooth;overflow:auto;"]);
var SelectOption = styled(Button).withConfig({
  displayName: "StyledMultiSelect__SelectOption",
  componentId: "sc-1yaxkjp-2"
})(["display:block;width:100%;background:", ";"], function (props) {
  return props.active ? props.theme.select.activeColor : 'transparent';
});
var OptionBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionBox",
  componentId: "sc-1yaxkjp-3"
})(["", ""], function (props) {
  return props.selected && selectedStyle;
});
var CheckBox = styled(Box).withConfig({
  displayName: "StyledMultiSelect__CheckBox",
  componentId: "sc-1yaxkjp-4"
})(["", ";"], function (props) {
  return props.theme.multiselect.checkbox.check && props.theme.multiselect.checkbox.check.extend;
});
var OptionWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionWrapper",
  componentId: "sc-1yaxkjp-5"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.wrapper.extend;
});
var OptionText = styled(Box).withConfig({
  displayName: "StyledMultiSelect__OptionText",
  componentId: "sc-1yaxkjp-6"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.option.extend;
});
var OptionLabel = styled(Text).withConfig({
  displayName: "StyledMultiSelect__OptionLabel",
  componentId: "sc-1yaxkjp-7"
})(["", ";"], function (props) {
  return props.theme.multiselect.chips.label.extend;
});
var SearchWrapper = styled(Box).withConfig({
  displayName: "StyledMultiSelect__SearchWrapper",
  componentId: "sc-1yaxkjp-8"
})(["", ";"], function (props) {
  return props.theme.multiselect.searchbox.container.extend;
});
export { CheckBoxWrapper, OptionsBox, SelectOption, OptionBox, CheckBox, OptionWrapper, OptionText, OptionLabel, SearchWrapper };