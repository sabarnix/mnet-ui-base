import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { IconWrapper } from './StyledNotification';
import { defaultProps } from '../../default-props';

export function Toast({ type, id, msg, onClose }) {
  const theme = useContext(ThemeContext) || defaultProps.theme;
  const Icon =
    theme.notification.toast.icon[type] ||
    theme.notification.toast.icon.default;
  const { 
    size: IconSize, 
    container: iconWrapper } = theme.notification.toast.icon;
  const IconColor =
    (theme.notification.toast.text[type] &&
      theme.notification.toast.text[type].color) ||
    theme.notification.toast.text.default.color;
  const { closeIcon: CloseIcon } = theme.notification.toast;
  const handleClose = () => {
    onClose(id);
  };
  return (
    <Box
      key={id}
      {...theme.notification.toast.default}
      {...theme.notification.toast[type]}
    >
      <IconWrapper align="center" direction="row" gap="xsmall" {...iconWrapper}>
        {Icon && <Icon size={IconSize} color={IconColor} />}
        <Text
          {...(theme.notification.toast.text[type] ||
            theme.notification.toast.text.default)}
        >
          {msg}
        </Text>
      </IconWrapper>
      <Button
        icon={<CloseIcon color={IconColor} />}
        onClick={handleClose}
        style={{ display: 'flex', padding: 0 }}
      />
    </Box>
  );
}
