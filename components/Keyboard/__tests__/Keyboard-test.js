"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = require("react-test-renderer");

require("jest-styled-components");

var _react2 = require("@testing-library/react");

var _MnetUIBase = require("../../MnetUIBase");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Keyboard', function () {
  test('onDown', function () {
    var onDown = jest.fn();
    var component = (0, _reactTestRenderer.create)( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Keyboard, {
      onDown: onDown
    }, /*#__PURE__*/_react["default"].createElement("span", null, "hi"))));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.children[0].props.onKeyDown({
      keyCode: 40
    });
    tree.children[0].props.onKeyDown({
      which: 40
    });
    tree.children[0].props.onKeyDown({
      which: 0
    });
    expect(onDown).toBeCalled();
  });
  test('onKeyDown', function () {
    var onDown = jest.fn();
    var onKeyDown = jest.fn();
    var component = (0, _reactTestRenderer.create)( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Keyboard, {
      onDown: onDown,
      onKeyDown: onKeyDown
    }, /*#__PURE__*/_react["default"].createElement("span", null, "hi"))));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.children[0].props.onKeyDown({
      keyCode: 40
    });
    expect(onDown).toBeCalled();
    expect(onKeyDown).toBeCalled();
  });
  test('change onKeyDown', function () {
    var firstOnKeyDown = jest.fn();
    var secondOnKeyDown = jest.fn();

    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.Keyboard, {
      target: "document",
      onKeyDown: firstOnKeyDown
    }, /*#__PURE__*/_react["default"].createElement("span", null, "hi"))),
        container = _render.container,
        getByText = _render.getByText,
        rerender = _render.rerender;

    expect(container.firstChild).toMatchSnapshot();
    (0, _react2.fireEvent)(getByText('hi'), new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true
    }));
    expect(firstOnKeyDown).toBeCalled();
    rerender( /*#__PURE__*/_react["default"].createElement(_.Keyboard, {
      target: "document",
      onKeyDown: secondOnKeyDown
    }, /*#__PURE__*/_react["default"].createElement("span", null, "hi")));
    expect(container.firstChild).toMatchSnapshot();
    (0, _react2.fireEvent)(getByText('hi'), new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true
    }));
    expect(secondOnKeyDown).toBeCalled();
  });
});