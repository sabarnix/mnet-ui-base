function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { Heading } from '../Heading';

var PopUpContainer = function PopUpContainer(_ref) {
  var title = _ref.title,
      message = _ref.message,
      onPrimaryClick = _ref.onPrimaryClick,
      renderButton = _ref.renderButton,
      isLoading = _ref.isLoading,
      onClose = _ref.onClose;
  var theme = useContext(ThemeContext) || defaultProps.theme;
  return /*#__PURE__*/React.createElement(Box, theme.modalpopup.container, title && /*#__PURE__*/React.createElement(Box, theme.modalpopup.title.wrapper, /*#__PURE__*/React.createElement(Heading, theme.modalpopup.title.text, title)), /*#__PURE__*/React.createElement(Box, theme.modalpopup.message.wrapper, /*#__PURE__*/React.createElement(Text, theme.modalpopup.message.text, message)), renderButton || /*#__PURE__*/React.createElement(Box, theme.modalpopup.buttons.wrapper, /*#__PURE__*/React.createElement(Button, _extends({}, theme.modalpopup.buttons.button, {
    onClick: onPrimaryClick || onClose,
    isLoading: isLoading,
    background: "accent-1",
    primary: true
  }), /*#__PURE__*/React.createElement(Text, {
    weight: 600
  }, "OK")), /*#__PURE__*/React.createElement(Button, _extends({}, theme.modalpopup.buttons.button, {
    onClick: onClose,
    background: "accent-2",
    secondary: true
  }), /*#__PURE__*/React.createElement(Text, {
    weight: 600
  }, "Cancel"))));
};

PopUpContainer.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onPrimaryClick: PropTypes.func,
  renderButton: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
PopUpContainer.defaultProps = {
  title: '',
  onPrimaryClick: undefined,
  renderButton: undefined
};
export { PopUpContainer };