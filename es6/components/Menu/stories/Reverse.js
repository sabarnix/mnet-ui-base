import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box, Menu } from 'mnet-ui-base';
import { Power } from "grommet-icons/es6/icons/Power";
import { User } from "grommet-icons/es6/icons/User";

var Reverse = function Reverse() {
  return React.createElement("div", null, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(Menu, {
    dropProps: {
      align: {
        top: 'bottom',
        left: 'left'
      }
    },
    label: "actions",
    items: [{
      label: 'Home'
    }, {
      label: 'Profile',
      icon: React.createElement(User, null),
      gap: 'small'
    }, {
      label: 'Logout',
      icon: React.createElement(Power, null),
      reverse: true,
      gap: 'small'
    }]
  })));
};

storiesOf('Menu', module).add('Reverse', function () {
  return React.createElement(Reverse, null);
});