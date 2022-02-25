
export default {
  namespaced: true,
  state: {
    datasource: [],
    filters: {},
    loading: false,
    success: false,
    error: false,
    datasource_type: [],
    datasource_category: []
  },

  getters: {
    loading: state => state.loading,
    datasource: state => state.datasource,
    filters: state => state.filters,
    success: state => state.success,
    error: state => state.error,
    datasource_type : state => state.datasource_type,
    datasource_category: state => state.datasource_category
  },

  actions: {
    // SET FILTERS
    set_filters: async ({ commit }, filters) => {
      try {
        commit('SET_LOADING');    
        commit('SET_DATASOURCE_FILTERS', {...filters});
      } catch (error) {
        commit('SET_ERROR');
      }
    },

    // CARREGAR LISTA DE TYPES
    carregar_type: async ({ commit }) => {
      try {
        commit('SET_LOADING');  
        const response = [{ id:0 , nome: 'PASSAGENS'},
                          { id:1 , nome: 'HOTÉIS'},
                          { id:2 , nome: 'CARROS'},
                          { id:3 , nome: 'PACOTES'}] 
        commit('SET_DATASOURCE_TYPE', response);
      } catch (error) {
        commit('SET_ERROR');
      }
    },  
    
    // CARREGAR LISTA DE CATEGORIAS
    carregar_category: async ({ commit }) => {
      try {
        commit('SET_LOADING');  
        const response = [{ id:1 , nome: 'Promoção', color: '#FF4A4A'},
                          { id:2 , nome: 'Novos', color: '#FFA800'},
                          { id:3 , nome: 'Últimos dias', color: '#DB00FF'}] 
        commit('SET_DATASOURCE_CATEGORY', response);
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
    SET_DATASOURCE_FILTERS: (state, payload) => {
      state.filters = {...payload};
      state.success = true;
      state.loading = false;
    },
    SET_DATASOURCE_TYPE: (state, payload) => {
      state.datasource_type = payload;
      state.success = true;
      state.loading = false;
    },
    SET_DATASOURCE_CATEGORY: (state, payload) => {
      state.datasource_category = payload;
      state.success = true;
      state.loading = false;
    }
  },
};
