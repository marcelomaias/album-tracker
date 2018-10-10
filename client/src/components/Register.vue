<template>
  <v-layout row wrap text-xs-center>
    <v-flex md6 offset-md3>
      <h1 class="display-2 mb-4 mt-5">Register</h1>
      <v-text-field v-model="email" type="email" label="Email" outline></v-text-field>
      <v-text-field v-model="password" type="password" label="Password" outline></v-text-field>
      <v-alert :value="error" type="error" transition="fade-transition" v-if="error">{{ error }}</v-alert>
      <v-btn @click="register">Register</v-btn>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
