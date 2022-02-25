import Vue from 'vue';
import Vuex from 'vuex';
import global from './modules/global';
import * as modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    global,
    ...modules
  }
});

export default store;
