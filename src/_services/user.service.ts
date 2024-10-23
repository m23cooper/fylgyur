import { internalAxios as axios } from '@/_services/axios';

import {
  TForgotPasswordParams,
  TLoginParams,
  TRegisterParams,
  TResetParams,
} from '@/types';
import { AxiosResponse } from 'axios';

export const userService = {
  login: ({ email, password }: TLoginParams): Promise<AxiosResponse> =>
    axios.post('/login', { email, password }),

  register: ({
    name,
    email,
    password,
    confirm,
  }: TRegisterParams): Promise<AxiosResponse> =>
    axios.post('/register', { name, email, password, confirm }),

  forgotPassword: ({ email }: TForgotPasswordParams): Promise<AxiosResponse> =>
    axios.post('/forgot-password', { email }),

  resetPassword: ({
    current,
    password,
    confirm,
  }: TResetParams): Promise<AxiosResponse> =>
    axios.post('/reset-password', { current, password, confirm }),

  logout: (): Promise<AxiosResponse> => axios.post('/logout', {}),
};
