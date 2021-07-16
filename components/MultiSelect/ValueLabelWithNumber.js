"use strict";

exports.__esModule = true;
exports.ValueLabelWithNumber = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Text = require("../Text");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ValueLabelWithNumber = function ValueLabelWithNumber(_ref) {
  var value = _ref.value,
      number = _ref.number,
      color = _ref.color;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row",
    margin: {
      horizontal: 'medium'
    },
    align: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    "aria-label": "Selected Label Value",
    size: "medium",
    weight: 600
  }, theme.multiselect.label), number ? value : 'Select'), number > 0 && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    pad: "5px",
    background: color,
    round: "xsmall",
    margin: {
      horizontal: 'medium'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    "aria-label": "Selected Label Count",
    size: "10px",
    color: "white",
    weight: 600
  }, number)));
};

exports.ValueLabelWithNumber = ValueLabelWithNumber;