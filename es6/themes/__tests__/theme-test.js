import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Add } from "grommet-icons/es6/icons/Add";
import { MnetUIBase, Anchor, Box, Text, TextInput } from '../../components';
import { dark } from '..';
var colors = ['accent-1', 'accent-2', 'accent-3', 'brand', 'dark-1', 'dark-2', 'dark-3', 'dark-4', 'dark-5', 'dark-6', 'focus', 'light-1', 'light-2', 'light-3', 'light-4', 'light-5', 'light-6', 'neutral-1', 'neutral-2', 'neutral-3', 'status-critical', 'status-disabled', 'status-ok', 'status-unknown', 'status-warning'];
var customTheme = {
  global: {
    input: {
      // test backwards compatibility that string value works for input pad
      padding: '12px',
      font: {
        height: '50px',
        size: 'large',
        weight: 'bold'
      }
    },
    colors: {
      custom: '#cc6633'
    }
  }
};
describe('MnetUIBase', function () {
  test('default theme', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, colors.map(function (color) {
      return /*#__PURE__*/React.createElement(Box, {
        key: color,
        background: color
      }, /*#__PURE__*/React.createElement(Text, null, color));
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('dark theme', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      theme: dark
    }, colors.map(function (color) {
      return /*#__PURE__*/React.createElement(Box, {
        key: color,
        background: color
      }, /*#__PURE__*/React.createElement(Text, null, color));
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('custom theme', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, {
      theme: customTheme
    }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Anchor, {
      icon: /*#__PURE__*/React.createElement(Add, null),
      label: "Add"
    }), /*#__PURE__*/React.createElement(Anchor, {
      icon: /*#__PURE__*/React.createElement(Add, null),
      label: "Add",
      color: "custom"
    })), /*#__PURE__*/React.createElement(Box, {
      background: "dark-1"
    }, /*#__PURE__*/React.createElement(Anchor, {
      icon: /*#__PURE__*/React.createElement(Add, null),
      label: "Add"
    }), /*#__PURE__*/React.createElement(Anchor, {
      icon: /*#__PURE__*/React.createElement(Add, null),
      label: "Add",
      color: "custom"
    })), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(TextInput, {
      value: "Value"
    }))));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});