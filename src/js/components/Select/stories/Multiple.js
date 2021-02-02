import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';

const options = ['one', 'two', 'Three', 'Four', 'Five', 'Eighteen'];

const Example = () => {
  const [value, setValue] = useState(['one']);

  return (
    <MnetUIBase full theme={hb}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          placeholder="Select"
          multiple
          closeOnChange={false}
          value={value}
          options={options}
          messages={{
            multiple: value.join(', '),
          }}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </MnetUIBase>
  );
};

storiesOf('Select', module).add('Multiple', () => <Example />);
