import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, CheckBoxGroup, Form, FormField, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var CheckBoxGroupForm = function CheckBoxGroupForm() {
  var _useState = useState(),
      value = _useState[0],
      setValue = _useState[1];

  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    pad: "medium",
    width: "medium"
  }, React.createElement(Form, {
    onSubmit: function onSubmit(_ref) {
      var values = _ref.value,
          touched = _ref.touched;
      return (// 'touched' is a single boolean value indication of
        // whether any of the checkboxes had changed.
        console.log('Submit', values, touched)
      );
    }
  }, React.createElement(FormField, {
    name: "controlled"
  }, React.createElement(CheckBoxGroup, {
    id: "check-box-group-id",
    name: "controlled",
    value: value,
    onChange: function onChange(_ref2) {
      var nextValue = _ref2.value;
      return setValue(nextValue);
    },
    options: ['Maui', 'Jerusalem', 'Wuhan']
  })), React.createElement(Button, {
    type: "submit",
    label: "Submit"
  }))));
};

storiesOf('CheckBoxGroup', module).add('Form controlled input', function () {
  return React.createElement(CheckBoxGroupForm, null);
});