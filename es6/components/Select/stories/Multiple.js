import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, MnetUIBase, Select } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
var options = ['one', 'two'];

var Example = function Example() {
  var _useState = useState(['one']),
      value = _useState[0],
      setValue = _useState[1];

  return React.createElement(MnetUIBase, {
    full: true,
    theme: mnet
  }, React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Select, {
    placeholder: "Select",
    multiple: true,
    closeOnChange: false,
    value: value,
    options: options,
    onChange: function onChange(_ref) {
      var nextValue = _ref.value;
      return setValue(nextValue);
    }
  })));
};

storiesOf('Select', module).add('Multiple', function () {
  return React.createElement(Example, null);
});