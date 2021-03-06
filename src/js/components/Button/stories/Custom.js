import React from 'react';
import { storiesOf } from '@storybook/react';

import { mnet, Box, Button, MnetUIBase, Heading } from 'mnet-ui-base';

const newCustomTheme = {
  global: {
    colors: {
      brand: '#ee9933',
      'brand-contrast': '#ee993333',
      active: '#eecc33',
    },
    font: { family: 'Arial' },
  },
  button: {
    default: {
      color: 'text',
      border: undefined,
      padding: {
        horizontal: '12px',
        vertical: '8px',
      },
    },
    primary: {
      background: { color: 'brand' },
      border: undefined,
      color: 'text-strong',
      font: { weight: 'bold' },
      padding: {
        horizontal: '12px',
        vertical: '8px',
      },
    },
    secondary: {
      border: { color: 'brand', width: '4px' },
      color: 'text',
      padding: {
        horizontal: '8px',
        vertical: '4px',
      },
    },
    active: {
      background: { color: 'brand-contrast' },
      color: 'text',
      secondary: {
        background: 'none',
        border: {
          color: 'brand-contrast',
        },
      },
    },
    disabled: {
      opacity: 0.3,
      secondary: {
        border: { color: 'text-weak' },
      },
    },
    hover: {
      background: { color: 'active' },
      secondary: {
        border: { color: 'active' },
      },
    },
  },
};

const customTheme = {
  global: {
    font: {
      family: 'Arial',
    },
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3',
    },
    disabled: {
      color: 'orange',
      border: {
        color: 'orange',
      },
      extend: `border: 10px dashed red;`,
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    primary: {
      color: '#2196f3',
      active: {
        border: {
          color: 'red',
        },
        extend: `background: cadetblue;`,
      },
      extend: `background: skyblue; border: 5px dotted green;`,
    },
    extend: props => {
      let extraStyles = '';
      if (props.primary) {
        extraStyles = `
            text-transform: uppercase;
          `;
      }
      return `
          font-size: 12px;
          font-weight: bold;
          ${extraStyles}
        `;
    },
  },
};

const coloredButton = {
  button: {
    border: {
      color: 'accent-1',
    },
    color: { dark: 'accent-1', light: 'dark-2' },
    primary: {
      color: 'neutral-2',
    },
  },
};

const CustomTheme = () => (
  <>
    <MnetUIBase theme={newCustomTheme}>
      <Box gap="small" pad="large">
        <Heading level={2} size="small">
          new custom theme
        </Heading>
        <Box align="center" direction="row" gap="small">
          <Button label="default" onClick={() => {}} />
          <Button label="active default" onClick={() => {}} active />
          <Button label="disabled default" onClick={() => {}} disabled />
        </Box>
        <Box align="center" direction="row" gap="small">
          <Button label="primary" onClick={() => {}} primary />
          <Button label="active primary" onClick={() => {}} primary active />
          <Button
            label="disabled primary"
            onClick={() => {}}
            primary
            disabled
          />
        </Box>
        <Box align="center" direction="row" gap="small">
          <Button label="secondary" onClick={() => {}} secondary />
          <Button
            label="active secondary"
            onClick={() => {}}
            secondary
            active
          />
          <Button
            label="disabled secondary"
            onClick={() => {}}
            secondary
            disabled
          />
        </Box>
      </Box>
    </MnetUIBase>
    <MnetUIBase theme={customTheme}>
      <Box
        align="center"
        justify="center"
        pad="large"
        direction="row"
        gap="small"
      >
        <Button label="custom theme" onClick={() => {}} primary />
        <Button
          label="custom active primary"
          onClick={() => {}}
          primary
          active
        />
        <Button label="primary disabled" onClick={() => {}} primary disabled />
        <Button label="Disabled" onClick={() => {}} disabled />
        <Button label="Plain Disabled" onClick={() => {}} plain disabled />
      </Box>
    </MnetUIBase>
    <MnetUIBase theme={coloredButton}>
      <Box align="center" pad="large">
        <Button as="span" label="theme on dark background" primary />
      </Box>
    </MnetUIBase>
    <MnetUIBase theme={mnet}>
      <Box align="center" pad="large">
        <Button as="span" label="Custom as=span" />
      </Box>
    </MnetUIBase>
  </>
);

storiesOf('Button', module).add('Custom', () => <CustomTheme />);
