"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Close = require("grommet-icons/icons/Close");

var _Box = require("../Box");

var _Button = require("../Button");

var _Text = require("../Text");

var _Searchbox = require("./Searchbox");

var _StyledMultiSelect = require("./StyledMultiSelect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var theme = (0, _react.useContext)(_styledComponents.ThemeContext) || defaultProps.theme;

  var _React$useState = _react["default"].useState(''),
      search = _React$useState[0],
      setSearch = _React$useState[1];

  var filteredItems = selectedItems;
  if (search.length) filteredItems = selectedItems.filter(function (val) {
    return val.includes(search);
  });

  var renderClearButton = function renderClearButton() {
    return /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      focusIndicator: false,
      onClick: function onClick() {
        return clearAll();
      },
      plain: true
    }, /*#__PURE__*/_react["default"].createElement(_Box.Box, {
      border: {
        side: 'bottom',
        color: theme.multiselect.chips.clear.color
      }
    }, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.chips.clear, "CLEAR ALL")));
  };

  var Sticky = (0, _styledComponents["default"])(_Box.Box).withConfig({
    displayName: "CustomSelectedList__Sticky",
    componentId: "rqavmq-0"
  })(["position:sticky;top:0;z-index:1;"]);
  return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionsBox, {
    style: {
      height: '100%'
    }
  }, selectedItems && selectedItems.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Sticky, theme.multiselect.rightPanel.incExcHeader.box, /*#__PURE__*/_react["default"].createElement(_Text.Text, theme.multiselect.rightPanel.incExcHeader.text, isExcluded ? 'Excluded List' : 'Included List'), renderClearButton()), renderSearch && /*#__PURE__*/_react["default"].createElement(_Searchbox.Searchbox, {
    layout: layout,
    placeholder: searchPlaceholder,
    value: search,
    onValueChange: function onValueChange(val) {
      return setSearch(val);
    }
  }), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionWrapper, _extends({
    twoColumnLayout: layout === 'double-column',
    width: width
  }, theme.multiselect.chips.wrapper, {
    wrap: true
  }), filteredItems.length ? filteredItems.map(function (item, id) {
    var _extends2;

    return /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionText, _extends({
      key: id + "-" + item,
      twoColumnLayout: layout === 'double-column'
    }, theme.multiselect.chips.option), /*#__PURE__*/_react["default"].createElement(_StyledMultiSelect.OptionLabel, _extends({
      isExcluded: isExcluded
    }, theme.multiselect.chips.label), /*#__PURE__*/_react["default"].createElement(_Text.Text, null, item)), /*#__PURE__*/_react["default"].createElement(_Close.Close, _extends((_extends2 = {
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return onRemove(item);
      }
    }, _extends2["style"] = {
      cursor: 'pointer'
    }, _extends2), theme.multiselect.chips.icon)));
  }) : /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    align: "center",
    margin: "medium",
    fill: true
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, null, "No Result Found")))), !selectedItems.length && /*#__PURE__*/_react["default"].createElement(_Box.Box, {
    align: "center",
    justify: "center",
    fill: true
  }, renderEmptySelected));
};

var _default = /*#__PURE__*/_react["default"].memo(SelectedList);

exports["default"] = _default;