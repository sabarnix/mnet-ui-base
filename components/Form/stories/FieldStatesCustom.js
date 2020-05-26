"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _utils = require("../../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var customTheme = (0, _utils.deepMerge)(_mnetUiBase.mnet, {
  formField: {
    border: {
      error: {
        color: 'border'
      },
      color: 'border',
      side: 'all'
    },
    disabled: {
      background: {
        color: undefined
      },
      border: {
        color: 'status-disabled'
      },
      label: {
        color: 'status-disabled'
      }
    },
    error: {
      background: {
        color: {
          light: '#FF404033',
          dark: '#FF40404D'
        }
      },
      size: 'xsmall',
      color: 'text-weak',
      margin: {
        start: 'none'
      }
    },
    help: {
      size: 'xsmall',
      color: 'text-weak',
      margin: {
        start: 'none',
        bottom: 'xsmall'
      }
    },
    info: {
      size: 'xsmall',
      color: 'text-weak',
      margin: {
        start: 'none'
      }
    },
    label: {
      size: 'xsmall',
      color: 'text-weak',
      margin: {
        horizontal: 'none'
      }
    },
    round: '4px'
  }
});

var CustomFormFieldStates = function CustomFormFieldStates() {
  var inputRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    inputRef.current.focus();
  }, []);
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Form, null, _react["default"].createElement(_mnetUiBase.Box, {
    border: true,
    gap: "medium",
    pad: "large",
    width: "medium"
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    htmlFor: "enabled-id",
    name: "enabled",
    label: "Default"
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    id: "enabled-id",
    name: "enabled",
    placeholder: "Enter a username"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    htmlFor: "focus-id",
    name: "focus",
    label: "Focus State"
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    id: "focus-id",
    name: "focus",
    placeholder: "Enter a username",
    ref: inputRef
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    htmlFor: "info-id",
    name: "info-demo",
    label: "Info State",
    info: "Unique name. No spaces. May include '-' as a separator."
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    id: "info-id",
    name: "info-demo",
    placeholder: "Enter a username",
    value: "fluffyKi"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    htmlFor: "error-id",
    name: "error-demo",
    label: "Error State",
    error: "It looks like that username is already taken. Bummer."
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    id: "error-id",
    name: "error-demo",
    placeholder: "Enter a username",
    value: "fluffyKitty123"
  })), _react["default"].createElement(_mnetUiBase.FormField, {
    htmlFor: "disabled-id",
    name: "disabled",
    label: "Disabled State",
    disabled: true
  }, _react["default"].createElement(_mnetUiBase.TextInput, {
    id: "disabled-id",
    name: "disabled",
    placeholder: "Enter a username",
    disabled: true
  }))))));
};

(0, _react2.storiesOf)('Form', module).add('Field States Custom', function () {
  return _react["default"].createElement(CustomFormFieldStates, null);
});