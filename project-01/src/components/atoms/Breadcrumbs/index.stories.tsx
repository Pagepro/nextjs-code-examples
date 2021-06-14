import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Breadcrumbs from '.';
import { demoBreadcrumbsLinks } from './consts';
import { BreadcrumbsProps } from './types';

const breadcrumbsStoriesMeta: Meta = {
  title: 'Atoms/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    items: {
      name: 'Items',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoBreadcrumbsLinks,
    },
  },
};

export default breadcrumbsStoriesMeta;

export const Base: Story<BreadcrumbsProps> = (args) => (
  <Breadcrumbs {...args} />
);
