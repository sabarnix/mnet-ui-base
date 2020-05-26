"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Disabled = function Disabled() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium",
    gap: "large"
  }, _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.Text, {
    margin: {
      vertical: 'small'
    }
  }, "Disabled Group"), _react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    disabled: true,
    options: ['First', 'Second', 'Third']
  })), _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.Text, {
    margin: {
      vertical: 'small'
    }
  }, " Disabled Individuals"), _react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    options: [{
      label: 'Maui',
      disabled: true
    }, {
      label: 'Jerusalem'
    }, {
      label: 'Wuhan',
      disabled: true
    }]
  }))));
};

(0, _react2.storiesOf)('CheckBoxGroup', module).add('Disabled', function () {
  return _react["default"].createElement(Disabled, null);
});