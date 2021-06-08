import React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from 'mnet-ui-base';
var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small'];
var paragraphFiller = "\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\ntempor incididunt ut labore et dolore magna aliqua.\n";

var All = function All() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, sizes.map(function (size) {
    return /*#__PURE__*/React.createElement(Paragraph, {
      key: size,
      size: size
    }, "Paragraph " + size, paragraphFiller);
  }), /*#__PURE__*/React.createElement(Paragraph, {
    color: "status-critical"
  }, "This is an error message."), /*#__PURE__*/React.createElement(Paragraph, {
    fill: true
  }, "This is a full-width paragraph, using the \"fill\" property:", ' ', paragraphFiller));
};

storiesOf('Paragraph', module).add('All', function () {
  return /*#__PURE__*/React.createElement(All, null);
});