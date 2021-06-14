export interface CityItem {
  key: string;
  label: string;
  href: string;
}

export interface CitiesProps {
  items: CityItem[];
}

export interface CityButtonItem {
  key: string;
  label: string;
  onClick?: () => void;
}

export interface CitiesButtonsProps {
  items: CityButtonItem[];
}
