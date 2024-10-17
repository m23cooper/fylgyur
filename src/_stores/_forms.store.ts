import { acceptHMRUpdate, defineStore } from 'pinia';
import { orderBy as _orderBy, map as _map, find as _find } from 'lodash-es';
import type { TAsynchForm, THost } from '@/types';
import { formsService, aiService } from '@/_services';

// const _formsService = formsService;

//////////////////////////////////////////////////////////////////////////////////////////////////
//  useStore

export interface IFormsState {
  forms: TAsynchForm[];
  answers: any | null;
  selectedForm: TAsynchForm | null;
  formContext: any;
  formModel: object | null;
}

export const useFormsStore = defineStore(`_forms.store`, {
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  State
  state: (): IFormsState => ({
    forms: [],
    answers: 'No answers yet',
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

      const host: THost | undefined = await formsService.getHost({ hostname });
      if (host) {
        const formIds = host.forms.map((form) => form.id);

        const formData = await formsService.getForms({ formIds });
        if (formData) {
          _map(formData, (form) => {
            const hostForm = _find(
              host.forms,
              (hostform) => hostform.id === form.id,
            );
            form.order = hostForm?.order || 0;
          });
          this.forms = _orderBy(formData, ['order']);
        }
      } else {
        console.log('NO HOST');
      }
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
    async ask(): Promise<void> {
      const key = this.currentForm?.key || this.currentForm?.id || '';
      const question = JSON.stringify({
        signup: { email: 'Mikeymikey@home.com' },
      });

      // const question = JSON.stringify({ [key]: this.formModel });
      const response = await aiService.ask({ question });
      this.answers = response.data;
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
