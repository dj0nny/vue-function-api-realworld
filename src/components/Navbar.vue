<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item" v-if="isLogged">
          <router-link class="nav-link" to="/editor">
            <i class="ion-compose"></i>&nbsp;New Post
          </router-link>
        </li>
        <li class="nav-item" v-if="isLogged">
          <router-link class="nav-link" to="/settings">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </router-link>
        </li>
        <li class="nav-item" v-if="isLogged">
          <router-link class="nav-link" :to="{ name: 'profile', params: { user: user.username }}">
            {{ user.username }}
          </router-link>
        </li>
        <li class="nav-item" v-if="!isLogged">
          <router-link to="/login" class="nav-link">Sign In</router-link>
        </li>
        <li class="nav-item" v-if="!isLogged">
          <router-link to="/register" class="nav-link">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useState } from '@u3u/vue-hooks';

export default {
  name: 'Navbar',
  setup() {
    const { isLogged, user } = useState(['isLogged', 'user']);

    return {
      isLogged,
      user,
    };
  },
};
</script>
