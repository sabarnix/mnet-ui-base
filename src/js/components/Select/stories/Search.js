import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Select } from 'mnet-ui-base';

const defaultOptions = [];
for (let i = 1; i <= 200; i += 1) {
  defaultOptions.push(`option ${i}`);
}

const SearchSelect = () => {
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'auto' }}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          size="medium"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          onClose={() => setOptions(defaultOptions)}
          onSearch={text => {
            // The line below escapes regular expression special characters:
            // [ \ ^ $ . | ? * + ( )
            const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');

            // Create the regular expression with modified value which
            // handles escaping special characters. Without escaping special
            // characters, errors will appear in the console
            const exp = new RegExp(escapedText, 'i');
            setOptions(defaultOptions.filter(o => exp.test(o)));
          }}
        />
      </Box>
    </div>
  );
};

storiesOf('Select', module).add('Search', () => <SearchSelect />);
