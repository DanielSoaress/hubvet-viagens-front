import { api } from '../../../config';


export default {
  namespaced: true,
  state: {
    datasource: [],
    filters: null,
    loading: false,
    success: false,
    error: false,
    datasource_type: [],
  },

  getters: {
    loading: state => state.loading,
    datasource: state => state.datasource,
    filters: state => state.filters,
    success: state => state.success,
    error: state => state.error,
    datasource_type : state => state.datasource_type
  },

  actions: {
    // LISTAR
    listar: async ({ commit, state }, params = state.filters) => {
      try {
        commit('SET_LOADING');    
        const response = await api.get('.../', {  params });
        commit('SET_DATASOURCE', response.data);
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // CARREGAR LISTA DE TYPES
    carregar_type: async ({ commit }) => {
      try {
        commit('SET_LOADING');  
        const response = [{ id:1 , nome: 'PASSAGENS'},
                          { id:2 , nome: 'HOTÉIS'},
                          { id:3 , nome: 'CARROS'},
                          { id:4 , nome: 'PACOTES'}] 
        commit('SET_DATASOURCE_TYPE', response);
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
    },
    SET_DATASOURCE_TYPE: (state, payload) => {
      state.datasource_type = payload;
      state.success = true;
      state.loading = false;
    }
  },
};
