import { internalAxios as axios } from '@/_services/axios';

type TLoginParams = {
  email: string;
  password: string;
};
type TRegisterParams = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};
type TForgotParams = {
  email: string;
};
type TResetParams = {
  current: string;
  password: string;
  confirm: string;
};

const _service = {
  login: ({ email, password }: TLoginParams) =>
    axios.post('/login', { email, password }),

  register: ({ name, email, password, confirm }: TRegisterParams) =>
    axios.post('/register', { name, email, password, confirm }),

  forgotPassword: ({ email }: TForgotParams) =>
    axios.post('/forgot-password', { email }),

  resetPassword: ({ current, password, confirm }: TResetParams) =>
    axios.post('/forgot-password', { current, password, confirm }),

  logout: ({}) => axios.post('/logout', {}),
};

export const userService = _service;
