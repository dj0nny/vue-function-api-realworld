import axios from 'axios';
import types from '../types';

const BASE_URL = 'https://conduit.productionready.io/api';

export default {
  state: {
    articles: [],
  },
  mutations: {
    [types.SET_ARTICLES](state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async [types.FETCH_ARTICLES]({ commit }) {
      const res = await axios.get(`${BASE_URL}/articles`);
      const articlesList = res.data.articles;
      commit(types.SET_ARTICLES, articlesList);
    },
  },
};
