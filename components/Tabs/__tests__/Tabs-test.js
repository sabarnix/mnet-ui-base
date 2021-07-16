"use strict";

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _react2 = require("@testing-library/react");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Tabs', function () {
  test('no Tab', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, null))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Tab', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1"
    }, "Tab body 1"), undefined, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('complex title', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: /*#__PURE__*/_react["default"].createElement("div", null, "Tab 1")
    }, "Tab body 1"), undefined, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: /*#__PURE__*/_react["default"].createElement("div", null, "Tab 2")
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('with icon + reverse', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1",
      icon: /*#__PURE__*/_react["default"].createElement("svg", null)
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2",
      icon: /*#__PURE__*/_react["default"].createElement("svg", null),
      reverse: true
    }, "Tab body 2"))));

    expect(component.toJSON()).toMatchSnapshot();
  });
  test('change to second tab', function () {
    var onActive = jest.fn();

    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, {
      onActive: onActive
    }, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1"
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2")))),
        getByText = _render.getByText,
        container = _render.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.click(getByText('Tab 2'));

    expect(onActive).toBeCalledWith(1);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('set on hover', function () {
    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Tabs, null, /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 1",
      onMouseOver: function onMouseOver() {},
      onMouseOut: function onMouseOut() {}
    }, "Tab body 1"), /*#__PURE__*/_react["default"].createElement(_.Tab, {
      title: "Tab 2"
    }, "Tab body 2")))),
        getByText = _render2.getByText,
        container = _render2.container;

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Tab 1'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOver(getByText('Tab 2'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('Tab 1'));

    expect(container.firstChild).toMatchSnapshot();

    _react2.fireEvent.mouseOut(getByText('Tab 2'));

    expect(container.firstChild).toMatchSnapshot();
  });
});