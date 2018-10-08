<template>
  <div class="hello">
    <h1>Register</h1>
    <v-text-field v-model="email" type="email" label="Email" solo></v-text-field>
    <v-text-field v-model="password" type="password" label="Password" solo></v-text-field>
    <v-btn @click="register">Register</v-btn>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: 'bla@ble.com',
      password: '1234'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
