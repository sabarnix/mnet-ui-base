import React from 'react';

import { Box, Button } from 'mnet-ui-base';

export const Basic = props => (
  <div>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Primary"
        size="medium"
        onClick={() => {}}
        {...props}
      />
    </Box>
    <Box align="center" pad="medium">
      <Button secondary label="Secondary" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button tertiary label="Tertiary" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button label="Default" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button label="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled label="Disabled" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Active Primary"
        active
        onClick={() => {}}
        {...props}
      />
    </Box>
  </div>
);

export default {
  title: 'Controls/Button/Basic',
};
