import axios from 'axios';

import types from '../types';

const BASE_URL = 'https://conduit.productionready.io/api';

export default {
  state: {
    tags: [],
  },
  mutations: {
    [types.SET_TAGS](state, tags) {
      state.tags = tags;
    },
  },
  actions: {
    async [types.FETCH_TAGS]({ commit }) {
      const res = await axios.get(`${BASE_URL}/tags`);
      const tags = res.data;
      commit(types.SET_TAGS, tags);
    },
  },
};
