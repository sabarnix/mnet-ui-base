import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { Add } from 'grommet-icons/icons/Add';
import { FormSubtract } from 'grommet-icons/icons/FormSubtract';
import { TextArea } from '../TextArea';

import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { FormField } from '../FormField';
import CustomSelectedList from './CustomSelectedList';
import { TextAreaWrapper } from './StyledMultiSelect';

const CustomMultiSelect = ({
  value,
  layout,
  onValueChange,
  renderSearch,
  placeholder,
  renderEmptySelected,
  width,
  height,
  custom,
  isExcluded,
  setIncExcVal,
  inclusionExclusion,
  validate,
  onCancel,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);
  const [errorMsg, setErrorMsg] = React.useState('');

  const setTextAreaValueFn = value => {
    setIsValid(true);
    setTextAreaValue(value);
  };

  const setItems = isIncExc => {
    const trimedValue = textAreaValue.trim();
    if (trimedValue && trimedValue.length) {
      const textValues = trimedValue.split('\n');
      const filteredValues = textValues.filter(text => text.length);
      const { isValid: isValueValid, errMsg } = validate(filteredValues, value);
      if (validate && isValueValid) {
        setIncExcVal(isIncExc);
        onValueChange([...value, ...filteredValues]);
        setTextAreaValue('');
      } else {
        setErrorMsg(errMsg);
        setIsValid(false);
      }
    }
  };

  const removeItem = useCallback(
    item => {
      const lists = [...value];
      const index = lists.indexOf(item);
      lists.splice(index, 1);
      onValueChange([...lists]);
      if (!lists.length) setIncExcVal(null);
    },
    [value, onValueChange, setIncExcVal],
  );

  const clearAll = () => {
    setIncExcVal(null);
    onValueChange([]);
  };

  return (
    <Box {...theme.multiselect.custom.wrapper} height={height} width={width}>
      <Box
        width="50%"
        border={{
          side: 'right',
          color: 'light-3',
        }}
      >
        <TextAreaWrapper {...theme.multiselect.custom.textAreaWrap}>
          <FormField error={!isValid ? errorMsg : null}>
            <Box width="full" pad="medium">
              <TextArea
                placeholder={(custom && custom.label) || 'Label'}
                value={textAreaValue}
                onChange={event => setTextAreaValueFn(event.target.value)}
                resize={false}
                focusIndicator={false}
                fill
                plain
              />
            </Box>
          </FormField>
        </TextAreaWrapper>
        <Box {...theme.multiselect.custom.actions.wrapper}>
          {(isExcluded === false || isExcluded === null) && (
            <Button
              {...theme.multiselect.includeBtn}
              onClick={() => setItems(false)}
            >
              <Box align="center" justify="center" direction="row">
                <Add
                  {...theme.multiselect.checkbox.checkmark}
                  color={theme.multiselect.includeBtn.color}
                  size="small"
                />
                <Text weight={600} margin={{ left: 'small' }}>
                  INCLUDE
                </Text>
              </Box>
            </Button>
          )}
          {isExcluded === null && (
            <Box background="light-3" width="1px" height="100%" />
          )}
          {(isExcluded || isExcluded === null) && (
            <Button
              {...theme.multiselect.excludeBtn}
              onClick={() => setItems(true)}
            >
              <Box align="center" justify="center" direction="row">
                <FormSubtract
                  {...theme.multiselect.checkbox.checkmark}
                  color={theme.multiselect.excludeBtn.color}
                  size="small"
                />
                <Text weight={600} margin={{ left: 'small' }}>
                  EXCLUDE
                </Text>
              </Box>
            </Button>
          )}
        </Box>
      </Box>
      <Box width="50%">
        <CustomSelectedList
          layout={layout}
          selectedItems={value}
          isExcluded={isExcluded}
          renderSearch={renderSearch}
          searchPlaceholder={placeholder}
          onRemove={removeItem}
          clearAll={clearAll}
          renderEmptySelected={renderEmptySelected}
          width={width}
          height={height}
          inclusionExclusion={inclusionExclusion}
          onCancel={onCancel}
        />
      </Box>
    </Box>
  );
};

export { CustomMultiSelect };
