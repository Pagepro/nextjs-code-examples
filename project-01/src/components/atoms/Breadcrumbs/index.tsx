import React from 'react';
import { Flex, Text, Container } from 'theme-ui';

import Link from 'components/atoms/Link';
import Inner from 'components/styles/Inner';
import { IconChevronRight } from 'components/styles/Icons';
import { BreadcrumbsProps } from './types';
import { LinkVariant } from '../Link/types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <Container>
    <Inner>
      <Flex variant="breadcrumbs.list" as="ul">
        <Flex as="li" variant="breadcrumbs.item">
          <Text as="span" variant="typo4">
            You are here:
          </Text>
        </Flex>
        {items.map(({ text, href }) => (
          <Flex as="li" key={text} variant="breadcrumbs.item">
            {href ? (
              <Link variant={LinkVariant.Breadcrumbs} {...{ href }}>
                {text}
              </Link>
            ) : (
              <Text as="span" variant="breadcrumbs.label">
                {text}
              </Text>
            )}
            <IconChevronRight />
          </Flex>
        ))}
      </Flex>
    </Inner>
  </Container>
);

export default Breadcrumbs;
