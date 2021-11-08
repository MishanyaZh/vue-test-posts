<template>
  <li>
    <article>
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.address.street + ', ' + user.address.suite }}</p>
      <p>{{ user.address.city }}</p>
      <footer>
        <router-link :to="`/users/${user.id}`">
          more about {{ user.name }}...</router-link
        >
      </footer>
    </article>
  </li>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin: 1rem;
  a {
    color: black;
    &:hover {
      color: darken($color: #42b883, $amount: 10%);
    }
  }
}
</style>
