"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var items = [{
  label: 'Item A',
  href: '#'
}, {
  label: 'Item B',
  href: '#'
}, {
  label: 'Item C',
  href: '#'
}, {
  label: 'Item D',
  href: '#'
}];

var Simple = function Simple() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Nav, {
    pad: "large"
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Anchor, {
      href: item.href,
      label: item.label,
      key: item.label
    });
  })));
};

(0, _react2.storiesOf)('Nav', module).add('Simple', function () {
  return /*#__PURE__*/_react["default"].createElement(Simple, null);
});