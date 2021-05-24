import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
import { defaultProps } from '../../default-props';
import { LabelText } from './StyledMultiSelect';

const ValueLabelWithIcon = ({
  withInclusionExclusion,
  isExcluded,
  value = [],
  size,
  showCount,
  rowCount,
  placeholder = 'Select',
}) => {
  let valueProp = value;
  valueProp = Array.isArray(valueProp) ? valueProp : [valueProp];
  const number = valueProp.length;
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const { include, exclude } = theme.multiselect.icons;
  const { searchbox: { placeholder: placeholderProp = {} } = {}, labelWrap = {} } = theme.multiselect;
  const { icon: IncIcon, extend: incExtend } = include;
  const { icon: ExcIcon, extend: excExtend } = exclude;
  const { label = {} } = theme.multiselect.controls
  const labelProps = label[isExcluded ? 'exclude' : 'include'] || {};

  const getColor = () => {
    if (withInclusionExclusion && isExcluded) return 'status-error';
    if (withInclusionExclusion && isExcluded === false) return 'status-ok';
    return 'dark-1';
  };

  return (
    <Box
      direction="row"
      align="center"
      pad={{ left: 'large'}}
      {...labelWrap}
    >
      {withInclusionExclusion && isExcluded && ExcIcon && (
        <Box
          width={{ min: '20px' }}
          alignSelf="start"
          pad={{ vertical: 'small' }}
        >
          <ExcIcon {...excExtend} />
        </Box>
      )}
      {withInclusionExclusion && isExcluded === false && IncIcon && (
        <Box
          width={{ min: '20px' }}
          alignSelf="start"
          pad={{ vertical: 'small' }}
        >
          <IncIcon {...incExtend} />
        </Box>
      )}
      {showCount && (
        valueProp.length ?
        <Box direction="row" align="center">
          <LabelText 
            aria-label="Selected Label Value"
            size={size}
            weight="bold"
          > {isExcluded ? "Excluded" : "Included"}
          </LabelText>
            <Box
              background="brand"
              margin={{ horizontal: "medium" }}
              pad={{ horizontal: "small", vertical: 'xsmall' }}
              round="xsmall"
            >
               {valueProp.length}
            </Box>
        </Box>
          :
          <LabelText
            aria-label="Selected Label Value"
            color={getColor()}
            size={size}
            rowCount={rowCount}
            {...labelProps}
          >
            <Text {...placeholderProp}>{placeholder}</Text>
          </LabelText>
      )}
      {!showCount && (
        <LabelText
          aria-label="Selected Label Value"
          color={getColor()}
          size={size}
          rowCount={rowCount}
          {...labelProps}
        >
        {number ? valueProp.join(', ') :
          <Text {...placeholderProp}>{placeholder}</Text>
        }
        </LabelText>)
}
    </Box>
  );
};

export { ValueLabelWithIcon };
