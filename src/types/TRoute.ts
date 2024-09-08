import { ROUTE_NAMES } from '@/enum';

export type TRoute = {
  component: () => void;
  fontIconType: string;
  menu: number;
  name: ROUTE_NAMES;
  fullPath?: string;
  path: string;
  title: string;
};
