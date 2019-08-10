<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <!-- <ul class="error-messages">
            <li>That email is already taken</li>
          </ul> -->

          <form @submit.prevent="login">
            <fieldset class="form-group">
              <input v-model="userAttempt.user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="userAttempt.user.password" class="form-control form-control-lg" type="password" placeholder="Password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
              Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { value } from 'vue-function-api';
import { useActions, useRouter, useState } from '@u3u/vue-hooks';

import types from '../store/types';

export default {
  name: 'Login',
  setup() {
    const userAttempt = value({ user: { email: '', password: '' } });
    const { user } = useState(['user']);
    const { LOGIN_USER } = useActions([types.LOGIN_USER]);
    const { router } = useRouter();

    const login = async () => {
      await LOGIN_USER(userAttempt.value).then(() => {
        router.push({ name: 'profile', params: { user: user.username }});
      });
    };

    return {
      userAttempt,
      login,
      user
    };
  },
};
</script>
