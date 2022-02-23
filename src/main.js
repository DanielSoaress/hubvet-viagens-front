import Vue from 'vue';
import App from './App.vue';
import { vuetify } from '@/config';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  beforeCreate: function() {
    Vue.prototype.$routes = router;
  },
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
