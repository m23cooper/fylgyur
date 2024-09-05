import { ROUTE_NAMES } from '@/enum';

export interface IRoute {
  component: () => void;
  fontIconType: string;
  menu: number;
  name: ROUTE_NAMES;
  fullPath?: string;
  path: string;
  title: string;
}
