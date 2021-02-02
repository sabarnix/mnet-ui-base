import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';

import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Box } from '../Box';
import { IconWrapper } from './StyledMultiSelect';

const Searchbox = ({
  placeholder,
  value,
  onValueChange,
  width,
  layout,
  selectIcon,
  onCancel,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const handleChange = textValue => {
    if (textValue.replace(/\s/g, '').length || !textValue.length)
      return onValueChange(textValue);
    return null;
  };

  const CollapsibleIcon = selectIcon && selectIcon.up;

  const icons = (
    <IconWrapper {...theme.multiselect.searchbox.iconWrapper}>
      <Search {...theme.multiselect.searchbox.icon} />
      {selectIcon && (
        <Button role="button" onClick={onCancel} plain>
          <CollapsibleIcon
            // margin={{ left: 'large', right: 'small' }}
            color="dark-1"
            size={selectIcon.size}
          />
        </Button>
      )}
    </IconWrapper>
  );

  return (
    <Box layout={layout} {...theme.multiselect.searchbox.container}>
      <Box {...theme.multiselect.searchbox.textWrapper}>
      <TextInput
        role="search"
        aria-label="multiselect searchbox"
        plain
        icon={icons}
        reverse
        width={width}
        value={value}
        valueLabel={<Text>value</Text>}
        onChange={event => handleChange(event.target.value)}
        placeholder={
          <Text {...theme.multiselect.searchbox.placeholder}>
            {value ? '' : placeholder}
          </Text>
        }
      />
      </Box>
      
    </Box>
  );
};

export { Searchbox };
