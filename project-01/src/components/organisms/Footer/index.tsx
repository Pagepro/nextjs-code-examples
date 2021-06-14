import React, { useMemo } from 'react';
import { Box, Text, Container, Grid, Flex } from 'theme-ui';
import LazyHydrate from 'react-lazy-hydration';

import Inner from 'components/styles/Inner';
import Accordion from 'components/molecules/Accordion';
import { AccordionMode } from 'components/molecules/Accordion/types';
import SelectLocation from 'components/molecules/SelectLocation';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({
  columns,
  copy,
  disclaimer,
  items,
}) => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const disclaimerAccordionItems = useMemo(
    () => [
      {
        key: '1',
        heading: 'Disclaimer',
        content: disclaimer,
      },
    ],
    [disclaimer],
  );

  return (
    <LazyHydrate noWrapper whenVisible={{ rootMargin: '50px' }}>
      <Container as="footer" variant="footer">
        <Inner>
          <Grid variant="footer.main">
            {columns.map(({ key, title, content }) => (
              <Box {...{ key }}>
                <Text as="h4" variant="footer.title">
                  {title}
                </Text>
                <Box variant="footer.cms">{content}</Box>
              </Box>
            ))}
          </Grid>
        </Inner>
        <Box variant="footer.copy">
          <Inner>
            <Text as="p" variant="typo10">
              &copy;{year} {copy}
            </Text>
            {disclaimer ? (
              <Flex variant="footer.disclaimer">
                <Accordion
                  mode={AccordionMode.Simple}
                  items={disclaimerAccordionItems}
                />
              </Flex>
            ) : null}
          </Inner>
        </Box>
        <Box variant="footer.bottom">
          <Inner>
            <SelectLocation {...{ items }} />
          </Inner>
        </Box>
      </Container>
    </LazyHydrate>
  );
};

export default Footer;
