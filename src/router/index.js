import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/user/LoginView.vue'
import AnimeListView from '../views/anime/AnimeListView.vue'
import AnimeDetailView from '../views/anime/AnimeDetail.vue'
import GStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/animeList',
    name: 'animeList',
    component: AnimeListView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/animeDetail/:id',
    name: 'animeDetail',
    props: true,
    component: AnimeDetailView,
    beforeEnter: (to) => {
      console.log(to.params.id)
      GStore.animeDetail = GStore.animeList.info.filter(
        (itemInArray) => itemInArray.mal_id == to.params.id
      )
      console.log(GStore.animeDetail)
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
