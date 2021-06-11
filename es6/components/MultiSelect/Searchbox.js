function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Search } from 'grommet-icons/icons/Search';
import { defaultProps } from '../../default-props';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { SearchWrapper } from './StyledMultiSelect';

var Searchbox = function Searchbox(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onValueChange = _ref.onValueChange,
      layout = _ref.layout;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var handleChange = function handleChange(textValue) {
    if (textValue.replace(/\s/g, '').length || !textValue.length) return onValueChange(textValue);
    return null;
  };

  return /*#__PURE__*/React.createElement(SearchWrapper, _extends({
    layout: layout
  }, theme.multiselect.searchbox.container), /*#__PURE__*/React.createElement(TextInput, {
    role: "search",
    "aria-label": "multiselect searchbox",
    plain: true,
    value: value,
    valueLabel: /*#__PURE__*/React.createElement(Text, null, "value"),
    onChange: function onChange(event) {
      return handleChange(event.target.value);
    },
    placeholder: /*#__PURE__*/React.createElement(Text, theme.multiselect.searchbox.placeholder, value ? '' : placeholder)
  }), /*#__PURE__*/React.createElement(Search, theme.multiselect.searchbox.icon));
};

export { Searchbox };