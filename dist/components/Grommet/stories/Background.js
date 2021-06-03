"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _mnetUiBaseThemeNeo = require("mnet-ui-base-theme-neo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Background = function Background() {
  var themeColor = 'background-back';
  var hexValue = '#DCD0FF';
  var cssColor = 'gold';
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    gap: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with no theme or background prop"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBaseThemeNeo.neo,
    themeMode: "dark"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with theme & themeMode but no background prop"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBaseThemeNeo.neo,
    themeMode: "light",
    background: themeColor
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as theme color of '", themeColor, "'"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: hexValue
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as HEX value of '", hexValue, "'"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: cssColor
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as CSS color name of '", cssColor, "'"))), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _mnetUiBase.mnet,
    background: {
      color: 'pink',
      image: 'url(http://librelogo.org/wp-content/uploads/2014/04/gradient2.png)'
    }
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Text, null, "MnetUIBase with background as object containing color and image"))));
};

(0, _react2.storiesOf)('MnetUIBase', module).add('Background', function () {
  return /*#__PURE__*/_react["default"].createElement(Background, null);
});