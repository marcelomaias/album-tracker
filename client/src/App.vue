<template>
  <v-app>
    <v-toolbar app color="white">
      <v-toolbar-title class="text-uppercase font-weight-black">
        <v-icon color="black">album</v-icon>
        Albumtracker
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items dark>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="login" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
        <v-btn flat to="register" v-if="!$store.state.isUserLoggedIn">Sign Up</v-btn>
        <v-btn flat to="about">About</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container fluid text-xs-center>
      <v-content>
        <router-view/>
      </v-content>
    </v-container>
  </v-app>
</template>

<style lang="scss">

</style>
