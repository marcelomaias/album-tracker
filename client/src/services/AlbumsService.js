import Api from '@/services/Api'

export default {
  index () {
    return Api().get('albums')
  },
  show (albumId) {
    return Api().get(`album/${albumId}`)
  },
  post (album) {
    return Api().post('albums', album)
  }
}
