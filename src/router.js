import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Article from './views/Article.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Profile from './views/Profile.vue';
import Settings from './views/Settings.vue';
import Editor from './views/Editor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/article/:slug',
      name: 'article-detail',
      component: Article,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/profile/:user',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/new',
      name: 'new',
      component: Editor,
    },
  ],
});
