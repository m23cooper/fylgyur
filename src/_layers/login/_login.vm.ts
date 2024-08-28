
import { Signals } from "@/signals";
import { useUserStore } from "@/_stores";
import { defineStore} from 'pinia';
import { ILoginParams, } from '@/types';

export interface ILoginLayerState
{
	login_error_msg: string;
	login_email: string;
	login_password: string;
	logout_binding: null | any,
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export const useLoginVM =  defineStore('login.view.model', {
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():ILoginLayerState => ({
		login_error_msg: "",
		login_email: "",
		login_password: "",
		logout_binding: null,
	}),

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
		// getLogin: (state) => state.login,
	},

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Actions
	//  -   Don't use fat arrow functions as 'this' will be incorrect
	//  -   Unhandled catch block errors are caught by a Pinia plugin - see @/_stores/DecoratedPinia.ts
	//  -   init() actions are checked by a plugin against an INITIALISED decoration - see @/_stores/DecoratedPinia.ts
	actions: {
		async login() {
			const params:ILoginParams = {
				client_id: this.login_email,
				client_secret: this.login_password,
			}

			this.login_error_msg = "";

			this.logout_binding = Signals.LOGOUT.add(this.onLogout);

			return await useUserStore().login()
				.catch((error) =>
				{
					console.log(`login.store ${error}`)
					this.login_error_msg = error.response?.data?.error || error.message;

					return Promise.reject(error)
				});
		},

		onLogout()
		{
			Signals.LOGOUT.detach(this.logout_binding);
			this.$reset();
		},
	},
})


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private



//////////////////////////////////////////////////////////////////////////////////////////////////
//  Interfaces/Types

