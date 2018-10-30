<template>
  <v-layout row wrap>
    <v-flex md8 offset-md2>
      <h1 class="display-2 mb-4 mt-5">Albums</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 v-for="album in albums" :key="album.id">
          <v-card class="mx-2 my-2">
            <v-layout>
              <v-flex xs5>
                <v-img v-if="!album.cover" src="../assets/img-placeholder.png" contain></v-img>
                <v-img v-if="album.cover" :src="album.cover" contain></v-img>
              </v-flex>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ album.title }}</div>
                    <div>{{ album.artist }}</div>
                    <div>({{ album.year }})</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn flat @click="navigateTo({name: 'album', params: {albumId: album.id}})">View album</v-btn>
              </v-card-actions>
          </v-card>
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
      albums: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.albums = (await AlbumsService.index()).data
  }
}
</script>
