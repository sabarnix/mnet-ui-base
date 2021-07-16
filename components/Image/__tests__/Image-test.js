"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _MnetUIBase = require("../../MnetUIBase");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var opacityTypes = ['weak', 'medium', 'strong', '0.3', true, false];
var SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAAA1JREFUCB1jYGBg+A8AAQQBAB5znEAAAAAASUVORK5CYII='; // eslint-disable-line max-len

test('Image renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Image, {
    src: SRC
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Image renders with aria-label', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Image, {
    a11yTitle: "aria-label-text",
    src: SRC
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Image fit renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Image, {
    fit: "cover",
    src: SRC
  }), /*#__PURE__*/_react["default"].createElement(_.Image, {
    fit: "contain",
    src: SRC
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
opacityTypes.forEach(function (opacity) {
  test("Image opacity of " + opacity + " renders", function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Image, {
      opacity: opacity,
      src: SRC
    })));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
test('Image fillProp renders', function () {
  var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_MnetUIBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_.Image, {
    fill: true,
    src: SRC
  }), /*#__PURE__*/_react["default"].createElement(_.Image, {
    fill: false,
    src: SRC
  }), /*#__PURE__*/_react["default"].createElement(_.Image, {
    fill: "horizontal",
    src: SRC
  }), /*#__PURE__*/_react["default"].createElement(_.Image, {
    fill: "vertical",
    src: SRC
  })));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});