import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { demoSelectLocationItems } from 'components/molecules/SelectLocation/consts';
import Footer from '.';
import { FooterProps } from './types';
import {
  demoBuyMethodsItems,
  demoCompanyItems,
  demoResourcesItems,
  demoRetailLocation,
  demoSellMethodsItems,
  demoSocialMediaItems,
} from './consts';

const footerStoriesMeta: Meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      values: [{ name: 'light', value: '#fff' }],
    },
  },
  argTypes: {
    buyMethodsLinks: {
      name: 'Buy Methods Links',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoBuyMethodsItems,
    },
    sellMethodsLinks: {
      name: 'Sell Methods Links',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoSellMethodsItems,
    },
    companyLinks: {
      name: 'Company Links',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoCompanyItems,
    },
    retailLocation: {
      name: 'Retail Location',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: demoRetailLocation,
    },
    phone: {
      name: 'Phone',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: '1 (877) 412-2646',
    },
    mail: {
      name: 'Mail',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue: 'help@xxx.com',
    },
    resourcesLinks: {
      name: 'Resources Links',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoResourcesItems,
    },
    socialMediaLinks: {
      name: 'Social Media Links',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoSocialMediaItems,
    },
    appStoreHref: {
      name: 'App Store Href',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue:
        'https://itunes.apple.com/ca/app/xxx-atm/xxx?mt=8',
    },
    googlePlayHref: {
      name: 'Google Play Href',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue:
        'https://play.google.com/store/apps/details?id=com.xxx.xxx',
    },
    copy: {
      name: 'Copy',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
      defaultValue:
        'xxxx | yyy',
    },
    items: {
      name: 'Items',
      type: { name: 'string', required: true },
      control: {
        type: 'object',
      },
      defaultValue: demoSelectLocationItems,
    },
  },
};

export default footerStoriesMeta;

export const Base: Story<FooterProps> = (args) => <Footer {...args} />;
