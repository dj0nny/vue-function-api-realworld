<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <div class="article-meta">
          <a href=""><img v-if="article.author.image" :src="article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">{{ article.favoritesCount }}</span>
          </button>
        </div>

      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div class="col-md-12">
          <div v-html="article.body"></div>
        </div>
      </div>

      <hr />

      <div class="article-actions">
        <div class="article-meta">
          <a href="profile.html"><img v-if="article.author.image" :src="article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">January 20th</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">{{ article.favoritesCount }}</span>
          </button>
        </div>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
              Post Comment
              </button>
            </div>
          </form>

          <div v-if="comments">
            <Comment v-for="(comment, index) in comments" :key="index"></Comment>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { onCreated } from 'vue-function-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

import types from '../store/types';
import Comment from '../components/Comment.vue';

export default {
  name: 'Article',
  components: {
    Comment,
  },
  setup() {
    const { article, comments } = useState(['article', 'comments']);
    const { FETCH_ARTICLE_DETAIL, FETCH_COMMENTS } = useActions([types.FETCH_ARTICLE_DETAIL, types.FETCH_COMMENTS]);
    const { route } = useRouter();

    onCreated(() => {
      FETCH_ARTICLE_DETAIL(route.value.params.slug);
      FETCH_COMMENTS(route.value.params.slug);
    });

    return {
      article,
      comments,
    };
  },
};
</script>
