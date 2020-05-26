"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CornerLayer = function CornerLayer() {
  var _React$useState = _react["default"].useState(),
      open = _React$useState[0],
      setOpen = _React$useState[1];

  var onOpen = function onOpen() {
    return setOpen(true);
  };

  var onClose = function onClose() {
    return setOpen(undefined);
  };

  return _react["default"].createElement("div", {
    style: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto'
    }
  }, _react["default"].createElement(_mnetUiBase.Box, {
    fill: true,
    align: "center",
    justify: "center"
  }, _react["default"].createElement(_mnetUiBase.Button, {
    icon: _react["default"].createElement(_grommetIcons.Add, {
      color: "brand"
    }),
    label: _react["default"].createElement(_mnetUiBase.Text, null, _react["default"].createElement("strong", null, "Add Corner Layer")),
    onClick: onOpen,
    plain: true
  })), open && _react["default"].createElement(_mnetUiBase.Layer, {
    position: "top-right",
    onClickOutside: onClose
  }, _react["default"].createElement(_mnetUiBase.Box, {
    height: "small",
    overflow: "auto"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "xlarge"
  }, "Corner top-right position"))));
};

(0, _react2.storiesOf)('Layer', module).add('Corner', function () {
  return _react["default"].createElement(CornerLayer, null);
});