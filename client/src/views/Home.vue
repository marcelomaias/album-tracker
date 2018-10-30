<template>
  <div class="home">
    <v-layout row>
      <v-flex text-xs-center>
        <h1 class="mt-5 mb-2" :class="{'display-1': $vuetify.breakpoint.smAndDown}">Welcome<span v-if="$store.state.isUserLoggedIn"> {{ $store.state.user.email }}</span>, this is AlbumTracker</h1>
        <h3 class="mb-4" :class="{'subheading': $vuetify.breakpoint.smAndDown, 'headline': $vuetify.breakpoint.mdAndUp}">This is a demo project using Vue, Material Design, Express and SQLite</h3>
        <h4>Feel free to log in using:</h4>
        <div class="subheading">
          <div>Email: user@mail.com</div>
          <div>Password: 12345678</div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
