<template>
  <section class="post-card">
    <h2>{{ post.title }}</h2>
    <p>
      {{ post.body }}
    </p>
    <h2>Autor: {{ user.name }}</h2>
    <router-link to="/posts">
      <button @click="delPosts()">Delete Post</button>
    </router-link>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      post: {},
      user: {},
    };
  },
  created() {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id,
      )
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(
        'https://jsonplaceholder.typicode.com/users/' + this.$route.params.id,
      )
      .then(response => {
        this.user = response.data;
        console.log(this.users);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    delPosts() {
      axios
        .delete(
          'https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id,
        )
        .then(response => {
          this.post = response.data;
          this.user = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.post-card {
  width: 60%;
  margin: 2rem auto;
  border: 5px solid #3399ff;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 12px 15px 20px lightgray;
  background: #66ccff;
  color: white;
  h2 {
    font-size: 2.2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgrey;
  }
  p {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
@media (max-width: 950px) {
  .post-card {
    width: 75%;
  }
}
@media (max-width: 500px) {
  .post-card {
    width: 85%;
  }
}
</style>
