<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ item.body }}</p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="item.author.image" class="comment-author-img" />
      </a>
      &nbsp;
      <a href="" class="comment-author">{{ item.author.username }}</a>
      <span class="date-posted">{{ item.createdAt }}</span>
      <span class="mod-options">
        <i class="ion-edit"></i>
        <i class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['item'],
}
</script>