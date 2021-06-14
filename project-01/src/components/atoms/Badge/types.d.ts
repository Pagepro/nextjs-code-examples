import { BadgeProps as ThemedBadgeProps } from 'theme-ui';
import { ImageProps } from '../Image/types';

export enum BadgeVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface BadgeProps
  extends Omit<ThemedBadgeProps, 'ref'>,
    Omit<ImageProps, 'src'> {
  variant?: BadgeVariant;
  icon?: SvgComponentType;
  src?: string;
}
