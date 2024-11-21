import { MiniSignal } from 'mini-signals';

export const Signals = {
  ERROR: new MiniSignal(),
  LOGIN: new MiniSignal(),
  LOGOUT: new MiniSignal(),
  NOTIFICATION: new MiniSignal(),
  PUSHER_NOTIFICATION: new MiniSignal(),
};
