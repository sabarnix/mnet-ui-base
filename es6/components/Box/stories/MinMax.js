import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Text } from 'mnet-ui-base';

var MinMaxSizesBox = function MinMaxSizesBox() {
  return React.createElement("div", null, React.createElement(Box, {
    pad: "small",
    gap: "small"
  }, React.createElement(Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, React.createElement(Box, {
    width: "small",
    height: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "max-height=small")), React.createElement(Box, {
    width: "small",
    height: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "max-height=small"), React.createElement(Text, null, "max-height=small"), React.createElement(Text, null, "max-height=small")), React.createElement(Box, {
    width: "small",
    height: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, Array(20).fill().map(function (_, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Text, {
        key: i
      }, "Small (" + i + ")")
    );
  })), React.createElement(Box, {
    width: "small",
    height: {
      max: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, Array(20).fill().map(function (_, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Text, {
        key: i
      }, "Small (" + i + ")")
    );
  }))), React.createElement(Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, React.createElement(Box, {
    width: "small",
    height: {
      min: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "min-height=100px")), React.createElement(Box, {
    width: "small",
    height: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "min-height=small")), React.createElement(Box, {
    width: "small",
    height: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "min-height=small"), React.createElement(Text, null, "min-height=small"), React.createElement(Text, null, "min-height=small")), React.createElement(Box, {
    width: "small",
    height: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, Array(20).fill().map(function (_, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      React.createElement(Text, {
        key: i
      }, "Small (" + i + ")")
    );
  }))), React.createElement(Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, React.createElement(Box, {
    width: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "max")), React.createElement(Box, {
    width: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "max-width=small")), React.createElement(Box, {
    width: {
      max: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "max-width=small, max-width=small")), React.createElement(Box, {
    width: {
      max: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "max-width=100px, max-width=100px"))), React.createElement(Box, {
    pad: "small",
    gap: "small",
    direction: "row",
    align: "start"
  }, React.createElement(Box, {
    width: {
      min: '100px'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "100px")), React.createElement(Box, {
    width: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "small")), React.createElement(Box, {
    width: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "min-width=small")), React.createElement(Box, {
    width: {
      min: 'small'
    },
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: "auto"
  }, React.createElement(Text, null, "min-width=small, min-width=small")))));
};

storiesOf('Box', module).add('Min/Max sizes', function () {
  return React.createElement(MinMaxSizesBox, null);
});