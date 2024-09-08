import ErrorManager from '@/utils/ErrorManager';
import { Signals } from '@/signals';
import { useUIStore } from '@/_stores';
import { userService } from '@/_services';
import type { TLoginParams } from '@/types';
import type { TUser, TUserPermissions } from '@/types';
import { defineStore, DefineStoreOptions, StateTree } from 'pinia';
import { kindeClient } from '@/kinde/kindeClient';

export interface IUserStoreState {
  permissions: TUserPermissions;
  isLoggedIn: boolean;
  token: string | undefined;
  user: any;
  userProfile: any;
  _retries: number;
}

// interface PersistedStoreOptions<Id, S, G, A> extends DefineStoreOptions<Id, S, G, A> {
// 	persist?: {
// 			key: string;
// 			storage: Storage;
// 			paths: [];
// 	};
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore
export const useUserStore = defineStore('_user.store', {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  State
  state: (): IUserStoreState => ({
    permissions: {},
    isLoggedIn: false,
    token: undefined,
    user: null,
    userProfile: null,
    _retries: 2,
  }),

  persist: {
    // 	// { key: 'user', storage: sessionStorage, paths: [ 'user', ] },
    // 	// { key: 'fab-token', storage: localStorage, paths: ['token', ] },
    key: 'user',
    storage: localStorage,
    paths: ['user'],
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Getters
  getters: {
    //canUserAccess: (state) => state.canAccess,
    isDevUser: (state) => state.user.uuid === '',
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

      this.isLoggedIn = await kindeClient.isAuthenticated();
      console.log(`_user.store.init: isLoggedIn=${this.isLoggedIn}`);
      if (this.isLoggedIn) {
        this.user = await kindeClient.getUser();
        this.userProfile = await kindeClient.getUserProfile();
      }

      return Promise.resolve(this.isLoggedIn);
    },
    async login() {
      const url = await kindeClient.login();
      // Redirect
      window.location.href = url.toString();
    },
    async register() {
      const url = await kindeClient.register();
      // Redirect
      window.location.href = url.toString();
    },
    async logout() {
      const url = await kindeClient.logout();
      this.user = null;
      // Redirect
      window.location.href = url.toString();
    },
    onLogout() {
      this.isLoggedIn = false;
    },
  },
});
