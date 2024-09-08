import { ROUTE_NAMES } from '@/enum';

export interface TRoute {
  component: () => void;
  fontIconType: string;
  menu: number;
  name: ROUTE_NAMES;
  fullPath?: string;
  path: string;
  title: string;
}
