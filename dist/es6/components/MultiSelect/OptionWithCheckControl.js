function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { FormSubtract } from 'grommet-icons/icons/FormSubtract';
import { Add } from 'grommet-icons/icons/Add';
import { Box } from '../Box';
import { Text } from '../Text';
import { CheckBoxWrapper, CheckBox, SelectedOption } from './StyledMultiSelect';

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      onSelect = _ref.onSelect,
      index = _ref.index;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var selectOptionsStyle = _extends({}, theme.select.options.box, theme.select.options.container);

  var renderCheckbox = function renderCheckbox(check, exc) {
    return /*#__PURE__*/React.createElement(CheckBoxWrapper, theme.multiselect.checkbox.box, /*#__PURE__*/React.createElement(CheckBox, _extends({
      role: "checkbox",
      "aria-label": (exc ? check : 'select') + " checkbox for " + label,
      className: "option-checkbox-" + (selected || inclusionExclusion && isExcluded === null ? 'active' : 'inactive')
    }, theme.multiselect.checkbox.check, {
      active: selected || inclusionExclusion && isExcluded === null,
      isExcluded: exc,
      onClick: inclusionExclusion && isExcluded === null ? function (event) {
        return onSelect(event, exc, index);
      } : undefined
    }), (selected || !selected || inclusionExclusion && isExcluded === null) && /*#__PURE__*/React.createElement(React.Fragment, null, check === 'check' && /*#__PURE__*/React.createElement(FormCheckmark, theme.multiselect.checkbox.checkmark), check === 'add' && /*#__PURE__*/React.createElement(Add, _extends({}, theme.multiselect.checkbox.checkmark, {
      color: inclusionExclusion ? theme.multiselect.includeBtn.color : 'brand',
      size: "small"
    })), check === 'subtract' && /*#__PURE__*/React.createElement(FormSubtract, _extends({}, theme.multiselect.checkbox.checkmark, {
      color: theme.multiselect.excludeBtn.color,
      size: "small"
    })))));
  };

  return /*#__PURE__*/React.createElement(SelectedOption, _extends({}, selectOptionsStyle, {
    selected: selected
  }), /*#__PURE__*/React.createElement(Box, theme.multiselect.option, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Text, _extends({
    role: "option",
    "aria-label": "multiselect option value"
  }, theme.select.options.text), label)), !inclusionExclusion && /*#__PURE__*/React.createElement(Box, null, renderCheckbox('add', null)), inclusionExclusion && (isExcluded === null || isExcluded !== null) && /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, [null, false].includes(isExcluded) && renderCheckbox('add', false), [null, true].includes(isExcluded) && renderCheckbox('subtract', true))));
};

export { OptionWithCheckControl };