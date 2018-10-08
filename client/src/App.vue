<template>
  <v-app>
    <v-container fluid text-xs-center>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <v-content>
        <router-view/>
      </v-content>
    </v-container>
  </v-app>
</template>

<style lang="scss">

</style>
