import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/Home.vue';
import Posts from '../views/Posts.vue';
import PostSingle from '../views/PostSingle.vue';
import Users from '../views/Users.vue';
import UserSingle from '../views/UserSingle.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/posts',
    name: 'Posts',
    component: Posts,
  },

  {
    path: '/posts/:id',
    name: 'PostSingle',
    component: PostSingle,
  },

  {
    path: '/users',
    name: 'Users',
    component: Users,
  },

  {
    path: '/users/:id',
    name: 'UserSingle',
    component: UserSingle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
