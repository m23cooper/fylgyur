import { Signals } from "@/signals";
import type { IRoute, IUrlQuery } from "@/types";
import {acceptHMRUpdate, defineStore} from 'pinia';

import { ROUTE_NAMES } from "@/enum";
import type { LocationQueryRaw, RouteLocationNormalizedLoaded } from "vue-router";

import { router, routes } from "@/router/router";
import { find as _find, } from 'lodash-es';

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IUIState
{
	isInit: boolean;
	isLoading: boolean;
	loadingMsg: string;
}

export const useUIStore = defineStore('_ui.store', {
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():IUIState => ({
		isInit: true,
		isLoading: true,
		loadingMsg: "LOADING...",
	}),
	// persist: {
	// 	enabled: true,
	// 	strategies: [
	// 		// { key: 'route', storage: sessionStorage, paths: [ 'route', ] },
	// 		{ key: 'route', storage: localStorage, paths: ['route',  ] },
	// 	],
	// },

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
		selectedRoute: (state): IRoute => {
			const current = router.currentRoute.value;
			const route: any = _find(routes, { 'name': current.name});
			return {
				component: route?.component,
				fontIconType: String(route?.fontIconType),
				menu: route?.menu,
				name: route?.name,
				fullPath: String(route?.fullPath),
				path: String(route?.path),
				title: String(route?.title),
			}
		},
	},

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Actions
	//  -   Don't use fat arrow functions as 'this' will be incorrect
	//  -   Unhandled catch block errors are caught by a Pinia plugin - see @/_stores/DecoratedPinia.ts
	//  -   init() actions are checked by a plugin against an INITIALISED decoration - see @/_stores/DecoratedPinia.ts
	actions: {
		init() {
			//  @ts-ignore
			if(this.INITIALISED) return;
			Signals.LOGOUT.add(this.onLogout);
		},

		async goRoute(name: ROUTE_NAMES, query?:LocationQueryRaw, )
		{
			this.showLoading(name);
			await router.push({ name, query, });
			this.isLoading = false;
		},
		onAppLoaded() {
			this.isLoading = false;
			this.isInit = false;
		},
		showLoading(msg: string = "Loading...") {
			this.loadingMsg = msg;
			this.isLoading = true;
		},
		hideLoading() {
			this.isLoading = false;
		},
		onLogout() {
			this.isInit = false;
		}
	},
})


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private



//////////////////////////////////////////////////////////////////////////////////////////////////
//  Interfaces/Types

