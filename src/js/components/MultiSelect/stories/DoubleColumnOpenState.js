import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MultiSelect, Text } from 'mnet-ui-base';

const options = [
  { id: 1, label: 'Desktop' },
  { id: 2, label: 'Mobile' },
  { id: 3, label: 'Tablet' },
  { id: 4, label: 'Television' },
  { id: 5, label: 'Bot' },
];

const Example = () => {
  const [value, setValue] = useState(['Mobile', 'Tablet']);
  const [isExcluded, setIncExc] = useState(false);

  return (
    <Box fill align="center" justify="start" pad="large">
      <MultiSelect
        options={options}
        value={value}
        labelKey="label"
        valueKey={{ key: 'label', reduce: true }}
        onValueChange={nextValue => setValue(nextValue)}
        layout="double-column"
        width="large"
        height="medium"
        searchPlaceholder="Search"
        searchable
        withSelectAll
        withOptionChips
        withInclusionExclusion
        isExcluded={isExcluded}
        onIncExcChange={nextIncExc => setIncExc(nextIncExc)}
        renderEmptySelected={<Text>No Selection</Text>}
        isEnableOutSideClick
        shouldRenderInDrop
        isOpenState
      />
    </Box>
  );
};

storiesOf('MultiSelect', module).add('Double Column Open State', () => <Example />);
