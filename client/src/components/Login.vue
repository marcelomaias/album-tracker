<template>
  <v-layout row wrap text-xs-center>
    <v-flex md6 offset-md3>
      <h1 class="display-2 mb-2 mt-5">Log in</h1>
      <div class="subheading mb-3">
        <div>Email: user@mail.com</div>
        <div>Password: 12345678</div>
      </div>
      <v-text-field v-model="email" type="email" label="Email" outline></v-text-field>
      <v-text-field v-model="password" type="password" label="Password" outline></v-text-field>
      <v-alert :value="error" type="error" transition="fade-transition" v-if="error">{{ error }}</v-alert>
      <v-btn @click="login">Log In</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
