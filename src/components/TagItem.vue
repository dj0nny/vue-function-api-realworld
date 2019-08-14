<template>
  <a href="" class="tag-pill tag-default" >{{ tagName }}</a>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    tagName: String,
  }
}
</script>