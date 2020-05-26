"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckBoxGroupForm = function CheckBoxGroupForm() {
  return _react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: _themes.mnet
  }, _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: "3"
  }, "Form with string options"), _react["default"].createElement(_mnetUiBase.Form, {
    onSubmit: function onSubmit(_ref) {
      var value = _ref.value,
          touched = _ref.touched;
      return console.log('Submit', value, touched);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    name: "am-pm",
    component: _mnetUiBase.CheckBoxGroup,
    options: ['morning', 'evening']
  }), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Submit"
  }))), _react["default"].createElement(_mnetUiBase.Box, {
    pad: "medium"
  }, _react["default"].createElement(_mnetUiBase.Heading, {
    level: "3"
  }, "Form with object options"), _react["default"].createElement(_mnetUiBase.Form, {
    onSubmit: function onSubmit(_ref2) {
      var value = _ref2.value,
          touched = _ref2.touched;
      return console.log('Submit object options', value, touched);
    }
  }, _react["default"].createElement(_mnetUiBase.FormField, {
    name: "drink"
  }, _react["default"].createElement(_mnetUiBase.CheckBoxGroup, {
    name: "drink",
    valueKey: "id",
    options: [{
      label: 'Coffee',
      id: '1'
    }, {
      label: 'Tea',
      id: '2'
    }, {
      label: 'Milk',
      id: '3'
    }]
  })), _react["default"].createElement(_mnetUiBase.Button, {
    type: "submit",
    label: "Submit"
  }))));
};

(0, _react2.storiesOf)('CheckBoxGroup', module).add('Form uncontrolled', function () {
  return _react["default"].createElement(CheckBoxGroupForm, null);
});