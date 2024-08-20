import './index.css'

import {createApp, nextTick} from 'vue'
import { DecoratedPinia, useUIStore, useUserStore, useDeviceStore } from "@/_stores";

import Vueform from '@vueform/vueform'
import vueformConfig from "../vueform.config";

import ErrorManager from "@/utils/ErrorManager";
import App from './App.vue'
import { router } from './router'

import { dom } from "@fortawesome/fontawesome-svg-core";
import { fontIconLibrary } from "@/icons/FontIconLibrary";

//  setup font icon library
const _fontIconLibrary = fontIconLibrary;
dom.watch();

const app = createApp(App)
app.config.errorHandler = ( error ) => ErrorManager.onVueError(error);
app.use(Vueform, vueformConfig)
app.use(DecoratedPinia)
app.use(router)

await nextTick(() => {
//  get all data from local storage
    useUserStore().init();

//  set up all the breakpoints, determine browser/device
    useDeviceStore().init();

// populate the Router and get startup url query
    useUIStore().init();
})

app.mount('#app')
