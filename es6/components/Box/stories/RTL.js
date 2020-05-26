import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'mnet-ui-base';

var RTLBox = function RTLBox() {
  return React.createElement("div", {
    dir: "rtl"
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "small",
    gap: "small",
    border: true
  }, React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: "small",
    border: "start"
  }, "border start"), React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      start: 'large'
    },
    background: "brand"
  }, "pad start"), React.createElement(Box, {
    direction: "row",
    align: "center",
    margin: {
      start: 'large'
    },
    background: "brand"
  }, "margin start")));
};

storiesOf('Box', module).add('RTL', function () {
  return React.createElement(RTLBox, null);
});