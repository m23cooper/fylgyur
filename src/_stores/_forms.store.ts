import { acceptHMRUpdate, defineStore } from 'pinia';
import {
  each as _each,
  merge as _merge,
  orderBy as _orderBy,
  assign as _assign,
  map as _map,
  find as _find,
  map,
} from 'lodash-es';
import { Ref, toRef, watch } from 'vue';
import type { TAsynchForm, THost } from '@/types';
import { formsService } from '@/_services';

const _service = formsService;

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IFormsState {
  forms: TAsynchForm[];
  selectedForm: TAsynchForm | null;
  formContext: any;
  formModel: object | null;
}

export const useFormsStore = defineStore(`_forms.store`, {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  State
  state: (): IFormsState => ({
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
      if (this.INITIALISED) return this;

      return await this.loadFormsByHost();
    },
    async loadFormsByHost(): Promise<void> {
      const hostname = window.location.hostname.split('.')[0];
      const host: THost = await _service.getHost({ hostname });
      const formIds = host.forms.map((form) => form.id);

      const formData = await _service.getForms({ formIds });
      _map(formData, (form) => {
        const hostForm = _find(
          host.forms,
          (hostform) => hostform.id === form.id,
        );
        form.order = hostForm?.order || 0;
      });
      this.forms = _orderBy(formData, ['order']);
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
          `_forms.store.setCurrentForm set to: ${form.id} (${form.title})`,
        );
      }
    },
    registerFormContext({ ctx }): void {
      this.formContext = ctx;
    },
    registerFormModel({ fM }): void {
      this.$patch({
        formModel: fM,
      });
    },
  },
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//  acceptHMRUpdate
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFormsStore, import.meta.hot));
}

//////////////////////////////////////////////////////////////////////////////////////////////////
//  Private
