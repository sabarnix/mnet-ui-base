import * as React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'storybook-chromatic/isChromatic';

import { MnetUIBase, Box, Menu, ThemeType } from 'mnet-ui-base';
import { Next } from 'grommet-icons';

const customBreakpoints: ThemeType = {
  global: {
    breakpoints: {
      small: {
        value: 600,
        edgeSize: {
          small: '1px',
        },
        borderSize: {
          small: '2px',
        },
        size: {
          xxsmall: '24px',
        },
      },
      medium: {
        value: 900,
        borderSize: {
          small: '2px',
        },
        edgeSize: {
          small: '1px',
        },
        size: {
          xxsmall: '24px',
        },
      },
      large: {
        value: 3000,
        borderSize: {
          small: '2px',
        },
        edgeSize: {
          small: '1px',
        },
        size: {
          xxsmall: '24px',
        },
      },
      xlarge: {
        value: 3000,
        borderSize: {
          small: '2px',
        },
        edgeSize: {
          small: '1px',
        },
        size: {
          xxsmall: '24px',
        },
      },
    },
  },
};
const App = () => {
  return (
    <MnetUIBase theme={customBreakpoints}>
      <Box align="center" pad="large">
        <Menu
          dropProps={{ align: { top: 'bottom', left: 'left' } }}
          label="actions"
          icon={<Next />}
          items={[
            { label: 'Launch', onClick: () => {} },
            { label: 'Abort', onClick: () => {} },
            { label: 'Disabled', disabled: true },
          ]}
        />
      </Box>
    </MnetUIBase>
  );
};

if (!isChromatic()) {
  storiesOf('TypeScript/Menu', module).add('Themed', () => <App />);
}
