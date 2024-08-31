import './index.css'

import {createApp, nextTick} from 'vue'
import { DecoratedPinia, useUIStore, useUserStore, } from "@/_stores";

import { VueFire } from 'vuefire'
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from '@/firebase/firebase'


import Vueform from '@vueform/vueform'
import vueformConfig from "../vueform.config";


import { router } from './router/router'

import { dom } from "@fortawesome/fontawesome-svg-core";
import { fontIconLibrary } from "@/icons/FontIconConstants";
//  setup font icon library
const _fontIconLibrary = fontIconLibrary;

import App from './App.vue'
import ErrorManager from "@/utils/ErrorManager";
import {kindeClient} from "@/kinde/kindeClient";
import {ROUTE_NAMES} from "@/enum";
dom.watch();

const app = createApp(App)
app.config.errorHandler = ( error ) => ErrorManager.onVueError(error);
// app.use(VueFire, {
//     firebaseApp
// })
app.use(Vueform, vueformConfig)
app.use(DecoratedPinia)
app.use(router)

const isLoggedIn = await kindeClient.isAuthenticated();
console.log("main.ts " + isLoggedIn);
try {
    await kindeClient.handleRedirectToApp(new URL(window.location.toString()));
    // Redirect to Home page, etc...
} catch (error) {
    ErrorManager.onError(error)
    useUIStore().goRoute(ROUTE_NAMES.HOME, );
}

await nextTick(async () => {


    app.mount('#app')
})


