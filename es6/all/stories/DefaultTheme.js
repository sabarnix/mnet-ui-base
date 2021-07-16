import React from 'react';
import { storiesOf } from '@storybook/react';
import { base } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
import { Box, extendDefaultTheme } from 'mnet-ui-base';
extendDefaultTheme(deepMerge(base, {
  global: {
    colors: {
      brand: 'red'
    }
  }
}));

var CustomDefaultProps = function CustomDefaultProps() {
  return /*#__PURE__*/React.createElement(Box, {
    background: "brand",
    pad: "small"
  }, "Hello");
};

storiesOf('Theme', module).add('Extend Default', function () {
  return /*#__PURE__*/React.createElement(CustomDefaultProps, null);
});