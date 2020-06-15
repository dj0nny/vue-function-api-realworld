import Vue from 'vue';
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(plugin);
Vue.use(hooks);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
