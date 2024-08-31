
import {acceptHMRUpdate, defineStore} from 'pinia';
// import { consultationService, } from "@/_services";
import { each as _each, filter as _filter, map as _map, find as _find} from 'lodash-es';
import {useCollection, useFirestore} from "vuefire";
import {formsCollection} from "@/firebase/firebase";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IConsultationState
{
    forms: any | null;
    currentForm: any | null;
}

export const useConsultationStore = defineStore(`_consultation.store`, {


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():IConsultationState => ({
		forms: [
            {
                name: "BronzeForm"
            },
            {
                name: "SilverForm"
            },
        ],
        currentForm: null,
	}),

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
        formCount: (state) => state.forms.length,
        currentFormName: (state) => state.currentForm?.name || null,
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
        // this.forms = useCollection(formsCollection);
        console.log(this.forms);
      this.setCurrentForm("BronzeForm")
      // return await pensionService.fetchPension(params)
      //     .then(( { data } ) => {
      //         //  mutate state
      //     })
    },
      setCurrentForm( formName: string): void {
        const form = _find(this.forms, (form) => form.name === formName);
        if(!form){
            throw new Error(`setCurrentForm doesn't recognise formName ${formName}`);
        }
        this.currentForm = form;
      }
  },


})

//////////////////////////////////////////////////////////////////////////////////////////////////
//  acceptHMRUpdate
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConsultationStore, import.meta.hot))
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private


