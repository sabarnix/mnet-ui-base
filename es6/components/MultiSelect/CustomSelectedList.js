function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Close } from 'grommet-icons/icons/Close';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';
import { Searchbox } from './Searchbox';
import { OptionsBox, OptionWrapper, OptionText, OptionLabel } from './StyledMultiSelect';

var SelectedList = function SelectedList(_ref) {
  var selectedItems = _ref.selectedItems,
      layout = _ref.layout,
      isExcluded = _ref.isExcluded,
      renderSearch = _ref.renderSearch,
      searchPlaceholder = _ref.searchPlaceholder,
      onRemove = _ref.onRemove,
      clearAll = _ref.clearAll,
      renderEmptySelected = _ref.renderEmptySelected,
      width = _ref.width,
      height = _ref.height;
  var theme = useContext(ThemeContext) || defaultProps.theme;

  var _React$useState = React.useState(''),
      search = _React$useState[0],
      setSearch = _React$useState[1];

  var filteredItems = selectedItems;
  if (search.length) filteredItems = selectedItems.filter(function (val) {
    return val.includes(search);
  });

  var renderClearButton = function renderClearButton() {
    return /*#__PURE__*/React.createElement(Button, {
      focusIndicator: false,
      onClick: function onClick() {
        return clearAll();
      },
      plain: true
    }, /*#__PURE__*/React.createElement(Box, {
      border: {
        side: 'bottom',
        color: theme.multiselect.chips.clear.color
      }
    }, /*#__PURE__*/React.createElement(Text, theme.multiselect.chips.clear, "CLEAR ALL")));
  };

  var Sticky = styled(Box).withConfig({
    displayName: "CustomSelectedList__Sticky",
    componentId: "rqavmq-0"
  })(["position:sticky;top:0;z-index:1;"]);
  return /*#__PURE__*/React.createElement(OptionsBox, {
    style: {
      height: '100%'
    }
  }, selectedItems && selectedItems.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sticky, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/React.createElement(Text, theme.multiselect.rightPanel.incExcHeader.text, isExcluded ? 'Excluded List' : 'Included List'), renderClearButton()), renderSearch && /*#__PURE__*/React.createElement(Searchbox, {
    layout: layout,
    placeholder: searchPlaceholder,
    value: search,
    onValueChange: function onValueChange(val) {
      return setSearch(val);
    }
  }), /*#__PURE__*/React.createElement(OptionWrapper, _extends({
    twoColumnLayout: layout === 'double-column',
    width: width
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), filteredItems.length ? filteredItems.map(function (item, id) {
    var _extends2;

    return /*#__PURE__*/React.createElement(OptionText, _extends({
      key: id + "-" + item,
      twoColumnLayout: layout === 'double-column'
    }, theme.multiselect.chips.option), /*#__PURE__*/React.createElement(OptionLabel, _extends({
      isExcluded: isExcluded
    }, theme.multiselect.chips.label), /*#__PURE__*/React.createElement(Text, null, item)), /*#__PURE__*/React.createElement(Close, _extends((_extends2 = {
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onRemove(item);
      }
    }, _extends2["style"] = {
      cursor: 'pointer'
    }, _extends2), theme.multiselect.chips.icon)));
  }) : /*#__PURE__*/React.createElement(Box, {
    align: "center",
    margin: "medium",
    fill: true
  }, /*#__PURE__*/React.createElement(Text, null, "No Result Found")))), !selectedItems.length && /*#__PURE__*/React.createElement(Box, {
    align: "center",
    justify: "center",
    fill: true
  }, renderEmptySelected));
};

export default /*#__PURE__*/React.memo(SelectedList);