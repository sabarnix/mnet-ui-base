function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useCallback } from 'react';
import { ThemeContext } from 'styled-components';
import { TextArea } from '../TextArea';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { FormField } from '../FormField';
import CustomSelectedList from './CustomSelectedList';

var CustomMultiSelect = function CustomMultiSelect(_ref) {
  var value = _ref.value,
      layout = _ref.layout,
      onValueChange = _ref.onValueChange,
      renderSearch = _ref.renderSearch,
      placeholder = _ref.placeholder,
      renderEmptySelected = _ref.renderEmptySelected,
      width = _ref.width,
      height = _ref.height,
      custom = _ref.custom,
      isExcluded = _ref.isExcluded,
      setIncExcVal = _ref.setIncExcVal,
      inclusionExclusion = _ref.inclusionExclusion,
      validate = _ref.validate;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var _React$useState = React.useState(''),
      textAreaValue = _React$useState[0],
      setTextAreaValue = _React$useState[1];

  var _React$useState2 = React.useState(true),
      isValid = _React$useState2[0],
      setIsValid = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      errorMsg = _React$useState3[0],
      setErrorMsg = _React$useState3[1];

  var setTextAreaValueFn = function setTextAreaValueFn(value) {
    setIsValid(true);
    setTextAreaValue(value);
  };

  var setItems = function setItems(isIncExc) {
    var trimedValue = textAreaValue.trim();

    if (trimedValue && trimedValue.length) {
      var textValues = trimedValue.split('\n');
      var filteredValues = textValues.filter(function (text) {
        return text.length;
      });

      var _validate = validate(filteredValues, value),
          isValueValid = _validate.isValid,
          errMsg = _validate.errMsg;

      if (validate && isValueValid) {
        setIncExcVal(isIncExc);
        onValueChange([].concat(value, filteredValues));
        setTextAreaValue('');
      } else {
        setErrorMsg(errMsg);
        setIsValid(false);
      }
    }
  };

  var removeItem = useCallback(function (item) {
    var lists = [].concat(value);
    var index = lists.indexOf(item);
    lists.splice(index, 1);
    onValueChange([].concat(lists));
    if (!lists.length) setIncExcVal(null);
  }, [value, onValueChange, setIncExcVal]);

  var clearAll = function clearAll() {
    setIncExcVal(null);
    onValueChange([]);
  };

  return /*#__PURE__*/React.createElement(Box, _extends({}, theme.multiselect.custom.wrapper, {
    height: height
  }), /*#__PURE__*/React.createElement(Box, _extends({}, theme.multiselect.custom.textAreaWrap, {
    width: width
  }), /*#__PURE__*/React.createElement(Text, theme.multiselect.custom.label, custom && custom.label || 'Label'), /*#__PURE__*/React.createElement(Box, _extends({}, theme.multiselect.custom.textAreaContainer, {
    width: width,
    style: {
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement(FormField, {
    error: !isValid ? errorMsg : null
  }, /*#__PURE__*/React.createElement(Box, {
    width: "full",
    style: {
      minHeight: theme.multiselect.custom.textAreaContainer.minHeight,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(TextArea, {
    value: textAreaValue,
    onChange: function onChange(event) {
      return setTextAreaValueFn(event.target.value);
    },
    resize: false,
    fill: true
  })))), /*#__PURE__*/React.createElement(Box, theme.multiselect.custom.actions.wrapper, (isExcluded === false || isExcluded === null) && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: function onClick() {
      return setItems(false);
    }
  }, /*#__PURE__*/React.createElement(Text, {
    weight: 600
  }, "INCLUDE")), (isExcluded || isExcluded === null) && /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    color: "brand",
    onClick: function onClick() {
      return setItems(true);
    }
  }, /*#__PURE__*/React.createElement(Text, {
    weight: 600
  }, "EXCLUDE")))), /*#__PURE__*/React.createElement(Box, {
    width: width
  }, /*#__PURE__*/React.createElement(CustomSelectedList, {
    layout: layout,
    selectedItems: value,
    isExcluded: isExcluded,
    renderSearch: renderSearch,
    searchPlaceholder: placeholder,
    onRemove: removeItem,
    clearAll: clearAll,
    renderEmptySelected: renderEmptySelected,
    width: width,
    height: height,
    inclusionExclusion: inclusionExclusion
  })));
};

export { CustomMultiSelect };