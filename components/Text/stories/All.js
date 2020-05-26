"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', '77px'];

var All = function All() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, sizes.map(function (size) {
    return _react["default"].createElement(_mnetUiBase.Box, {
      key: size,
      margin: "small"
    }, _react["default"].createElement(_mnetUiBase.Text, {
      size: size
    }, "Text " + size));
  }));
};

(0, _react2.storiesOf)('Text', module).add('All', function () {
  return _react["default"].createElement(All, null);
});