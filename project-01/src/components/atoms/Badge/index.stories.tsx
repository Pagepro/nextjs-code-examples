import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { badgeIcons } from 'components/styles/Icons/consts';
import { enumValues } from 'utils/storybook';
import Badge from '.';
import { BadgeProps, BadgeVariant } from './types';

interface BadgeStoryProps extends Omit<BadgeProps, 'icon'> {
  icon: string;
}

const badgesStoriesMeta: Meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    backgrounds: {
      values: [{ name: 'light', value: '#fff' }],
    },
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: enumValues(BadgeVariant),
      },
      defaultValue: BadgeVariant.Primary,
    },
  },
};

export default badgesStoriesMeta;

const BadgeWithIconTemplate: Story<BadgeStoryProps> = ({ icon, ...args }) => (
  <Badge icon={badgeIcons.find(({ name }) => name === icon)?.icon} {...args} />
);

export const BadgeWithIcon = BadgeWithIconTemplate.bind({});
BadgeWithIcon.argTypes = {
  icon: {
    name: 'Icon Component',
    control: {
      type: 'select',
      options: badgeIcons.map(({ name }) => name),
    },
    defaultValue: 'IconBitcoin',
  },
};

const BadgeWithImageTemplate: Story<BadgeProps> = (args) => <Badge {...args} />;

export const BadgeWithImage = BadgeWithImageTemplate.bind({});
BadgeWithImage.argTypes = {
  src: {
    name: 'Image src',
    type: { name: 'string', required: true },
    control: {
      type: 'text',
    },
    defaultValue: '/assets/svg/bitcoin2.svg',
  },
  alt: {
    name: 'Image alt',
    control: {
      type: 'text',
    },
    defaultValue: 'Bit Coin',
  },
};
