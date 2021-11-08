<template>
  <li :id="`item-${post.id}`">
    <article>
      <h2>{{ post.title }}</h2>
      <!-- <p>
        {{ post.body }}
      </p> -->
      <small>
        <router-link :to="`/posts/${post.id}`">Read more...</router-link>
      </small>
    </article>
  </li>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
li article {
  background: #42b983;
}

article {
  color: white;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
}
a {
  color: white;
}
</style>
