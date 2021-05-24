import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';

import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { OptionWrapper, OptionText } from './StyledMultiSelect';

const OptionChips = ({
  options,
  value,
  isSelected,
  optionLabel,
  onRemove,
  clearAll,
  width,
  height,
  inclusionExclusion,
  isExcluded,
  renderEmptySelected,
  layout,
  showCount,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const renderClearButton = () => (
    <Button
      role="button"
      a11yTitle="Clear all selected options"
      focusIndicator={false}
      onClick={() => clearAll([])}
      plain
    >
      <Box
        border={theme.multiselect.chips.clear.border}
        height={theme.multiselect.chips.clear.height}
      >
        <Text {...theme.multiselect.chips.clear}>CLEAR ALL</Text>
      </Box>
    </Button>
  );

  const getSelectedOption = () =>
    options.reduce((acc, item, index) => {
      if (isSelected(index)) acc.push(index);
      return acc;
    }, []);

  return (
    <Box height={height}>
      {Array.isArray(value) && value.length > 0 && (
        <Box>
          {inclusionExclusion && isExcluded !== null && (
            <Box {...theme.multiselect.rightPanel.incExcHeader.box}>
              <Box direction="row">
                <Text
                  aria-label="Chip List header"
                  {...theme.multiselect.rightPanel.incExcHeader.text}
                >
                  {isExcluded ? 'Excluded' : 'Included'}
                </Text>
                <Box {...theme.multiselect.rightPanel.incExcHeader.count}>
                  <Text weight="600">{value.length}</Text>
                </Box>
              </Box>
            </Box>
          )}
          {!inclusionExclusion && layout === 'double-column' && (
            <Box {...theme.multiselect.rightPanel.incExcHeader.box}>
              <Box direction="row">
                <Text {...theme.multiselect.rightPanel.incExcHeader.text}>
                  Selected
                </Text>
                {!showCount && 
                  <Box {...theme.multiselect.rightPanel.incExcHeader.count}>
                  <Text weight="600">{value.length}</Text>
                  </Box>
                }
              </Box>
            </Box>
          )}
          <OptionWrapper
            twoColumnLayout={layout === 'double-column'}
            width={width}
            height={height}
            {...theme.multiselect.chips.wrapper}
            wrap
          >
            <Box width="100%">
              {getSelectedOption().map(item => (
                <OptionText
                  key={item}
                  twoColumnLayout={layout === 'double-column'}
                  {...theme.multiselect.chips.option}
                >
                  <Text
                    isExcluded={isExcluded}
                    {...theme.multiselect.chips.label}
                  >
                    {optionLabel(item)}
                  </Text>
                  <Close
                    role="button"
                    aria-label={`Remove selected chip ${optionLabel(item)}`}
                    style={{ cursor: 'pointer' }}
                    onClick={event => onRemove(event, item)}
                    {...theme.multiselect.chips.icon}
                  />
                </OptionText>
              ))}
            </Box>
          </OptionWrapper>
          {(!inclusionExclusion ||
            (inclusionExclusion && isExcluded !== null)) &&
            renderClearButton()}
        </Box>
      )}

      {(!Array.isArray(value) || !value.length) && (
        <Box justify="center" align="center" height={height}>
          {renderEmptySelected}
        </Box>
      )}
    </Box>
  );
};

export { OptionChips };
