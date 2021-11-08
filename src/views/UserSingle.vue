<template>
  <section class="user-card">
    <h2>{{ user.name }}</h2>
    <ul name="user">
      <li><strong> username:</strong> {{ user.username }}</li>
      <li><strong>email:</strong> {{ user.email }}</li>
      <li>
        <strong>street:</strong>
        {{ user.address.street + ', ' + user.address.suite }}
      </li>
      <li><strong>city:</strong> {{ user.address.city }}</li>
      <li><strong>phone:</strong> {{ user.phone }}</li>
      <li><strong>website:</strong> {{ user.website }}</li>
      <li><strong>company:</strong> {{ user.company.name }}</li>
      <li><strong>character:</strong> {{ user.company.catchPhrase }}</li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UserSingle',
  data() {
    return {
      user: '',
    };
  },
  created() {
    axios
      .get(
        'https://jsonplaceholder.typicode.com/users/' + this.$route.params.id,
      )
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  border: 1px solid gray;
  border-radius: 1rem;
  width: 40%;
  margin: 2rem auto;
  background: #66ccff;
  box-shadow: 6px 15px 20px gray;
  ul {
    list-style: none;
    padding: 0;
    padding: 1rem;
    li {
      font-size: 1.5rem;
      line-height: 3rem;
      border-bottom: 1px solid lightgray;
    }
  }
  h2 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid gray;
  }
}
@media (max-width: 800px) {
  .user-card {
    width: 80%;
  }
}
</style>
