import React from 'react';
import { CircleInformation } from 'grommet-icons/icons/CircleInformation';
import { Alert } from 'grommet-icons/icons/Alert';

import { Box } from '../Box';
import { Text } from '../Text';
import { LabelText } from './StyledMultiSelect';

const ValueLabelWithIcon = ({
  withInclusionExclusion,
  isExcluded,
  value,
  size,
}) => {
  const number = value.length;

  const getColor = () => {
    if (withInclusionExclusion && isExcluded) return 'status-error';
    if (withInclusionExclusion && isExcluded === false) return 'status-ok';
    return 'dark-1';
  };

  return (
    <Box direction="row" align="center">
      {withInclusionExclusion && isExcluded && (
        <Box
          width={{ min: '20px' }}
          alignSelf="start"
          pad={{ vertical: 'small' }}
        >
          <CircleInformation color="status-error" size="small" />
        </Box>
      )}
      {withInclusionExclusion && isExcluded === false && (
        <Box
          width={{ min: '20px' }}
          alignSelf="start"
          pad={{ vertical: 'small' }}
        >
          <Alert color="status-ok" size="small" />
        </Box>
      )}

      <LabelText
        aria-label="Selected Label Value"
        color={getColor()}
        size={size}
      >
        {number ? value.join(', ') : 'Select'}
      </LabelText>
    </Box>
  );
};

export { ValueLabelWithIcon };
