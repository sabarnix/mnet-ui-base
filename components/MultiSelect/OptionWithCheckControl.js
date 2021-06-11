"use strict";

exports.__esModule = true;
exports.OptionWithCheckControl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _FormCheckmark = require("grommet-icons/icons/FormCheckmark");

var _FormClose = require("grommet-icons/icons/FormClose");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Text = require("../Text");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      onSelect = _ref.onSelect,
      active = _ref.active,
      index = _ref.index;

  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || _defaultProps.defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var renderCheckbox = function renderCheckbox(check, exc) {
    return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.CheckBoxWrapper, theme.multiselect.checkbox.box, /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.CheckBox, _extends({
      role: "checkbox",
      "aria-label": (exc ? check : 'select') + " checkbox for " + label,
      className: "option-checkbox-" + (selected || inclusionExclusion && isExcluded === null ? 'active' : 'inactive')
    }, theme.multiselect.checkbox.check, {
      active: selected || inclusionExclusion && isExcluded === null,
      isExcluded: exc,
      onClick: inclusionExclusion && isExcluded === null ? function (event) {
        return onSelect(event, exc, index);
      } : undefined
    }), (selected || inclusionExclusion && isExcluded === null) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, check === 'check' && /*#__PURE__*/_react["default"].createElement(_FormCheckmark.FormCheckmark, theme.multiselect.checkbox.checkmark), check === 'cross' && /*#__PURE__*/_react["default"].createElement(_FormClose.FormClose, theme.multiselect.checkbox.checkmark))));
  };

  return /*#__PURE__*/_react["default"].createElement(_Box.Box, _extends({}, selectOptionsStyle, {
    selected: selected
  }), /*#__PURE__*/_react["default"].createElement(_Box.Box, theme.multiselect.option, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, !inclusionExclusion && renderCheckbox('check', null), /*#__PURE__*/_react["default"].createElement(_Text.Text, _extends({
    role: "option",
    "aria-label": "multiselect option value"
  }, theme.select.options.text), label)), inclusionExclusion && (isExcluded === null && active || isExcluded !== null) && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    direction: "row"
  }, [null, false].includes(isExcluded) && renderCheckbox('check', false), [null, true].includes(isExcluded) && renderCheckbox('cross', true))));
};

exports.OptionWithCheckControl = OptionWithCheckControl;