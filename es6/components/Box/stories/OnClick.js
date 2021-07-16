import React from 'react';
import { storiesOf } from '@storybook/react';
import { Attraction } from "grommet-icons/es6/icons/Attraction";
import { Box, Text } from 'mnet-ui-base';

var OnClickBox = function OnClickBox() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Box, {
    justify: "center",
    align: "center",
    pad: "large"
  }, /*#__PURE__*/React.createElement(Box, {
    border: true,
    pad: "large",
    align: "center",
    round: true,
    gap: "small",
    hoverIndicator: true,
    onClick: function onClick() {
      alert('clicked');
    }
  }, /*#__PURE__*/React.createElement(Attraction, {
    size: "large"
  }), /*#__PURE__*/React.createElement(Text, null, "Party"))));
};

storiesOf('Box', module).add('onClick', function () {
  return /*#__PURE__*/React.createElement(OnClickBox, null);
});