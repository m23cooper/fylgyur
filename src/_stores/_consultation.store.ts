import { acceptHMRUpdate, defineStore } from 'pinia';
// import { consultationService, } from "@/_services";
import {
  each as _each,
  filter as _filter,
  map as _map,
  find as _find,
} from 'lodash-es';
import { firestoreDefaultConverter, useCollection } from 'vuefire';
import { collection, query, orderBy } from 'firebase/firestore';
import { db } from '@/db/firebase';
import { Ref, toRef, watch } from 'vue';
import { IAsynchForm } from '@/types';

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IConsultationState {
  forms: IAsynchForm[];
  selectedForm: IAsynchForm | null;
  formContext: any;
  formModel: any;
}

export const useConsultationStore = defineStore(`_consultation.store`, {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  State
  state: (): IConsultationState => ({
    forms: [],
    selectedForm: null,
    formContext: null,
    formModel: null,
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
      //  @ts-ignore
      this.forms = useCollection<IAsynchForm>(
        query(collection(db, 'forms'), orderBy('order')),
      );
      let test = 0;
    },
    setCurrentFormById({ id }): void {
      // console.log(`setCurrentForm ${name}`)
      // console.dir(this.forms)
      const form = _find(this.forms, (form) => form.id === id);
      if (!form) {
        throw new Error(`setCurrentForm doesn't recognise form name ${id}`);
      } else {
        this.selectedForm = form;
        console.log(
          `_consultation.store.setCurrentForm set to: ${form.id} (${form.name})`,
        );
      }
    },
    registerFormContext({ ctx }): void {
      this.formContext = ctx;
    },
    registerFormModel({ formModel }): void {
      this.$patch({
        formModel: toRef(formModel),
      });
    },
  },
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//  acceptHMRUpdate
if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useConsultationStore, import.meta.hot),
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private
