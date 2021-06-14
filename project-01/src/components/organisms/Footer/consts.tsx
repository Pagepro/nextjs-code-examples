import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

import routes from 'setup/consts/routes';
import { FooterLinksItem } from './types';

export const demoBuyMethodsItems: FooterLinksItem[] = [
  {
    key: '1',
    label: 'Bitcoin ATM',
    href: routes.bitcoinATM,
  },
  {
    key: '2',
    label: 'xxx',
    href: 'https://xxx.com/xx-v3/',
  },
  {
    key: '3',
    label: 'xxx e-Tranfer',
    href: 'https://xxx.ca/#xx-xx',
  },
];

export const demoSellMethodsItems: FooterLinksItem[] = [
  {
    key: '1',
    label: 'Bitcoin ATM',
    href: routes.bitcoinATMToronto,
  },
];

export const demoCompanyItems: FooterLinksItem[] = [
  {
    key: '1',
    label: 'About',
    href: routes.about,
  },
  {
    key: '2',
    label: 'Careers',
    href: routes.careers,
  },
  {
    key: '3',
    label: 'Press',
    href: routes.press,
  },
];

export const demoResourcesItems: FooterLinksItem[] = [
  {
    key: '1',
    label: 'Compliance Policy',
    href: routes.compliancePolicy,
  },
  {
    key: '2',
    label: 'Privacy Policy',
    href: routes.privacyPolicy,
  },
  {
    key: '3',
    label: 'Terms Of Service',
    href: routes.termsService(''),
  },
];

export const demoSocialMediaItems: FooterLinksItem[] = [
  {
    key: '1',
    label: 'Twitter',
    href: 'https://twitter.com/xxx',
  },
  {
    key: '2',
    label: 'Reddit',
    href: 'https://www.reddit.com/user/xxx/',
  },
  {
    key: '3',
    label: 'Instagram',
    href: 'https://www.instagram.com/xxx/',
  },
  {
    key: '4',
    label: 'Facebook',
    href: 'https://www.facebook.com/xxx/',
  },
  {
    key: '5',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/xxx',
  },
  {
    key: '6',
    label: 'News',
    href: routes.news,
  },
];

export const demoRetailLocation = renderToStaticMarkup(
  <p>
    28 London
    <br />
    UK, GB
    <br />
    M5B 1Y4
  </p>,
);
