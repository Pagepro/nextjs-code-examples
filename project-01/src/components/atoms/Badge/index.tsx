import React from 'react';
import { Badge as ThemedBadge, Box } from 'theme-ui';

import Image from 'components/atoms/Image';
import { BadgeProps, BadgeVariant } from './types';

const Badge: React.FC<BadgeProps> = ({
  variant = BadgeVariant.Primary,
  icon: Icon,
  src,
  alt,
  ...props
}) => (
  <ThemedBadge {...{ variant, ...props }}>
    {Icon && <Icon />}
    {src && (
      <Box variant="badges.image">
        <Image {...{ src, alt }} width={72} height={72} />
      </Box>
    )}
  </ThemedBadge>
);

export default Badge;
