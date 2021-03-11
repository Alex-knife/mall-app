import Vue from 'vue';
import Vant, { Loading } from 'vant';

import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
