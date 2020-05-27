/* eslint-disable no-console */
<template>
  <v-app>
    <v-row class="wrapper-login-form" justify="center" align="center">
      <div class="login-image">
        <img
          src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
          alt="login_img"
        />
      </div>
      <v-form method="post" @submit.prevent="login">
        <h3>Login</h3>
        <v-col cols="800" sm="200">
          <v-text-field
            v-model="username"
            label="username"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="800" sm="200">
          <v-text-field v-model="password" label="Password"></v-text-field>
        </v-col>
        <div class="my-2">
          <button type="submit">Login</button>
        </div>
      </v-form>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            username: this.username,
            password: this.password
          }
        })

        this.$router.push('/profile')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.login-img {
  margin: 100px;
}

.wrapper-login-form {
  background: #f1f1f1;
}
</style>
