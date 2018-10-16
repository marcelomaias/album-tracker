import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Albums from '@/components/Albums'
import Album from '@/components/Album'
import NewAlbum from '@/components/NewAlbum'
import EditAlbum from '@/components/EditAlbum'
import AuthGuard from './router-auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/album/new',
      name: 'new-album',
      component: NewAlbum,
      beforeEnter: AuthGuard
    },
    {
      path: '/album/:albumId',
      name: 'album',
      component: Album
    },
    {
      path: '/album/:albumId/edit',
      name: 'edit-album',
      component: EditAlbum,
      beforeEnter: AuthGuard
    }
  ]
})
