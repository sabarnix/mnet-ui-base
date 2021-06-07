import styled from 'styled-components';

import { selectedStyle } from '../../utils';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

const disabledStyle = `
  opacity: 0.4;
  cursor: not-allowed;
  display: none;
  box-shadow: none
`;

const disabledButton = `
  box-shadow: none
`;

const CheckBoxWrapper = styled(Box)`
  ${props => props.theme.multiselect.checkbox.extend};
`;

const SelectedOption = styled(Box)`
  ${props => props.selected && disabledStyle}
`;

const OptionsBox = styled(Box)`
  position: relative;
  scroll-behavior: smooth;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 1.2em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E0E0E0;
    border: .4em solid #FFF;
    border-radius: 3.5px;
  }
`;

const SelectOption = styled(Button)`
  display: block;
  width: 100%;
  background: ${props =>
    props.active ? props.theme.select.activeColor : 'transparent'};
  ${props => props.disabled && disabledButton}
`;

const OptionBox = styled(Box)`
  ${props => props.selected && selectedStyle}
`;

const CheckBox = styled(Box)`
  ${props => props.theme.multiselect.checkbox.check};
`;

const OptionWrapper = styled(Box)`
  position: relative;
  scroll-behavior: smooth;
  overflow: auto;
  ${props => props.theme.multiselect.chips.wrapper.extend};
  &::-webkit-scrollbar {
    width: 1.2em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #E0E0E0;
    border: .4em solid #FFF;
    border-radius: 3.5px;
  }
`;

const OptionText = styled(Box)`
  ${props => props.theme.multiselect.chips.option.extend};
`;

const TextAreaWrapper = styled(Box)`
  ${props => props.theme.multiselect.custom.textAreaWrap.extend};
`;

const LabelText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export {
  CheckBoxWrapper,
  OptionsBox,
  SelectOption,
  OptionBox,
  CheckBox,
  OptionWrapper,
  OptionText,
  SelectedOption,
  TextAreaWrapper,
  LabelText,
};
