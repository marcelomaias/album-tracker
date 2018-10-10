<template>
    <v-layout row wrap text-xs-center>
    <v-flex md6 offset-md3>
      <h1 class="display-2 mb-4 mt-5">New Album</h1>
      <v-text-field v-model="album.title" type="text" label="Title" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.artist" type="text" label="Artist" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.year" type="text" label="Year" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.description" type="text" label="Description" outline required :rules="[required]"></v-text-field>
      <v-text-field v-model="album.cover" type="text" label="Cover" outline required :rules="[required]"></v-text-field>
      <v-alert :value="error" type="error" transition="fade-transition" v-if="error">{{ error }}</v-alert>
      <v-btn @click="newAlbum">Create</v-btn>
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
    async newAlbum () {
      this.error = null
      const allFilled = Object
        .keys(this.album)
        .every(key => !!this.album[key])
      if (!allFilled) {
        this.error = 'Please fill in all fields.'
        return
      }
      try {
        await AlbumsService.post(this.album)
        this.$router.push({
          name: 'albums'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
