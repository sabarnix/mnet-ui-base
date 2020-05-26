function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import { MnetUIBase, Box, DataTable } from 'mnet-ui-base';
import { mnet } from 'mnet-ui-base/themes'; // Source code for the data can be found here
// https://github.com/grommet/mnet/blob/master/src/js/components/DataTable/stories/data.js

import { columns, DATA } from './data';

var Example = function Example() {
  var _React$useState = React.useState({
    property: 'name',
    direction: 'desc'
  }),
      sort = _React$useState[0],
      setSort = _React$useState[1];

  return React.createElement(MnetUIBase, {
    theme: mnet
  }, React.createElement(Box, {
    align: "center",
    pad: "large"
  }, React.createElement(DataTable, {
    columns: columns.map(function (c) {
      return _extends({}, c, {
        search: c.property === 'name' || c.property === 'location'
      });
    }),
    data: DATA,
    sort: sort,
    onSort: setSort,
    resizeable: true
  })));
};

storiesOf('DataTable', module).add('Sort', function () {
  return React.createElement(Example, null);
});