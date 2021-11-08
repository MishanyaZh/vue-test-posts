<template>
  <transition-group name="post" class="posts" tag="ul">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </transition-group>
</template>

<script>
import PostItem from './PostItem';
export default {
  components: {
    PostItem,
  },
  name: 'PostsList',
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  padding-left: 0;
  width: 90%;
  margin: 1rem auto;
  list-style: none;
  position: relative;
  left: -1%;
}
.post-enter-active,
.post-leave-active {
  transition: all 0.3s;
}
.post-enter,
.post-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
@media (max-width: 800px) {
  .posts {
    width: 70%;
    left: 0;
  }
}
</style>
