import { internalAxios as axios, swapiAxios as swapi } from '@/_services/axios';

import {
  TForgotPasswordParams,
  TLoginParams,
  TRegisterParams,
  TResetParams,
} from '@/types';

const _service = {
  login: ({ email, password }: TLoginParams) =>
    axios.post('/login', { email, password }),

  register: ({ name, email, password, confirm }: TRegisterParams) =>
    axios.post('/register', { name, email, password, confirm }),

  forgotPassword: ({ email }: TForgotPasswordParams) =>
    axios.post('/forgot-password', { email }),

  resetPassword: ({ current, password, confirm }: TResetParams) =>
    axios.post('/reset-password', { current, password, confirm }),

  logout: () => axios.post('/logout', {}),
};

export const userService = _service;
