"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var options = [{
  label: 'option 1',
  value: 1
}, {
  label: 'option 2',
  value: 2
}, {
  label: 'option 3',
  value: 3
}];

var FormFieldSelect = function FormFieldSelect() {
  var _useState = (0, _react.useState)({}),
      value = _useState[0],
      setValue = _useState[1];

  var onChange = (0, _react.useCallback)(function (nextValue) {
    return setValue(nextValue);
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_mnetUiBase.Box, {
    align: "center",
    pad: "large"
  }, _react["default"].createElement(_mnetUiBase.Form, {
    value: value,
    onChange: onChange,
    onSubmit: function onSubmit() {
      return console.log('Submit', value);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    label: "Label",
    name: "select"
  }, _react["default"].createElement(_mnetUiBase.Select, {
    name: "select",
    placeholder: "placeholder",
    options: options,
    labelKey: "label",
    valueKey: "value"
  })), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Update",
    primary: true
  }))));
};

(0, _react2.storiesOf)('Form', module).add('Select', function () {
  return _react["default"].createElement(FormFieldSelect, null);
});