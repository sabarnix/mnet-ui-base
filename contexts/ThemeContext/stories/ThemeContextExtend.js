"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _themes = require("mnet-ui-base/themes");

var _utils = require("mnet-ui-base/utils");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var customTheme = (0, _utils.deepMerge)(_themes.mnet, {
  global: {
    focus: {
      border: {
        color: 'red'
      }
    }
  }
});

var GlobalThemeWithThemeContext = function GlobalThemeWithThemeContext() {
  var options = ['one', 'two', 'three'];

  var _useState = (0, _react.useState)(''),
      valueRed = _useState[0],
      setValueRed = _useState[1];

  var _useState2 = (0, _react.useState)(''),
      valueBlue = _useState2[0],
      setValueBlue = _useState2[1];

  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large",
    direction: "column",
    gap: "large"
  }, _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "medium"
  }, "The focus color of this select component is being altered by the custom theme that is passed into the MnetUIBase component."), _react["default"].createElement(_mnetUiBase.Select, {
    alignSelf: "center",
    placeholder: "Select",
    value: valueRed,
    options: options,
    onChange: function onChange(_ref) {
      var option = _ref.option;
      return setValueRed(option);
    }
  })), _react["default"].createElement(_mnetUiBase.Box, null, _react["default"].createElement(_mnetUiBase.ThemeContext.Extend, {
    value: {
      global: {
        focus: {
          border: {
            color: 'blue'
          }
        }
      }
    }
  }, _react["default"].createElement(_mnetUiBase.Text, {
    margin: "medium"
  }, "The focus color of this select component is being altered by ThemeContext, independent from the custom theme"), _react["default"].createElement(_mnetUiBase.Select, {
    alignSelf: "center",
    placeholder: "Select",
    value: valueBlue,
    options: options,
    onChange: function onChange(_ref2) {
      var option = _ref2.option;
      return setValueBlue(option);
    }
  })))));
};

(0, _react2.storiesOf)('Theme', module).add('ThemeContext.Extend', function () {
  return _react["default"].createElement(GlobalThemeWithThemeContext, null);
});