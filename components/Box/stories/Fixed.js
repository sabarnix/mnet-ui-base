"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FixedSizesBox = function FixedSizesBox() {
  return _react["default"].createElement("div", null, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "small",
    gap: "small"
  }, _react["default"].createElement(_mnetUiBase.Box, {
    width: "small",
    height: "small",
    round: "small",
    align: "center",
    justify: "center",
    background: "brand",
    overflow: {
      horizontal: 'hidden',
      vertical: 'scroll'
    }
  }, Array(20).fill().map(function (_, i) {
    return (// eslint-disable-next-line react/no-array-index-key
      _react["default"].createElement(_mnetUiBase.Text, {
        key: i
      }, "Small (" + i + ")")
    );
  })), _react["default"].createElement(_mnetUiBase.Box, {
    width: "medium",
    height: "medium",
    round: "small",
    align: "center",
    justify: "center",
    background: "brand"
  }, "Medium"), _react["default"].createElement(_mnetUiBase.Box, {
    width: "large",
    height: "large",
    round: "small",
    align: "center",
    justify: "center",
    background: "brand"
  }, "Large")));
};

(0, _react2.storiesOf)('Box', module).add('Fixed sizes', function () {
  return _react["default"].createElement(FixedSizesBox, null);
});