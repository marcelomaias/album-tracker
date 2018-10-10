<template>
  <v-app>
    <v-system-bar status color="primary" dark v-if="$store.state.isUserLoggedIn">
        <v-spacer></v-spacer>
        <div>Hello {{ $store.state.user.email }}</div>
      </v-system-bar>
    <v-toolbar color="white">
      <v-toolbar-title class="text-uppercase font-weight-black">
        <v-icon color="black">album</v-icon>
        Albumtracker
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items dark>
        <v-btn flat to="/">Home</v-btn>
        <!-- <v-btn flat to="about">About</v-btn> -->
        <v-btn flat to="/albums">Albums</v-btn>
        <v-btn flat to="/album/new" v-if="$store.state.isUserLoggedIn">New Album</v-btn>
        <v-btn flat to="/login" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
        <v-btn flat to="/register" v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
        <v-btn flat @click="logout" v-if="$store.state.isUserLoggedIn">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container fluid>
      <v-content>
        <router-view/>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="scss">

</style>
