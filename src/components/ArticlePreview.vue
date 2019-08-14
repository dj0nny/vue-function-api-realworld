<template>
  <div class="article-preview">
    <div class="article-meta">
      <router-link :to="{ name: 'profile', params: { user: item.author.username }}"><img :src="item.author.image" /></router-link>
      <div class="info">
        <router-link :to="{ name: 'profile', params: { user: item.author.username }}" class="author">{{ item.author.username }}</router-link>
        <span class="date">{{ item.createdAt }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ item.favoritesCount }}
      </button>
    </div>
    <router-link :to="{ name: 'article-detail', params: { slug: item.slug }}" class="preview-link">
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <router-link :to="{ name: 'article-detail', params: { slug: item.slug }}"><span>Read more...</span></router-link>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: {
    item: Object,
  },
};
</script>
