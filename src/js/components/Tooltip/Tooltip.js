import React, { forwardRef, useContext, useState, useRef } from 'react';

import { ThemeContext } from 'styled-components';
import { defaultProps } from '../../default-props';

import { Box } from '../Box';
import { Text } from '../Text';
import { Drop } from '../Drop';

import { ArrowWrap, Arrow } from './StyledTooltip';

const Tooltip = forwardRef(
  (
    {
      children,
      message,
      body = false,
      position = 'right',
      title,
      showArrow = true,
      ...rest
    },
    ref,
  ) => {
    const [over, setOver] = useState();
    const overRef = useRef();
    const theme = useContext(ThemeContext) || defaultProps.theme;
    const { tooptip } = theme;

    let alignDrop = { ...tooptip.dropProps };
    if (position === 'up') {
      alignDrop = { bottom: 'top' };
    }
    if (position === 'down') {
      alignDrop = { top: 'bottom' };
    }
    if (position === 'left') {
      alignDrop = { right: 'left' };
    }
    let timeOut = null;
    const showToolTip = (show, timer) => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
      if (timer) {
        timeOut = setTimeout(() => {
          setOver(show);
        }, 50);
      } else {
        setOver(show);
      }
    };
    return (
      <Box ref={ref} {...rest}>
        <Box
          ref={overRef}
          onMouseOver={() => showToolTip(true)}
          onMouseOut={() => showToolTip(false, true)}
          onFocus={() => {}}
          onBlur={() => {}}
        >
          {children}
        </Box>

        {overRef.current && over && (
          <Drop
            direction="row"
            onMouseOver={() => showToolTip(true)}
            onMouseOut={() => showToolTip(false, true)}
            align={alignDrop}
            target={overRef.current}
            elevation="none"
            plain
            style={{ boxShadow: tooptip.boxShadow, maxWidth: tooptip.maxWidth }}
          >
            <ArrowWrap
              position={position}
              background={tooptip.background || 'dark-1'}
            >
              {showArrow && <Arrow position={position} />}
              <Box
                pad={tooptip.pad}
                background={tooptip.background || 'dark-1'}
                round={tooptip.round}
              >
                {body}
                {!body && (
                  <>
                    {title && (
                      <Text color={tooptip.color} {...tooptip.titleProps}>
                        {title}
                      </Text>
                    )}
                    <Text color={tooptip.color}>{message}</Text>
                  </>
                )}
              </Box>
            </ArrowWrap>
          </Drop>
        )}
      </Box>
    );
  },
);

Tooltip.displayName = 'Tooltip';

export { Tooltip };
