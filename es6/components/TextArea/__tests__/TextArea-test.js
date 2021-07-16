import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { MnetUIBase } from '../../MnetUIBase';
import { TextArea } from '..';
jest.mock('react-dom');
describe('TextArea', function () {
  test('basic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
      id: "item",
      name: "item"
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('placeholder', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
      id: "item",
      name: "item",
      placeholder: "placeholder"
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('plain', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
      id: "item",
      name: "item",
      plain: true
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('disabled', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
      disabled: true,
      id: "item",
      name: "item",
      plain: true
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('focusIndicator', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
      id: "item",
      name: "item",
      focusIndicator: true
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('fill', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
      id: "item",
      name: "item",
      fill: true
    })));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  [true, false, 'horizontal', 'vertical'].forEach(function (resize) {
    test("resize " + resize, function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
        id: "item",
        name: "item",
        resize: resize
      })));
      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  ['small', 'medium', 'large'].forEach(function (size) {
    test("size " + size, function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(MnetUIBase, null, /*#__PURE__*/React.createElement(TextArea, {
        id: "item",
        name: "item",
        size: size
      })));
      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});