import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import {
  first as _first,
  forOwn as _forOwn,
  last as _last,
  map as _map,
  remove as _remove,
} from 'lodash-es';

export function generateUUID(): string {
  return uuidv4();
}

export function formatDateForUI(date: string | number): string {
  const d = dayjs(date).format('DD/MM/YYYY');
  if (d === 'Invalid Date') {
    return 'No date set';
  }
  return d;
}

export function formatDateForServer(date: string | number): string {
  const d = dayjs(date).format('YYYY-MM-DD');
  return d;
}
