import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from 'theme-ui';

import Newsletter from '.';
import { NewsletterProps } from './types';

const newsletterStoriesMeta: Meta = {
  title: 'Molecules/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      name: 'Title',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: 'Subscribe to stay updated on the News!',
    },
  },
};

export default newsletterStoriesMeta;

export const Base: Story<NewsletterProps> = (args) => (
  <Box sx={{ maxWidth: '35rem' }}>
    <Newsletter {...args} />
  </Box>
);
