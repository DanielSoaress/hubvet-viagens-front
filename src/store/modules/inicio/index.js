import { api, router } from '../../../config';
import { navigate } from '../../../util';


export default {
  namespaced: true,
  state: {
    datasource: [],
    filters: null,
    loading: false,
    success: false,
    error: false
  },

  getters: {
    loading: state => state.loading,
    datasource: state => state.datasource,
    filters: state => state.filters,
    success: state => state.success,
    error: state => state.error
  },

  actions: {
    // LISTAR
    listar: async ({ commit, state }, params = state.filters) => {
      try {
        commit('SET_LOADING');
        const response = await api.get('.../', {  params });
        commit('SET_DATASOURCE', response.data);
        navigate(router.listar.viagens);
      } catch (error) {
        commit('SET_ERROR');
      }
    },
  },

  mutations: {
    SET_LOADING: state => {
      state.loading = true;
      state.success = false;
      state.error = false;
      state.datasource = [];
    },
    SET_SUCCESS: state => {
      state.success = true;
      state.loading = false;
      state.error = false;
    },
    SET_ERROR: (state, payload = true) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
    SET_DATASOURCE: (state, payload) => {
      const {
        data,
        filters
      } = payload;
      state.datasource = data;
      state.filters = filters;
      state.success = true;
      state.loading = false;
    }
  }
};
