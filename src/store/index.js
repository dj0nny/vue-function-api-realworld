import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import types from './types';
import { getToken, saveToken, deleteToken } from '../common/jwt';

const BASE_URL = 'https://conduit.productionready.io/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tags: [],
    articles: [],
    article: [],
    userArticles: [],
    comments: [],
    userProfile: [],
    user: JSON.parse(getToken('userdetail')),
    isLogged: !!getToken('userjwt'),
    isLoading: false,
    errors: false,
  },
  mutations: {
    [types.SET_TAGS](state, tags) {
      state.tags = tags;
    },
    [types.SET_ARTICLES](state, articles) {
      state.articles = articles;
    },
    [types.SET_USER_ARTICLES](state, articles) {
      state.userArticles = articles;
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
    [types.SET_USER_PROFILE](state, prof) {
      state.userProfile = prof;
    },
    [types.LOGGED_IN](state, value) {
      state.isLogged = value;
    },
    [types.SET_IS_LOADING](state, value) {
      state.isLoading = value;
    },
    [types.SET_ERRORS](state, err) {
      state.errors = err;
    },
  },
  actions: {
    async [types.FETCH_TAGS]({ commit }) {
      commit(types.SET_IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/tags`);
      const tagsList = res.data.tags;
      commit(types.SET_TAGS, tagsList);
      commit(types.SET_IS_LOADING, false);
    },
    async [types.FETCH_ARTICLES]({ commit }) {
      commit(types.SET_IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/articles`);
      const articlesList = res.data.articles;
      commit(types.SET_ARTICLES, articlesList);
      commit(types.SET_IS_LOADING, false);
    },
    async [types.FETCH_USER_ARTICLES]({ commit }, username) {
      commit(types.SET_IS_LOADING, true);
      const res = await axios.get(`${BASE_URL}/articles?author=${username}`);
      const userArticles = res.data.articles;
      commit(types.SET_USER_ARTICLES, userArticles);
      commit(types.SET_IS_LOADING, false);
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
      const res = await axios.post(`${BASE_URL}/users/login`, user)
        .catch(function (e) {
          if (e.response) {
            commit(types.SET_ERRORS, e.response.data);
          }
        });
      const loggedUser = res.data.user;
      saveToken('userdetail', JSON.stringify(loggedUser));
      commit(types.SET_USER, loggedUser);
      saveToken('userjwt', loggedUser.token);
      commit(types.LOGGED_IN, loggedUser.token);
    },
    async [types.FETCH_USER_PROFILE]({ commit }, username) {
      const res = await axios.get(`${BASE_URL}/profiles/${username}`);
      const currentProfile = res.data.profile;
      commit(types.SET_USER_PROFILE, currentProfile);
    },
    async [types.REGISTER_USER]({ commit }, newUser) {
      const res = await axios.post(`${BASE_URL}/users`, newUser)
        .catch(function (e) {
          if (e.response) {
            commit(types.SET_ERRORS, e.response.data.errors);
          }
        });
      const newUserLogged = res.data.user;
      saveToken('userdetail', JSON.stringify(newUserLogged));
      commit(types.SET_USER, newUserLogged);
      saveToken('userjwt', newUserLogged.token);
      commit(types.LOGGED_IN, newUserLogged.token);
    },
    [types.LOGOUT]({ commit }) {
      deleteToken('userdetail');
      deleteToken('userjwt');
      commit(types.SET_USER, []);
      commit(types.LOGGED_IN, false);
    },
  },
});
