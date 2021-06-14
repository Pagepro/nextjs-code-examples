import React from 'react';
import { Flex, Box } from 'theme-ui';

import ButtonLink from 'components/atoms/Link/buttonLink';
import Link from 'components/atoms/Link';
import { LinkVariant } from 'components/atoms/Link/types';
import { CitiesButtonsProps, CitiesProps } from './types';

const Cities: React.FC<CitiesProps> = ({ items }) => (
  <Flex as="ul" variant="cities">
    {items.map(({ key, label, href }) => (
      <Box as="li" variant="cities.item" {...{ key }}>
        <Link variant={LinkVariant.Default} {...{ href }}>
          {label}
        </Link>
      </Box>
    ))}
  </Flex>
);

export const CitiesButtons: React.FC<CitiesButtonsProps> = ({ items }) => (
  <Flex as="ul" variant="cities">
    {items.map(({ key, label, onClick }) => (
      <Box as="li" variant="cities.item" {...{ key }}>
        <ButtonLink variant={LinkVariant.Default} {...{ onClick }}>
          {label}
        </ButtonLink>
      </Box>
    ))}
  </Flex>
);

export default Cities;
