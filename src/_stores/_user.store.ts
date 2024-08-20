import ErrorManager from "@/utils/ErrorManager";
import { Signals } from "@/signals";
import { useUIStore } from "@/_stores";
import { userService } from "@/_services";
import { ILoginParams, } from '@/types';
import { IUser, IUserPermissions, } from "@/types";
import {defineStore} from "pinia";
import {kindeClient} from "@/kinde/kindeClient";

export interface IUserStoreState
{
	permissions: IUserPermissions;
	isLoggedIn: boolean;
	token: string | null;
	user: IUser,
	_retries: number,
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore
export const useUserStore = defineStore('_user.store', {

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():IUserStoreState => ({
		permissions: {},
		isLoggedIn: false,
		token: null,
		user: <IUser>{},
		_retries: 2,
	}),
	// persist: {
	// 	enabled: true,
	// 	strategies: [
	// 		// { key: 'user', storage: sessionStorage, paths: [ 'user', ] },
	// 		{ key: 'fab-token', storage: localStorage, paths: ['token', ] },
	// 		{ key: 'fab-user', storage: localStorage, paths: ['user', ] },
	// 	],
	// },

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
		//canUserAccess: (state) => state.canAccess,
		isDevUser: (state) => state.user.uuid === "",
	},

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Actions
	//  -   Don't use fat arrow functions as 'this' will be incorrect
	//  -   Unhandled catch block errors are caught by a Pinia plugin - see @/_stores/DecoratedPinia.ts
	//  -   init() actions are checked by a plugin against an INITIALISED decoration - see @/_stores/DecoratedPinia.ts
	actions: {
		async init() {
			//  @ts-ignore
			if (this.INITIALISED) return Promise.resolve();
			Signals.LOGOUT.add(this.onLogout);

			const isAuthenticated = await kindeClient.isAuthenticated();

			return Promise.resolve(isAuthenticated);
		},
		async handleLogin() {
			const url = await kindeClient.login();
			// Redirect
			window.location.href = url.toString();
		},

		async handleRegister() {
			const url = await kindeClient.register();
			// Redirect
			window.location.href = url.toString();
		},
		onLogout() {
			this.isLoggedIn = false;
		}
	},
})



