import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Cities from '.';
import { CitiesProps } from './types';
import { demoCitiesItems } from './consts';

const citiesStoriesMeta: Meta = {
  title: 'Molecules/Cities',
  component: Cities,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    items: {
      name: 'Items',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoCitiesItems,
    },
  },
};

export default citiesStoriesMeta;

export const Base: React.FC<CitiesProps> = (args) => <Cities {...args} />;
