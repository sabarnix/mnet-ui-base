import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box'; // import { Text } from '../Text';

import { LabelText } from './StyledMultiSelect';

var ValueLabelWithIcon = function ValueLabelWithIcon(_ref) {
  var withInclusionExclusion = _ref.withInclusionExclusion,
      isExcluded = _ref.isExcluded,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      size = _ref.size,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select' : _ref$placeholder;
  var valueProp = value;
  valueProp = Array.isArray(valueProp) ? valueProp : [valueProp];
  var number = valueProp.length;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  var _theme$multiselect$ic = theme.multiselect.icons,
      include = _theme$multiselect$ic.include,
      exclude = _theme$multiselect$ic.exclude;
  var IncIcon = include.icon,
      incExtend = include.extend;
  var ExcIcon = exclude.icon,
      excExtend = exclude.extend;

  var getColor = function getColor() {
    if (withInclusionExclusion && isExcluded) return 'status-error';
    if (withInclusionExclusion && isExcluded === false) return 'status-ok';
    return 'dark-1';
  };

  return /*#__PURE__*/React.createElement(Box, {
    direction: "row",
    align: "center",
    pad: {
      left: 'large',
      vertical: 'small'
    }
  }, withInclusionExclusion && isExcluded && /*#__PURE__*/React.createElement(Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/React.createElement(ExcIcon, excExtend)), withInclusionExclusion && isExcluded === false && /*#__PURE__*/React.createElement(Box, {
    width: {
      min: '20px'
    },
    alignSelf: "start",
    pad: {
      vertical: 'small'
    }
  }, /*#__PURE__*/React.createElement(IncIcon, incExtend)), /*#__PURE__*/React.createElement(LabelText, {
    "aria-label": "Selected Label Value",
    color: getColor(),
    size: size
  }, number ? valueProp.join(', ') : placeholder));
};

export { ValueLabelWithIcon };