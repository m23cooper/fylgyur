import ErrorManager from "@/utils/ErrorManager";
import axios from "axios";
import { setup } from 'axios-cache-adapter'

const {
	VITE_APP_DOCUMENT_SERVICE_URL,
	VITE_APP_DOCUMENT_SERVICE_KEY,
	VITE_APP_API_VERSION,
} = import.meta.env;

// Create `axios-cache-adapter` instance
const _axios = setup({
	baseURL: `${VITE_APP_DOCUMENT_SERVICE_URL}/${VITE_APP_API_VERSION}`,
	timeout: 10000,
	withCredentials: false,
	headers: {
		'X-API-KEY': String(VITE_APP_DOCUMENT_SERVICE_KEY),
		"Content-Type": "application/json"
	},
	cache: {
		maxAge: 15 * 60 * 1000,
		exclude: {
			// Only exclude PUT, PATCH and DELETE methods from cache
			methods: ['put', 'patch', 'delete']
		}
	},
});

// Add a request interceptor
_axios.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		//  TODO:   Add uuid
		console.group(`>>>>>>    external.request ${config.baseURL}${config.url}`);
		return config;
	},
	function (error) {
		// Do something with request error
		console.log("-----     external.axios.request.error " + error);
		ErrorManager.onServiceError(error);
		return Promise.reject(error);
	}
);

// Add a response interceptor
_axios.interceptors.response.use(
	function (response) {
		// Do something with response data
		//  TODO:   Update uuid
		console.log("<<<<      external.axios.response " + (Number(response.headers['x-ratelimit-limit'] )- Number(response.headers['x-ratelimit-remaining'])) + "ms " + response.config.url);
		console.groupEnd();
		return response;
	},
	function (error) {
		// Do something with response error
		console.log("-----     external.axios.response.error " + error);
		console.groupEnd();
		ErrorManager.onServiceError(error);
		return Promise.reject(error);
	}
);

export const externalAxios = _axios
