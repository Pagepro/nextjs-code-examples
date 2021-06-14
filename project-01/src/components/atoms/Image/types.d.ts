import { ImageProps as NextImageProps } from 'next/image';
import { ImgHTMLAttributes } from 'react';
import { ImageProps as ThemedImageProps } from 'theme-ui';

export interface ImageProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    NextImageProps,
    ThemedImageProps {
  src: string;
  priority?: boolean;
  layout?: LayoutValue;
}
