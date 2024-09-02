
import {acceptHMRUpdate, defineStore} from 'pinia';
// import { consultationService, } from "@/_services";
import { each as _each, filter as _filter, map as _map, find as _find} from 'lodash-es';
import {useCollection, useDocument, useFirestore, } from "vuefire";
import {collection, CollectionReference, DocumentData} from "firebase/firestore";
import {db} from "@/firebase/firebase";
import {Ref, watch} from "vue";

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IConsultationState
{
    forms: any;
    selectedForm: any | null;
    formsCollectionRef: Ref<any> | null
}


export const useConsultationStore = defineStore(`_consultation.store`, {


	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  State
	state: ():IConsultationState => ({
		forms: [],
        selectedForm: null,
        formsCollectionRef: null,
	}),

	//////////////////////////////////////////////////////////////////////////////////////////////////
	//  Getters
	getters: {
        formCount: (state) => state.forms.length,
        currentForm: (state) => state.selectedForm || state.forms[0] || null,
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
        this.forms = useCollection(collection(db, 'forms'));

    },
      setCurrentForm( name: string): void {
        console.log(`setCurrentForm ${name}`)
          console.dir(this.forms)
        const form = _find(this.forms, (form) => form.name === name);
        if(!form){
            throw new Error(`setCurrentForm doesn't recognise form name ${name}`);
        } else {
            this.selectedForm = form;
            console.log(`setCurrentForm set to: ${form.name}`)
        }
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


