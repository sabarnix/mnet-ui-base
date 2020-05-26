import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Button, CheckBox, Text } from 'mnet-ui-base';

var CheckBoxInsideButton = function CheckBoxInsideButton() {
  var _useState = useState(false),
      checked = _useState[0],
      setChecked = _useState[1];

  var onButtonClick = function onButtonClick() {
    return setChecked(!checked);
  };

  var onCheckboxChange = function onCheckboxChange() {};

  return React.createElement(React.Fragment, null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Button, {
    hoverIndicator: "background",
    onClick: onButtonClick
  }, React.createElement(CheckBox, {
    tabIndex: "-1",
    checked: checked,
    label: React.createElement(Text, null, "Hi"),
    onChange: onCheckboxChange
  }))));
};

storiesOf('CheckBox', module).add('Inside a Button', function () {
  return React.createElement(CheckBoxInsideButton, null);
});