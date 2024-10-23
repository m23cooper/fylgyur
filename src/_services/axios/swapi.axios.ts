import ErrorManager from '@/utils/ErrorManager';
import { setup } from 'axios-cache-adapter';

// Create `axios-cache-adapter` instance
const _axios = setup({
  baseURL: `https://swapi.dev/api/`,
  timeout: 10000,
  withCredentials: false,
});

// Add a request interceptor
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //  TODO:   Add uuid
    console.group(`>>>>>>    swapi.request ${config.baseURL}${config.url}`);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('-----     swapi.axios.request.error ' + error);
    ErrorManager.onServiceError(error);
    return Promise.reject(error);
  },
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    //  TODO:   Update uuid
    console.log(
      '<<<<      swapi.axios.response ' +
        (Number(response.headers['x-ratelimit-limit']) -
          Number(response.headers['x-ratelimit-remaining'])) +
        'ms ' +
        response.config.url,
    );
    console.groupEnd();
    return response;
  },
  function (error) {
    // Do something with response error
    console.log('-----     swapi.axios.response.error ' + error);
    console.groupEnd();
    ErrorManager.onServiceError(error);
    return Promise.reject(error);
  },
);

export const swapiAxios = _axios;
