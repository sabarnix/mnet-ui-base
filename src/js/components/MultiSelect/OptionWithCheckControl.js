import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { FormSubtract } from 'grommet-icons/icons/FormSubtract';
import { Add } from 'grommet-icons/icons/Add';

import { Box } from '../Box';
import { Text } from '../Text';

import { CheckBoxWrapper, CheckBox, SelectedOption } from './StyledMultiSelect';

const OptionWithCheckControl = ({
  selected,
  label,
  inclusionExclusion,
  isExcluded,
  onSelect,
  active,
  index,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const selectOptionsStyle = {
    ...theme.select.options.box,
    ...theme.select.options.container,
  };

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
          active={selected || (inclusionExclusion && isExcluded === null)}
          isExcluded={exc}
          onClick={
            inclusionExclusion && isExcluded === null
              ? event => onSelect(event, exc, index)
              : undefined
          }
        >
          {(selected ||
            !selected ||
            (inclusionExclusion && isExcluded === null)) && (
            <>
              {check === 'check' && (
                <FormCheckmark {...theme.multiselect.checkbox.checkmark} />
              )}
              {check === 'add' && (
                <Add
                  {...theme.multiselect.checkbox.checkmark}
                  color={
                    inclusionExclusion
                      ? theme.multiselect.includeBtn.color
                      : 'brand'
                  }
                  size="small"
                />
              )}
              {check === 'subtract' && (
                <FormSubtract
                  {...theme.multiselect.checkbox.checkmark}
                  color={theme.multiselect.excludeBtn.color}
                  size="small"
                />
              )}
            </>
          )}
        </CheckBox>
      </CheckBoxWrapper>
    );
  };

  return (
    <SelectedOption {...selectOptionsStyle} selected={selected}>
      <Box {...theme.multiselect.option}>
        <Box>
          <Text
            role="option"
            aria-label="multiselect option value"
            {...theme.select.options.text}
          >
            {label}
          </Text>
        </Box>
        {!inclusionExclusion && <Box>{renderCheckbox('add', null)}</Box>}
        {inclusionExclusion && (isExcluded === null || isExcluded !== null) && (
          <Box direction="row">
            {[null, false].includes(isExcluded) && renderCheckbox('add', false)}
            {[null, true].includes(isExcluded) &&
              renderCheckbox('subtract', true)}
          </Box>
        )}
      </Box>
    </SelectedOption>
  );
};

export { OptionWithCheckControl };
