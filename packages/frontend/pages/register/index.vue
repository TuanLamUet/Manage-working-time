<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input v-model="username" type="text" class="input" />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="email" type="email" class="input" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="password" type="password" class="input" />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Notifycation from '@@/components/Notifycation.vue'

export default {
  // components: Notifycation,

  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('auth/signup', {
          username: this.username,
          email: this.email,
          password: this.password
        })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error.response)
      }
    }
  }
}
</script>
