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
			<ul class="tag-list" v-if="item.tagList.length > 0">
				<li v-for="(tag, index) in item.tagList" :key="index" class="tag-default tag-pill tag-outline">{{ tag }}</li>
			</ul>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreviewProfile',
  props: ['item'],
};
</script>
