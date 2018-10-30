import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('albums', {
      params: {
        search: search
      }
    })
  },
  show (albumId) {
    return Api().get(`album/${albumId}`)
  },
  post (album) {
    return Api().post('albums', album)
  },
  put (album) {
    return Api().put(`album/${album.id}`, album)
  }
  // delete (albumId) {
  //   return Api().delete(`album/${albumId}`)
  // }
}
