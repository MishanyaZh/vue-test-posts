<template>
  <div class="user">
    <h2 class="title">Users</h2>
    <div class="search_container">
      <SearchBar
        v-if="this.users.length"
        @searchQueryChanged="search = $event"
      />
    </div>
    <button @click="getUsers()" v-show="!this.users.length">Get Users</button>

    <UserList :users="filteredItems" />

    <button
      @click="loadMoreUsers()"
      v-if="this.users.length > 0 && this.users.length < 10"
    >
      load more
    </button>
  </div>
</template>

<script>
import UserList from '../components/UserList';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
export default {
  components: {
    UserList,
    SearchBar,
  },
  name: 'Users',
  data() {
    return {
      users: [],
      limit: 5,
      search: '',
    };
  },
  computed: {
    filteredItems() {
      return this.users.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
  },
  methods: {
    getUsers() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users?&_limit=${this.limit}`)
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadMoreUsers() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users?&_limit=${(this.limit += 5)}`,
        )
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  font-weight: 500;
  font-size: 48px;
  background-color: rgba(113, 90, 68, 0.7);
  color: rgba(12, 12, 12, 0.9);
  border-radius: 5px;
}
.user {
  min-height: 100vh;
  background-image: url(https://pixabay.com/get/g9c6e73c35e4fdb1dc2655fa81927e069366908c910f95f8da37bd7329aa0240fc6335c80f9827545e1f40c667a13e77600660cb5f5a536740de162402329b292_1280.jpg);
  background-size: cover;
  background-position: center;
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
