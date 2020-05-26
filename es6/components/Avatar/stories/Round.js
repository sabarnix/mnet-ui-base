import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar, Box, MnetUIBase } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';

var Round = function Round() {
  var src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';
  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    direction: "row",
    alignContent: "center",
    gap: "small",
    pad: "large"
  }, React.createElement(Avatar, {
    size: "large",
    src: src,
    round: false
  }), React.createElement(Avatar, {
    size: "large",
    src: src,
    round: "xsmall"
  }), React.createElement(Avatar, {
    size: "large",
    src: src,
    round: "small"
  }), React.createElement(Avatar, {
    size: "large",
    src: src,
    round: "medium"
  }), React.createElement(Avatar, {
    size: "large",
    src: src,
    round: "large"
  }), React.createElement(Avatar, {
    size: "large",
    src: src
  })));
};

storiesOf('Avatar', module).add('Round', function () {
  return React.createElement(Round, null);
});