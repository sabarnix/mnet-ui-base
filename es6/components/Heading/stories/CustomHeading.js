import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Heading } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes';
import { deepMerge } from 'mnet-ui-base/utils';
var customlevel = deepMerge(mnet, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px'
        },
        medium: {
          size: '14px',
          height: '18px'
        },
        large: {
          size: '16px',
          height: '20px'
        }
      }
    },
    extend: function extend(props) {
      return "color: " + props.theme.global.colors.brand;
    }
  }
});

var CustomHeading = function CustomHeading() {
  return /*#__PURE__*/React.createElement(MnetUIBase, {
    theme: customlevel
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 5,
    size: "small"
  }, "Heading level 5 small"), /*#__PURE__*/React.createElement(Heading, {
    level: 5,
    size: "medium"
  }, "Heading level 5 small"), /*#__PURE__*/React.createElement(Heading, {
    level: 5,
    size: "large"
  }, "Heading level 5 small"));
};

storiesOf('Heading', module).add('Custom', function () {
  return /*#__PURE__*/React.createElement(CustomHeading, null);
});