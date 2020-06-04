"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _mnetUiBase = require("mnet-ui-base");

var _utils = require("mnet-ui-base/utils");

var _themes = require("mnet-ui-base/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var letterSpace = {
  1: {
    small: '-1px',
    medium: '-1.22px',
    large: '-1.45px'
  },
  2: {
    small: '-0.47px',
    medium: '-0.57px',
    large: '-0.7px'
  },
  3: {
    small: '-0.42px',
    medium: '-0.47px',
    large: '-0.47px'
  }
};

var letterSpacing = function letterSpacing(_ref) {
  var level = _ref.level,
      size = _ref.size;
  return level && size ? "letter-spacing: " + letterSpace[level][size] : '';
};

var customTheme = (0, _utils.deepMerge)(_themes.mnet, {
  heading: {
    extend: function extend(props) {
      return "" + letterSpacing(props);
    }
  }
});

var HeadingExtend = function HeadingExtend() {
  return /*#__PURE__*/_react["default"].createElement(_mnetUiBase.MnetUIBase, {
    theme: customTheme
  }, /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: "1",
    size: "large"
  }, "This is using the extend property on Heading"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: "2",
    size: "medium"
  }, "This is using the extend property on Heading"), /*#__PURE__*/_react["default"].createElement(_mnetUiBase.Heading, {
    level: "3",
    size: "small"
  }, "This is using the extend property on Heading"));
};

(0, _react2.storiesOf)('Heading', module).add('Extend', function () {
  return /*#__PURE__*/_react["default"].createElement(HeadingExtend, null);
});