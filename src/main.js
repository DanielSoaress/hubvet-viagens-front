import Vue from 'vue';
import App from './App.vue';
import { vuetify } from '@/config';
import VueRouter from 'vue-router';
import routes from './routes';
import { components } from './global';
import store from './store';


Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

Vue.use(components);

new Vue({
  beforeCreate: function() {
    Vue.prototype.$routes = router;
  },
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
