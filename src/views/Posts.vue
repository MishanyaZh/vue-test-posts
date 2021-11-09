<template>
  <div class="posts">
    <h2 class="title">Posts</h2>
    <div class="search_container">
      <SearchBar
        v-if="this.posts.length"
        @searchQueryChanged="search = $event"
      />
    </div>

    <button @click="getPosts()" v-show="!this.posts.length">Get Posts</button>

    <PostsList :posts="filteredItems" />

    <button
      @click="loadMorePosts()"
      v-if="this.posts.length > 0 && this.posts.length < 100"
    >
      load more
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import PostsList from '../components/PostsList';
import SearchBar from '../components/SearchBar';
export default {
  components: {
    PostsList,
    SearchBar,
  },
  name: 'Posts',
  data() {
    return {
      posts: [],
      limit: 10,
      search: '',
    };
  },
  methods: {
    getPosts() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?&_limit=${this.limit}`)
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadMorePosts() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts?&_limit=${(this.limit += 10)}`,
        )
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  computed: {
    filteredItems() {
      return this.posts.filter(item => {
        return item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.posts {
  min-height: 100vh;
  background-image: url(../assets/wordpress-gdefff272b_1280.jpg);
  background-size: cover;
  background-position: center;
}
.title {
  margin: 0;
  font-weight: 500;
  font-size: 48px;
  background-color: rgba(113, 90, 68, 0.7);
  color: rgba(12, 12, 12, 0.9);
  border-radius: 5px;
}
.search_container {
  width: 20%;
  margin: 1rem auto;
}
@media (max-width: 950px) {
  .search_container {
    width: 70%;
    position: relative;
    left: 2%;
  }
}
</style>
