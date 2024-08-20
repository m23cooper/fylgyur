import { ROUTE_NAMES } from "@/enum";
import { FontIconType } from "@/icons/FontIconConstants";
import { createRouter, createWebHistory } from "vue-router";
import {useUIStore, useUserStore} from "@/_stores";
import { filter as _filter, find as _find } from 'lodash-es'
import { IRoute } from '@/types';

export const routes:IRoute[] = [
	{
		menu: -10,
		name: ROUTE_NAMES.HOME,
		path: "/",
		title: "Fantastorical Flow",
		fontIconType: FontIconType.HOME,
		component: () =>
			import(
				/* webpackChunkName: "Dashboard" */
				"@/_layers/home/_home.layer.vue"
			)
	},
	{
		menu: -9,
		name: ROUTE_NAMES.WELCOME,
		path: "/welcome",
		title: "Fantastorical Flow",
		fontIconType: FontIconType.HOME,
		component: () =>
			import(
				/* webpackChunkName: "Dashboard" */
				"@/_layers/welcome/_welcome.layer.vue"
				)
	},
];

const _router = createRouter({
  history: createWebHistory(),
  routes
});

_router.beforeEach(async (to, from, ) => {
	console.log(`Router - beforeEach ${String(from.name)} -> ${String(to.name)}`);
	if(String(from.name) !== String(to.name))
	{
		await useUserStore().checkUserAccess();
		if (useUserStore().isLoggedIn) _router.resolve(to);
	} else {
		// throw new Error(`shouldn't be redirecting to the same page`)
	}
});

export const router = _router;



export const menuOptions: IRoute[] = _filter(routes, rt => rt.menu > -1).sort( (route1, route2) => route1.menu - route2.menu);
export function findRouteData (name:string = useUIStore().currentRoute.path): IRoute {
	return _find(routes, rt => rt.name === name) || <IRoute>{};
}
