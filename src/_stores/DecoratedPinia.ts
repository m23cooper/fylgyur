import ErrorManager from "@/utils/ErrorManager";
import { createPinia, } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { ref } from "vue";
import { debounce as _debounce } from 'lodash-es'

import 'pinia'

declare module 'pinia' {
	export interface PiniaCustomStateProperties<S> {
		INITIALISED: boolean
	}
}


const _pinia = createPinia();
_pinia
	.use(piniaPluginPersistedstate)
	.use(addProps)
	.use(addDebounce)
	.use(onAction);




function addProps({ pinia, app, store, options, }) {
	if(store.init)
	{
		store.INITIALISED = ref(false);

		// make sure your bundler on this. webpack and vite should do it by default
		if (import.meta.env.DEV) {
			// add any keys you set on the store
			store._customProperties.add('INITIALISED')
		}
	}
}

function addDebounce({ pinia, app, store, options, }) {
	if (options.debounce)
	{
		// we are overriding the actions with new ones
		return Object.keys(options.debounce).reduce(( debouncedActions, action ) => {
			debouncedActions[action] = _debounce(
				store[action],
				options.debounce[action]
			)
			return debouncedActions
		}, {})
	}
}

function onAction({ store }) {
	store.$onAction(
		({
			  name, // name of the action
			  store, // store instance, same as `someStore`
			  args, // array of parameters passed to the action
			  after, // hook after the action returns or resolves
			  onError, // hook if the action throws or rejects
		  }) => {
			if (name === 'init')
			{
				// console.log(`plugin init name:${ store.$id } INITIALISED: ${store.INITIALISED}`)

				if (store.INITIALISED) return Promise.resolve(store);

				after(( result ) => store.INITIALISED = true)
			}
			// this will trigger if the action throws or returns a promise that rejects
			onError(( error ) => {
				//  just make sure...
				store.INITIALISED = false;
				ErrorManager.onActionError(error);
			})
		}
	)
}


export const DecoratedPinia = _pinia;