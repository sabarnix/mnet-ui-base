import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Select } from 'mnet-ui-base';
var objectOptions = [{
  label: 'Male',
  value: 1
}, {
  label: 'Female',
  value: 2
}, {
  label: 'Non Binary',
  value: 3
}, {
  label: 'Other',
  value: 4
}];

var Example = function Example() {
  var _useState = useState(''),
      value = _useState[0],
      setValue = _useState[1];

  return React.createElement(React.Fragment, null, React.createElement(Box, {
    fill: true,
    align: "center",
    justify: "start",
    pad: "large"
  }, React.createElement(Select, {
    id: "select",
    name: "select",
    placeholder: "Select",
    labelKey: "label",
    valueKey: {
      key: 'value',
      reduce: true
    },
    value: value,
    options: objectOptions,
    onChange: function onChange(_ref) {
      var nextValue = _ref.value;
      return setValue(nextValue);
    }
  })));
};

storiesOf('Select', module).add('Object options', function () {
  return React.createElement(Example, null);
});