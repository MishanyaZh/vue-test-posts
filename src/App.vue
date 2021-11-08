<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/users">Users</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
body {
  margin: 0;
  font-family: 'Lato', sans-serif;
  background: grey;
}
.data {
  margin-bottom: 2rem;
}
button {
  border: none;
  background: none;
  background: #33cc33;
  color: white;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  text-align: left;
  border-radius: 0.2rem;
  transition: all 0.2s ease;
  border: 2px solid #009900;
  &:hover {
    background: darken($color: #0066ff, $amount: 10%);
    border: 2px solid #000099;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background: #ffd633;
  box-shadow: 2px 1px 10px lightgray;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-left: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 400;
    padding-bottom: 0.3rem;
    &:hover,
    &.router-link-exact-active {
      color: #42b983;
      padding: 5px;
      border-bottom: 2px solid#42b983;
      box-shadow: inset 1px 1px 11px 1px #797a7c;
      border-radius: 5px;
    }
  }
}
</style>
