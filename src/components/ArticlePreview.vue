<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html"><img v-if="item.author.image" :src="item.author.image" /></a>
      <div class="info">
        <a href="" class="author">{{ item.author.username }}</a>
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
  props: ['item'],
};
</script>
