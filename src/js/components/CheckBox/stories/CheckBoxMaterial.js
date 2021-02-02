import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, MnetUIBase, CheckBox, Text } from 'mnet-ui-base';
import { hb } from 'mnet-ui-base-theme-hb';

const CheckBoxMaterial = props => {
  const [checked, setChecked] = useState(true);

  return (
    <MnetUIBase theme={hb}>
      <Box align="center" pad="large">
        <CheckBox
          {...props}
          label={<Text color="dark-1" size="large">Interested ?</Text>}
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
        />
      </Box>
    </MnetUIBase>
  );
};

storiesOf('CheckBox', module).add('CheckBoxMaterial', () => (
  <CheckBoxMaterial />
));
