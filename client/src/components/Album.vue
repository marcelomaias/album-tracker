<template>
  <v-layout row wrap>
    <v-flex md10 offset-md1>
      <v-layout row wrap>
        <v-flex>
          <v-card class="mx-4 my-2">
            <v-layout row wrap>
              <v-flex xs12 sm5>
                <v-img :src="album.cover" contain></v-img>
              </v-flex>
              <v-flex xs12 sm7>
                <v-card-title primary-title>
                  <div>
                    <div class="display-2">{{ album.title }}</div>
                    <div class="headline right my-2">({{ album.year }})</div>
                    <div class="headline my-2">{{ album.artist }}</div>
                    <div class="subheading my-4">{{ album.description }}</div>
                  </div>
                </v-card-title>
                <v-divider light></v-divider>
              <v-card-actions v-if="$store.state.isUserLoggedIn">
                <v-spacer></v-spacer>
                <v-btn flat @click="navigateTo({name: 'edit-album', params: {albumId: album.id}})">Edit</v-btn>
              </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
          <v-btn class="right mr-4" dark @click="backBtn">
            <v-icon left dark>arrow_back_ios</v-icon>
            Back
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import AlbumsService from '@/services/AlbumsService'

export default {
  data () {
    return {
      album: {}
    }
  },
  methods: {
    backBtn (route) {
      this.$router.push(-1)
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const albumId = this.$store.state.route.params.albumId
    this.album = (await AlbumsService.show(albumId)).data
  }
}
</script>
