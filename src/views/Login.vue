<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="/register">Have an account?</router-link>
          </p>

          <ul class="error-messages" v-if="errors">
            <li>Email or password invalid</li>
          </ul>

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
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

import types from '../store/types';

export default {
  name: 'Login',
  setup() {
    const userAttempt = value({ user: { email: '', password: '' } });
    const { errors } = useState(['errors']);
    const { LOGIN_USER } = useActions([types.LOGIN_USER]);
    const { router } = useRouter();

    const login = async () => {
      await LOGIN_USER(userAttempt.value).then(() => {
        router.push('/');
      });
    };

    return {
      errors,
      userAttempt,
      login,
    };
  },
};
</script>
