import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, TextInput } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Example = function Example() {
  return React.createElement(MnetUIBase, {
    full: true,
    theme: mnet
  }, React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Box, {
    width: "medium"
  }, React.createElement(TextInput, {
    onChange: function onChange(event) {
      return console.log('Change', event.target.value);
    }
  }))));
};

storiesOf('TextInput', module).add('Uncontrolled', function () {
  return React.createElement(Example, null);
});