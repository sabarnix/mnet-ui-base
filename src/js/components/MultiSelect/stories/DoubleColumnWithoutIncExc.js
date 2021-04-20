import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MultiSelect } from 'mnet-ui-base';

const options = [
  { id: 1, label: '300x250' },
  { id: 2, label: '250x250' },
  { id: 3, label: '100x100' },
  { id: 4, label: '728x90' },
  { id: 5, label: '300x100' },
];

const Example = () => {
  const [value, setValue] = useState([]);

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
        withOptionChips
        renderEmptySelected={<span>Empty</span>}
      />
    </Box>
  );
};

storiesOf(
  'MultiSelect',
  module,
).add('Double Column without Inclusion / Exclusion', () => <Example />);
