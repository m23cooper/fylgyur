import ErrorManager from '@/utils/ErrorManager';
import { Signals } from '@/signals';
import { useUIStore } from '@/_stores';
import { userService } from '@/_services';
import type { TLoginParams } from '@/types';
import type { TUser, TUserPermissions } from '@/types';
import { defineStore, DefineStoreOptions, StateTree } from 'pinia';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export interface IUserStoreState {
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

const _service = userService;

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore
export const useUserStore = defineStore('_user.store', {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  State
  state: (): IUserStoreState => ({
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
      Signals.LOGOUT.add(this.onLogout);

      // this.isLoggedIn = await kindeClient.isAuthenticated();
      const auth = getAuth();
      this.user = auth.currentUser;
      console.log(`_user.store.init: isLoggedIn=${this.isLoggedIn}`);
      onAuthStateChanged(auth, (currentUser) => {
        this.user = currentUser;
      });

      return;
    },
    async loginWithEmail({ email, password }) {
      try {
        const something = await _service.loginWithEmail({ email, password });
        let test = 0;
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
    async registerWithEmail({ email, password }) {
      try {
        await _service.registerWithEmail({ email, password });
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
    async signInWithGoogle() {
      try {
        const userCredential = await _service.signInWithGoogle();
        let test = 0;
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
    async signInWithFacebook() {
      try {
        await _service.signInWithFacebook();
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
    async signInWithTwitter() {
      try {
        await _service.signInWithTwitter();
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
    async signInWithGithub() {
      try {
        await _service.signInWithGithub();
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
    async onLogout() {
      try {
        await _service.logout();
      } catch (error) {
        ErrorManager.onServiceError(error);
      }
    },
  },
});
