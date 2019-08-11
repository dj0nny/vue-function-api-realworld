<template>
  <div class="home-page">

    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">

        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
            <div class="loading-msg" v-if="isLoading">
             <p>Loading articles...</p>
            </div>
          </div>

          <div class="loading-wrapper" v-if="!isLoading">
            <ArticlePreview v-for="(article, index) in articles" :key="index" :item="article"></ArticlePreview>
          </div>

        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="loading-msg" v-if="isLoading">
              <p>Loading tags...</p>
            </div>

            <div class="tag-list" v-if="!isLoading">
              <a href="" class="tag-pill tag-default" v-for="tag in tags" :key="tag">{{ tag }}</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions } from '@u3u/vue-hooks';

import ArticlePreview from '../components/ArticlePreview.vue';
import types from '../store/types';

export default {
  name: 'home',
  components: {
    ArticlePreview,
  },
  setup() {
    const { tags, articles, isLoading } = useState(['tags', 'articles', 'isLoading']);
    const { FETCH_TAGS, FETCH_ARTICLES } = useActions([types.FETCH_TAGS, types.FETCH_ARTICLES]);

    onCreated(async () => {
      await FETCH_TAGS();
      await FETCH_ARTICLES();
    });

    return {
      tags,
      articles,
      isLoading,
    };
  },
};
</script>
