<template>
  <v-layout row wrap>
    <v-flex md8 offset-md2>
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
                    <div class="subheading my-4">({{ album.description }})</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
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
      album: {}
    }
  },
  async mounted () {
    const albumId = this.$store.state.route.params.albumId
    this.album = (await AlbumsService.show(albumId)).data
  }
}
</script>
