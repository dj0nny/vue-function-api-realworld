<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="userProfile.image" class="user-img" />
            <h4>{{ userProfile.username }}</h4>
            <p>
              {{ userProfile.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{ userProfile.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
            <div class="loading-msg" v-if="isLoading">
              <p>Loading articles...</p>
            </div>
          </div>

          <div class="loading-wrapper" v-if="!isLoading">
            <ArticlePreviewProfile v-for="(userArticle, index) in userArticles" :key="index" :item="userArticle"></ArticlePreviewProfile>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { onCreated, watch } from 'vue-function-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

import ArticlePreviewProfile from '../components/ArticlePreviewProfile.vue';
import types from '../store/types';

export default {
  name: 'Profile',
  components: {
    ArticlePreviewProfile,
  },
  setup() {
    const { userArticles, userProfile, isLoading } = useState(['userArticles', 'userProfile', 'isLoading']);
    const { FETCH_USER_ARTICLES, FETCH_USER_PROFILE } = useActions([types.FETCH_USER_ARTICLES, types.FETCH_USER_PROFILE]);
    const { route } = useRouter();
    const profile = route.value.params.user;

    onCreated(async () => {
      await FETCH_USER_PROFILE(profile);
      await FETCH_USER_ARTICLES(profile);
    });

    watch(() => route.value.params.user, (changedProfile) => {
      FETCH_USER_PROFILE(changedProfile);
      FETCH_USER_ARTICLES(changedProfile);
    });

    return {
      userArticles,
      userProfile,
      isLoading,
    };
  },
};
</script>
