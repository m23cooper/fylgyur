import './index.css';
//  vue
import { createApp, nextTick } from 'vue';
import { router } from './router/router';
import { DecoratedPinia } from '@/_stores';
//  third-party plugins
import { plugin, defaultConfig } from '@formkit/vue';
//  @ts-ignore: importing a .ts file
import config from '../formkit.config';
import { VueFire, VueFireAuth } from 'vuefire';
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from '@/db/firebase';
//  setup icons
import { dom } from '@fortawesome/fontawesome-svg-core';
import { fontIconLibrary } from '@/icons/FontIconConstants';
//  internal
import App from './App.vue';
import ErrorManager from '@/utils/ErrorManager';

/**
 * Create the app and register plugins
 */
const app = createApp(App);
app.config.errorHandler = (error) => ErrorManager.onVueError(error);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.use(plugin, defaultConfig(config));
app.use(DecoratedPinia);
app.use(router);

//  setup font icon library
const _fontIconLibrary = fontIconLibrary;
dom.watch();

await nextTick(async () => {
  app.mount('#app');
});
