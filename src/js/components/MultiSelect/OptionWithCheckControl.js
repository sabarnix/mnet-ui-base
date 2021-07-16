import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { FormSubtract } from 'grommet-icons/icons/FormSubtract';
import { FormClose } from 'grommet-icons/icons/FormClose';
import { Add } from 'grommet-icons/icons/Add';

import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';
import { normalizeColor } from '../../utils/colors';

import { CheckBoxWrapper, CheckBox, SelectedOption } from './StyledMultiSelect';

const OptionWithCheckControl = ({
  selected,
  label,
  inclusionExclusion,
  isExcluded,
  onSelect,
  removeSelected,
  reverse,
  // active,
  index,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const selectOptionsStyle = {
    ...theme.select.options.box,
    ...theme.select.options.container,
  };

  const {
    include = {},
    exclude = {},
    showUnSelected = true,
  } = theme.multiselect.checkbox;

  const {
    background: incBackground = 'white',
    color: incColor = 'black',
    check: incCheck = 'add',
  } = include;

  const {
    background: excBackground = 'white',
    color: excColor = 'black',
    check: excCheck = 'subtract',
  } = exclude;

  const getIcon = check => {
    switch (check) {
      case 'check':
        return <FormCheckmark {...theme.multiselect.checkbox.checkmark} />;
      case 'close':
        return <FormClose {...theme.multiselect.checkbox.checkmark} />
      case 'add':
        return <Add
          {...theme.multiselect.checkbox.checkmark}
          color={
            inclusionExclusion
              ? theme.multiselect.includeBtn.color
              : 'brand'
          }
          size="small"
        />
      case 'subtract':
        return <FormSubtract
          {...theme.multiselect.checkbox.checkmark}
          color={theme.multiselect.excludeBtn.color}
          size="small"
        />
      default:
        return null;
    }
  }

  const getBackground = exc => {
    if (!selected && !showUnSelected && isExcluded !== null) return 'white';
    return (exc ? 
      normalizeColor(excBackground, theme): 
      normalizeColor(incBackground, theme)) || 'white';
  } 

  const renderCheckbox = (check, exc) => {
    
    return (
      <CheckBoxWrapper {...theme.multiselect.checkbox.box}>
        <CheckBox
          role="checkbox"
          aria-label={`${exc ? check : 'select'} checkbox for ${label}`}
          className={`option-checkbox-${
            selected || (inclusionExclusion && isExcluded === null)
              ? 'active'
              : 'inactive'
          }`}
          {...theme.multiselect.checkbox.check}
          color={(!exc ? incColor : excColor) || 'black'}
          active={selected || (inclusionExclusion && isExcluded === null)}
          isExcluded={exc}
          onClick={
            inclusionExclusion && isExcluded === null
              ? event => onSelect(event, exc, index)
              : undefined
          }
          background={getBackground(exc)}
        >
          {(selected ||
            showUnSelected ||
            (inclusionExclusion && isExcluded === null)) && (
              getIcon(check)
          )}
        </CheckBox>
      </CheckBoxWrapper>
    );
  };
  
  const optionLabel = [
    <Box>
          <Text
            role="option"
            aria-label="multiselect option value"
            {...theme.select.options.text}
          >
            {label}
          </Text>
    </Box>,
        <>
        {!inclusionExclusion && 
          <Box>{renderCheckbox(!selected ? incCheck : excCheck, null)}</Box>
        }
        {inclusionExclusion && (isExcluded === null || isExcluded !== null) && (
          <Box direction="row">
            {
              [null, false].includes(isExcluded) && 
                renderCheckbox(incCheck, false)
            }
            {[null, true].includes(isExcluded) &&
              renderCheckbox(excCheck, true)}
          </Box>
        )}
        </>,
  ];
  if (reverse) {
    optionLabel.reverse();
  }

  return (
    <SelectedOption
      {...selectOptionsStyle}
      selected={selected}
      removeSelected={removeSelected}
    >
      <Box {...theme.multiselect.option}>
        {optionLabel}
      </Box> 
    </SelectedOption>
  );
};

export { OptionWithCheckControl };
