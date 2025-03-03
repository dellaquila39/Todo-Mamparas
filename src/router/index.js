import Vue from 'vue'
import VueRouter from 'vue-router'
import MainScreen from '../views/MainScreen.vue'
import MamparasView from '../modulos/mamparas/MamparasView.vue'
import BarandasView from '../modulos/barandas/BarandasView.vue'
import CerramientosView from '../modulos/cerramientos/CerramientosView.vue'
import EspejosView from '../modulos/espejos/EspejosView.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import ContactForm from '../components/ContactForm.vue'
import TerminosCondiciones from '../modulos/legal/TerminosCondiciones.vue'
import PoliticaPrivacidad from '../modulos/legal/PoliticaPrivacidad.vue'
import AvisoLegal from '../modulos/legal/AvisoLegal.vue'

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
    path: '/espejos',
    name: 'EspejosView',
    component: EspejosView
  },
  {
    path: '/gallery',
    name: 'PhotoGallery',
    component: PhotoGallery,
    meta: {
      scrollToTop: true
    }
  },
  {
    path: '/contacto',
    name: 'ContactoForm',
    component: ContactForm
  },
  {
    path: '/terminos',
    name: 'TerminosCondiciones',
    component: TerminosCondiciones
  }, 
  {
    path: '/Privacidad',
    name: 'PoliticaPrivacidad',
    component: PoliticaPrivacidad
  },
  {
    path: '/legal',
    name: 'AvisoLegal',
    component: AvisoLegal
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollToTop) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0, behavior: 'smooth' })
        }, 450)
      })
    }
    return savedPosition || { x: 0, y: 0 }
  }
})

export default router