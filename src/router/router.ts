import { ROUTE_NAMES } from '@/enum';
import { FontIconType } from '@/icons/FontIconConstants';
import { createRouter, createWebHistory } from 'vue-router';
import { useUIStore, useUserStore } from '@/_stores';
import { filter as _filter, find as _find } from 'lodash-es';
import type { TRoute } from '@/types';

export const routes: TRoute[] = [
  {
    menu: -10,
    name: ROUTE_NAMES.HOME,
    path: '/',
    title: 'Fantastorical Flow',
    fontIconType: FontIconType.HOME,
    component: () =>
      import(
        /* webpackChunkName: "Routes" */
        '@/_layers/home/_home.layer.vue'
      ),
  },
  {
    menu: -9,
    name: ROUTE_NAMES.FORMS,
    path: '/forms',
    title: 'Fantastorical Flow',
    fontIconType: FontIconType.HOME,
    component: () =>
      import(
        /* webpackChunkName: "Routes" */
        '@/_layers/forms/_forms.layer.vue'
      ),
  },
  {
    menu: -8,
    name: ROUTE_NAMES.LOGIN,
    path: '/login',
    title: 'Login',
    fontIconType: FontIconType.HOME,
    component: () =>
      import(
        /* webpackChunkName: "Routes" */
        '@/_layers/login/_login.layer.vue'
      ),
  },
  {
    menu: -7,
    name: ROUTE_NAMES.LOGOUT,
    path: '/logout',
    title: 'Logout',
    fontIconType: FontIconType.HOME,
    component: () =>
      import(
        /* webpackChunkName: "Routes" */
        '@/_layers/logout/_logout.layer.vue'
      ),
  },
  {
    menu: -6,
    name: ROUTE_NAMES.REGISTER,
    path: '/register',
    title: 'Register',
    fontIconType: FontIconType.HOME,
    component: () =>
      import(
        /* webpackChunkName: "Routes" */
        '@/_layers/register/_register.layer.vue'
      ),
  },
];

const _router = createRouter({
  history: createWebHistory(),
  routes,
});

_router.beforeEach(async (to, from) => {
  console.log(`Router - beforeEach ${String(from.name)} -> ${String(to.name)}`);
  if (String(from.name) !== String(to.name)) {
    // await useUserStore().checkUserAccess();
    if (useUserStore().isLoggedIn) _router.resolve(to);
  } else {
    // throw new Error(`shouldn't be redirecting to the same page`)
  }

  _router.resolve(to);
});

export const router = _router;

export const menuOptions: TRoute[] = _filter(routes, (rt) => rt.menu > -1).sort(
  (route1, route2) => route1.menu - route2.menu,
);
