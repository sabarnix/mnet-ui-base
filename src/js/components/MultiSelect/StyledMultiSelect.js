import styled from 'styled-components';

import { selectedStyle } from '../../utils';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

const disabledStyle = `
  opacity: 0.4;
  cursor: not-allowed;
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
`;

const SelectOption = styled(Button)`
  display: block;
  width: 100%;
  background: ${props =>
    props.active ? props.theme.select.activeColor : 'transparent'};
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
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const IconWrapper = styled(Box)`
    align-items: center;
    flex-direction: row;
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
  IconWrapper,
};
