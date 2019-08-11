<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="/login">Have an account?</router-link>
          </p>

          <ul class="error-messages" v-if="errors.username">
            <li v-for="(error, index) in errors.username" :key="index">Username {{ error }}</li>
          </ul>
          <ul class="error-messages" v-if="errors.email">
            <li v-for="(error, index) in errors.email" :key="index">Email {{ error }}</li>
          </ul>
          <ul class="error-messages" v-if="errors.password">
            <li v-for="(error, index) in errors.password" :key="index">Password {{ error }}</li>
          </ul>

          <form @submit.prevent="register" >
            <fieldset class="form-group">
              <input v-model="attemptRegisterUser.user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="attemptRegisterUser.user.email" class="form-control form-control-lg" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input v-model="attemptRegisterUser.user.password" class="form-control form-control-lg" type="password" placeholder="Password">
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
  name: 'Register',
  setup() {
    const attemptRegisterUser = value({ user: { username: '', email: '', password: '' } });
    const { errors } = useState(['errors']);
    const { REGISTER_USER } = useActions([types.REGISTER_USER]);
    const { router } = useRouter();

    const register = async () => {
      await REGISTER_USER(attemptRegisterUser.value).then(() => {
        router.push('/');
      });
    };

    return {
      register,
      attemptRegisterUser,
      errors,
    };
  },
};
</script>
