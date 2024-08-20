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

			return await this.checkUserAccess(true);
		},
		async checkUserAccess(init: boolean = false) {
			const isAuthenticated = await kindeClient.isAuthenticated();
			console.log(`_user.store.checkUserAccess ${isAuthenticated}`);
			if(this.token === null) return
			return await userService.fetchUserAccess()
				.then( async ({ data }) => {
					//  mutate state
					this.$patch( state => {
						if (data.token && String(data.token) !== String(state.token)) {
							state.token = data.token;
						}
					})
					console.log(`_user.store.checkUserAccess - succeeded`);
					return Promise.resolve(this.isLoggedIn);
				})
				.catch((error) => {
					console.log(`_user.store.checkUserAccess - retries left:${this._retries}`);
					if (!this.isLoggedIn) {
						//  reset, no error - won't dispatch Signals.LOGOUT cos user isn't logged in
						this.logout();
					} else {
						//  lost the session?  glitch in the Matrix?
						if (this._retries === 0) {
							alert(`Session fail! ${ error }`);
							//  reset, error - dispatches Signals.LOGOUT if the user is logged in
							this.logout(error);
						} else {
							this._retries--;
							setTimeout(async () => await this.checkUserAccess(), 1000);
						}
					}

					return Promise.resolve(error)
				});
		},
		async login(params:ILoginParams) {
			// return await loginService.attemptLogin(params)
			// 	.then( async ({ data }) => {
			// 		this.token = data.access_token
			// 		this.canAccess = (this.token !== null && this.token !== "");
			//
			// 		await this.loadLoggedInUser()
			// 		// await this.loadUserPermissions()
			//
			// 		return Promise.resolve(data)
			// 	})
		},
		logout(error?: boolean) {
			this.token = null;
			this._retries = 2;
			if (error) ErrorManager.onActionError(error);
			if (this.isLoggedIn) Signals.LOGOUT.dispatch();
		},
		async loadLoggedInUser() {
			return await userService.fetchLoggedInUser( )
				.then(({ data }) => {
					console.log(`user.loadLoggedInUser`);
					// console.dir(data);
					//  mutate state
					this.user = data;
					Signals.LOGIN.dispatch();
				});
		},
		async loadUserPermissions()
		{
			return await userService.fetchUserPermissions( )
				.then(({ data }) => {
					//  mutate state
					this.permissions = data;

					// let permissionsArray = state.global.user.roles.map(r =>
					// 	r.permissions.map(p => p.name)
					// );
					//
					// return [].concat.apply([], permissionsArray);
				});
		},
		onLogout() {
			this.isLoggedIn = false;
		}
	},
})



