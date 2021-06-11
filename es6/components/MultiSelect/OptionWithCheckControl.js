function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FormCheckmark } from 'grommet-icons/icons/FormCheckmark';
import { FormClose } from 'grommet-icons/icons/FormClose';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';
import { CheckBoxWrapper, CheckBox } from './StyledMultiSelect';

var OptionWithCheckControl = function OptionWithCheckControl(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      inclusionExclusion = _ref.inclusionExclusion,
      isExcluded = _ref.isExcluded,
      onSelect = _ref.onSelect,
      active = _ref.active,
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
    }), (selected || inclusionExclusion && isExcluded === null) && /*#__PURE__*/React.createElement(React.Fragment, null, check === 'check' && /*#__PURE__*/React.createElement(FormCheckmark, theme.multiselect.checkbox.checkmark), check === 'cross' && /*#__PURE__*/React.createElement(FormClose, theme.multiselect.checkbox.checkmark))));
  };

  return /*#__PURE__*/React.createElement(Box, _extends({}, selectOptionsStyle, {
    selected: selected
  }), /*#__PURE__*/React.createElement(Box, theme.multiselect.option, /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, !inclusionExclusion && renderCheckbox('check', null), /*#__PURE__*/React.createElement(Text, _extends({
    role: "option",
    "aria-label": "multiselect option value"
  }, theme.select.options.text), label)), inclusionExclusion && (isExcluded === null && active || isExcluded !== null) && /*#__PURE__*/React.createElement(Box, {
    direction: "row"
  }, [null, false].includes(isExcluded) && renderCheckbox('check', false), [null, true].includes(isExcluded) && renderCheckbox('cross', true))));
};

export { OptionWithCheckControl };