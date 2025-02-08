import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from '../views/MainScreen.vue'
import MamparasView from '../modulos/mamparas/MamparasView.vue'
import BarandasView from '../modulos/barandas/BarandasView.vue'
import CerramientosView from '../modulos/cerramientos/CerramientosView.vue'
import PhotoGallery from '../components/PhotoGallery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainScreen',
    component: MainScreen
  },
  {
    path: '/mamparas',
    name: 'MamparasView',
    component: MamparasView
  },
  {
    path: '/barandas',
    name: 'BarandasView',
    component: BarandasView
  },
  {
    path: '/cerramientos',
    name: 'CerramientosView',
    component: CerramientosView
  },
  {
    path: '/gallery',
    name: 'PhotoGallery',
    component: PhotoGallery
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
