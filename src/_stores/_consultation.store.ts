
import {acceptHMRUpdate, defineStore} from 'pinia';
// import { consultationService, } from "@/_services";
import { each as _each, filter as _filter, map as _map, find as _find} from 'lodash-es';

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IConsultationState
{
    forms: any[];
}

export const useConsultationStore = defineStore(`_consultation.store`, {

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():IConsultationState => ({
		forms: [
            {
                name: "Form1"
            },
            {
                name: "Form2"
            },
        ],
	}),

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
      formCount: (state) => state.forms.length,
	},

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Actions
  //  -   Don't use fat arrow functions as 'this' will be incorrect
  //  -   Unhandled catch block errors are caught by a Pinia plugin - see @/stores/PiniaBase.ts
  //  -   init() actions are checked by a plugin against an INITIALISED decoration - see @/stores/PiniaBase.ts
  actions: {
    async init() {
      //  @ts-ignore
      if (this.INITIALISED) return Promise.resolve(this);
      // return await pensionService.fetchPension(params)
      //     .then(( { data } ) => {
      //         //  mutate state
      //     })
    },
  },
})

//////////////////////////////////////////////////////////////////////////////////////////////////
//  acceptHMRUpdate
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConsultationStore, import.meta.hot))
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private


