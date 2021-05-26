import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';

import { defaultProps } from '../../default-props';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { Box } from '../Box';

const Searchbox = ({
  placeholder,
  value,
  onValueChange,
  width,
  layout,
  selectIcon,
  onCancel,
  reverse = true,
  shouldRenderInDrop,
}) => {
  const theme = useContext(ThemeContext) || defaultProps.theme;

  const handleChange = textValue => {
    if (textValue.replace(/\s/g, '').length || !textValue.length)
      return onValueChange(textValue);
    return null;
  };

  const CollapsibleIcon = selectIcon && selectIcon.up;

  const icons = (
      <Search {...theme.multiselect.searchbox.icon} />
  );
  const collapseBtn = !shouldRenderInDrop && selectIcon && (
    <Button 
      role="button" 
      margin="none" 
      onClick={onCancel} 
      plain
      style={{  position: 'relative', right: '15px'  }}
    >
      <CollapsibleIcon
        color="dark-1"
        size={selectIcon.size}
      />
    </Button>
  )

  return (
    <Box layout={layout} {...theme.multiselect.searchbox.container}>
      <TextInput
        role="search"
        aria-label="multiselect searchbox"
        plain
        fill
        icon={icons}
        reverse={reverse}
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
      {collapseBtn}
    </Box>
  );
};

export { Searchbox };
