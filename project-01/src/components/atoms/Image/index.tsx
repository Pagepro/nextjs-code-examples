/** @jsxImportSource theme-ui */
import React, { Fragment } from 'react';
import { Image as ThemedImage } from 'theme-ui';
import NextImage from 'next/image';

import { ImageProps } from './types';

const Image: React.FC<ImageProps> = ({
  src,
  alt = 'Photo',
  width,
  height,
  variant = 'base',
  priority,
  layout = 'intrinsic',
  ...props
}) =>
  width && height ? (
    <NextImage {...{ src, alt, width, height, priority, layout, ...props }} />
  ) : (
    <Fragment>
      {layout === 'fill' ? (
        <NextImage {...{ src, alt, priority, layout, ...props }} />
      ) : (
        <ThemedImage {...{ src, alt, variant, ...props }} />
      )}
    </Fragment>
  );

export default Image;
