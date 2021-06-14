export interface BreadcrumbsItem {
  text: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
}
