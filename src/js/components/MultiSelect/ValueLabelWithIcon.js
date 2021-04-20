import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
// import { Text } from '../Text';
import { LabelText } from './StyledMultiSelect';

const ValueLabelWithIcon = ({
  withInclusionExclusion,
  isExcluded,
  value = [],
  size,
  placeholder = 'Select',
}) => {
  let valueProp = value;
  valueProp = Array.isArray(valueProp) ? valueProp : [valueProp];
  const number = valueProp.length;
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const { include, exclude} = theme.multiselect.icons;
  const { icon: IncIcon, extend: incExtend } = include;
  const { icon: ExcIcon, extend: excExtend } = exclude;
  
  const getColor = () => {
    if (withInclusionExclusion && isExcluded) return 'status-error';
    if (withInclusionExclusion && isExcluded === false) return 'status-ok';
    return 'dark-1';
  };

  return (
    <Box
      direction="row"
      align="center"
      pad={{ left: 'large', vertical: 'small' }}
    >
      {withInclusionExclusion && isExcluded && (
        <Box
          width={{ min: '20px' }}
          alignSelf="start"
          pad={{ vertical: 'small' }}
        >
          <ExcIcon {...excExtend} />
        </Box>
      )}
      {withInclusionExclusion && isExcluded === false && (
        <Box
          width={{ min: '20px' }}
          alignSelf="start"
          pad={{ vertical: 'small' }}
        >
          <IncIcon {...incExtend} />
        </Box>
      )}

      <LabelText
        aria-label="Selected Label Value"
        color={getColor()}
        size={size}
      >
        {number ? valueProp.join(', ') : placeholder}
      </LabelText>
    </Box>
  );
};

export { ValueLabelWithIcon };
