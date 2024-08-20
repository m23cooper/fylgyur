

import ErrorManager from "@/utils/ErrorManager";
import axios from "axios";
import localforage from 'localforage'
// @ts-ignore
import memoryDriver from 'localforage-memoryStorageDriver'
import { setup} from 'axios-cache-adapter'
import { useUserStore } from "@/_stores";

// import axiosThrottle from 'axios-throttle';
//pass axios object and value of the delay between requests in ms


// import axiosRequestThrottle from 'axios-request-throttle';
// axiosRequestThrottle.use(axios, { requestsPerSecond: 1 });


const {
	VITE_APP_API_URL,
	VITE_APP_API_VERSION,
} = import.meta.env;

// Create `localforage` instance
const forageStore = localforage.createInstance({
	// List of drivers used
	driver: [
		localforage.INDEXEDDB,
		localforage.LOCALSTORAGE,
		memoryDriver._driver
	],
	// Prefix all storage keys to prevent conflicts
	name: 'fantastorical'
})

// Create `axios-cache-adapter` instance
const _axios = setup({
	baseURL: `${VITE_APP_API_URL}/${VITE_APP_API_VERSION}`,
	timeout: 10000,
	withCredentials: false,

	cache: {
		maxAge: 1000, // off by default
		store: localforage,
		exclude: {
			// Only exclude PUT, PATCH and DELETE methods from cache
			methods: ['put', 'patch', 'delete']
		}
	},
});

// Add a request interceptor
_axios.interceptors.request.use(
	async function (config) {
		// Do something before request is sent
		const token = useUserStore().token;
		config.headers = config.headers || {};
		config.headers.Authorization = `Bearer ${token}`;
		// console.group(`>>>>>>    internal.request ${config.baseURL}${config.url} token:${token}`);
		return config;
	},
	function (error) {
		// Do something with request error
		console.log("-----     internal.axios.axios.request.error " + error);
		ErrorManager.onServiceError(error);
		return Promise.reject(error);
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	function (response) {
		// Do something with response data
		// console.log("<<<<      internal.axios.axios.response " + (Number(response.headers['x-ratelimit-limit'] )- Number(response.headers['x-ratelimit-remaining'])) + "ms " + response.config.url);
		// console.groupEnd();
		return response;
	},
	function (error) {
		// Do something with response error
		console.log("-----     internal.axios.axios.response.error " + error);
		console.groupEnd();
		ErrorManager.onServiceError(error);
		return Promise.reject(error);
	}
);

// axiosThrottle.init(_axios, 10000)

export const internalAxios = _axios
