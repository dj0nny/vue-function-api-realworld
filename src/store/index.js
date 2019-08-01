import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import types from './types';

const BASE_URL = 'https://conduit.productionready.io/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tags: [],
    articles: [],
    article: [],
    comments: [],
  },
  mutations: {
    [types.SET_TAGS](state, tags) {
      state.tags = tags;
    },
    [types.SET_ARTICLES](state, articles) {
      state.articles = articles;
    },
    [types.SET_ARTICLE_DETAIL](state, article) {
      state.article = article;
    },
    [types.SET_COMMENTS](state, commentsList) {
      state.comments = commentsList;
    },
  },
  actions: {
    async [types.FETCH_TAGS]({ commit }) {
      const res = await axios.get(`${BASE_URL}/tags`);
      const tagsList = res.data.tags;
      commit(types.SET_TAGS, tagsList);
    },
    async [types.FETCH_ARTICLES]({ commit }) {
      const res = await axios.get(`${BASE_URL}/articles`);
      const articlesList = res.data.articles;
      commit(types.SET_ARTICLES, articlesList);
    },
    async [types.FETCH_ARTICLE_DETAIL]({ commit }, slug) {
      const res = await axios.get(`${BASE_URL}/articles/${slug}`);
      const articleDetails = res.data.article;
      commit(types.SET_ARTICLE_DETAIL, articleDetails);
    },
    async [types.FETCH_COMMENTS]({ commit }, slug) {
      const res = await axios.get(`${BASE_URL}/articles/${slug}/comments`);
      const commentsList = res.data.comments;
      commit(types.SET_COMMENTS, commentsList);
    },
  },
});
