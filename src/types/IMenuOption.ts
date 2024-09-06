import { ROUTE_NAMES } from '@/enum';

export interface IMenuOption {
  name: ROUTE_NAMES;
  icon: string;
  title: string;
  menu: number;
}
