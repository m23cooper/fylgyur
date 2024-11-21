import ErrorManager from '@/utils/ErrorManager';
import { Signals } from '@/signals';
import { swapiService, userService } from '@/_services';
import type { TLoginParams } from '@/types';
import type { TUser, TUserPermissions } from '@/types';
import { defineStore, DefineStoreOptions, StateTree } from 'pinia';
import { AUTH_STATE } from '@/enum/AUTH_STATE';
import { TForgotPasswordParams, TRegisterParams, TResetParams } from '@/types';
import { internalAxios as axios } from '@/_services/axios';

export interface IUserStoreState {
  authState: AUTH_STATE;
  permissions: TUserPermissions;
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
    authState: AUTH_STATE.LOGGED_OUT,
    permissions: {},
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
    pick: ['user'],
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Getters
  getters: {
    //canUserAccess: (state) => state.canAccess,
    isLoggedIn: (state) => state.user !== null,
    isDevUser: (state) => state.user?.uuid === '',
  },

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Actions
  //  -   Don't use fat arrow functions as 'this' will be incorrect
  //  -   Unhandled catch block errors are caught by a Pinia plugin - see @/_stores/DecoratedPinia.ts
  //  -   init() actions are checked by a plugin against an INITIALISED decoration - see @/_stores/DecoratedPinia.ts
  actions: {
    async init() {
      //  @ts-ignore
      if (this.INITIALISED) return this;
      Signals.LOGOUT.add(this.logout);

      //  TODO: is the user returning to a session?

      return;
    },

    setAuthState(state: AUTH_STATE) {
      this.authState = state;
    },

    async login({ email, password }: TLoginParams) {
      const result = await userService.login({ email, password });
    },

    async register({ name, email, password, confirm }: TRegisterParams) {
      const result = await userService.register({
        name,
        email,
        password,
        confirm,
      });
    },

    async forgotPassword({ email }: TForgotPasswordParams) {
      const result = await userService.forgotPassword({ email });
    },

    async resetPassword({ current, password, confirm }: TResetParams) {
      const result = await userService.resetPassword({
        current,
        password,
        confirm,
      });
    },

    async logout() {
      try {
        await userService.logout();
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
      this.setAuthState(AUTH_STATE.LOGGED_OUT);
    },

    async loadFilms() {
      return await swapiService.getFilms({}).then((res) => {
        console.log(`_user.store.loadFilms ${res.data.results}`);
        return res.data.results;
      });
    },
  },
});
