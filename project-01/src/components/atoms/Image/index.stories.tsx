import React, { Fragment } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Image from '.';
import { ImageProps } from './types';

const imagesStoriesMeta: Meta = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: {
      name: 'Image src',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: '/assets/images/placeholder.png',
    },
    alt: {
      name: 'Image alt',
      control: {
        type: 'text',
      },
      defaultValue: 'Photo',
    },
    lazy: {
      name: 'With lazy loading',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    variant: {
      table: { disable: true },
      defaultValue: 'base',
    },
  },
};

export default imagesStoriesMeta;

export const Base: React.FC<ImageProps> = ({ src, ...args }) => (
  <Fragment>
    <Image {...{ src, ...args }} />
    <Image src="https://source.unsplash.com/600x400/?nature?r=1" {...args} />
    <Image src="https://source.unsplash.com/600x400/?nature?r=2" {...args} />
    <Image src="https://source.unsplash.com/600x400/?nature?r=3" {...args} />
  </Fragment>
);
