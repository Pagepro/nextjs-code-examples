import { SelectLocationProps } from 'components/molecules/SelectLocation/types';

export interface FooterLinksItem {
  key: string;
  label: string;
  href: string;
}

export interface FooterColumn {
  key: string;
  title: string;
  content?: ReactComponentReturnType;
}

export interface FooterProps extends SelectLocationProps {
  columns: FooterColumn[];
  copy?: string;
  disclaimer?: string;
}
