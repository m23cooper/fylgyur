import { Signals } from "@/signals";
import type { IRoute, IUrlQuery } from "@/types";
import {acceptHMRUpdate, defineStore} from 'pinia';

import { ROUTE_NAMES } from "@/enum";
import type { LocationQueryRaw, RouteLocationNormalizedLoaded } from "vue-router";
import { useRouter } from "vue-router";
import { router, routes } from "@/router";
import { find as _find, } from 'lodash-es';

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IUIState
{
	isInit: boolean;
	isLoading: boolean;
	loadingMsg: string;
}

export const useUIStore = defineStore('_ui', {
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
		//  @ts-ignore: vue-index weirdness
		currentRoute: (state): IRoute => {
			const current = useRouter().currentRoute.value;
			const route: any = _find(routes, { 'name': current.name });
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
		//  @ts-ignore: vue-index weirdness
		urlQuery: (state): IUrlQuery => {
			const query = useRouter().currentRoute.value.query;
			return {
				app_uuid: String(query.app_uuid),
				pen_uuid: String(query.pen_uuid),
				emp_uuid: String(query.emp_uuid),
				prv_uuid: String(query.prv_uuid),
				type: String(query.type),
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
			// this.$patch( (state) => state.currentRoute = findRouteData() );
		},
		// setLoading({ loading, }: { loading: boolean, })
		// {
		// 	this.isLoading = loading;
		// },
		// setLoggedIn({ loggedIn, }: { loggedIn: boolean, })
		// {
		// 	this.isLoggedIn = loggedIn;
		// },
		checkCanAccess()
		{

		},

		async goRoute(name: ROUTE_NAMES, query:LocationQueryRaw, )
		{
			this.showLoading(name);
			await router.push({ name, query, });
			this.isLoading = false;
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

