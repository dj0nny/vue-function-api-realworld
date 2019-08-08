import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import types from './types';
import { getToken, saveToken } from '../common/jwt';

const BASE_URL = 'https://conduit.productionready.io/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tags: [],
    articles: [],
    article: [],
    comments: [],
    user: [],
    isLogged: !!getToken(),
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
    [types.SET_USER](state, user) {
      state.user = user;
    },
    [types.LOGGED_IN](state, value) {
      state.isLogged = value;
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
    async [types.LOGIN_USER]({ commit }, user) {
      const res = await axios.post(`${BASE_URL}/users/login`, user);
      const loggedUser = res.data.user;
      commit(types.SET_USER, loggedUser);
      saveToken(loggedUser.token);
      commit(types.LOGGED_IN, loggedUser.token);
    },
    // [types.CHECK_LOGGED_IN]({ commit }) {
    //   const logged = localStorage.getItem('userjwt');
    //   if (logged) {
    //     commit(types.LOGGED_IN, true);
    //   } else {
    //     commit(types.LOGGED_IN, false);
    //   }
    // },
  },
});
