import ErrorManager from '@/utils/ErrorManager';
import axios from 'axios';

const { VITE_AI_URL } = import.meta.env;

const _axios = axios.create({
  baseURL: `${VITE_AI_URL}`,
  timeout: 10000,
  withCredentials: false,
  headers: {
    // 'X-API-KEY': String(VITE_APP_DOCUMENT_SERVICE_KEY),
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //  TODO:   Add uuid
    console.group(`>>>>>>    ai.axios.request ${config.baseURL} ${config.url}`);
    return config;
  },
  function (error) {
    // Do something with request error
    console.log('-----     ai.axios.request.error ' + error);
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
      '<<<<      ai.axios.response ' +
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
    console.log('-----     ai.axios.response.error ' + error);
    console.groupEnd();
    ErrorManager.onServiceError(error);
    return Promise.reject(error);
  },
);

export const aiAxios = _axios;
