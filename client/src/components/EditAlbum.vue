<template>
    <v-layout row wrap text-xs-center>
    <v-flex md6 offset-md3>
      <h1 class="display-2 mb-4 mt-5">Edit Album</h1>
      <v-text-field v-model="album.title" type="text" label="Title" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.artist" type="text" label="Artist" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.year" type="text" label="Year" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.description" type="text" label="Description" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.cover" type="text" label="Cover" outline required :rules="[required]"></v-text-field>
      <v-alert :value="error" type="error" transition="fade-transition" v-if="error">{{ error }}</v-alert>
      <v-btn @click="cancel">Cancel</v-btn>
      <v-btn @click="save" class="success">Save</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import AlbumsService from '@/services/AlbumsService'

export default {
  data () {
    return {
      album: {
        title: null,
        year: null,
        artist: null,
        description: null,
        cover: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const allFilled = Object
        .keys(this.album)
        .every(key => !!this.album[key])
      if (!allFilled) {
        this.error = 'Please fill in all fields.'
      }

      const albumId = this.$store.state.route.params.albumId
      try {
        await AlbumsService.put(this.album)
        this.$router.push({
          name: 'album',
          params: {
            albumId: albumId
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    cancel () {
      this.$router.go(-1)
    }
  },
  async mounted () {
    try {
      const albumId = this.$store.state.route.params.albumId
      this.album = (await AlbumsService.show(albumId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>
