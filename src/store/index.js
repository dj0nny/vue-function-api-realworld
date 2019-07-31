import Vue from 'vue';
import Vuex from 'vuex';

import tags from './modules/tags';
import articles from './modules/articles';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tags,
    articles,
  },
  strict: true,
});
