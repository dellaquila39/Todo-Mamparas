<template>
  <v-app class="app-container">
    <!-- Barra de navegación dinámica -->
    <v-app-bar app v-show="showNavigationBar" :elevate-on-scroll="true">
      <NavigationBar />
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <!-- Ruta principal -->
      <template v-if="$route.path === '/'">
        <MainScreen class="MainScreen" />
        <PhotoCarousel class="photo-carousel" />
        <Service class="service" />
        <CallToAction />
        <GalleryCTA />
        <WorkFamily />
      </template>

      <!-- Otras rutas -->
      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import MainScreen from './views/MainScreen.vue';
import CallToAction from './components/CallToAction.vue';
import PhotoCarousel from './components/PhotoCarousel.vue';
import Service from './components/Service.vue';
import GalleryCTA from './components/GalleryCTA.vue';
import WorkFamily from './components/WorkFamily.vue';


export default {
  name: 'App',
  components: {
    NavigationBar,
    MainScreen,
    CallToAction,
    PhotoCarousel,
    Service,
    GalleryCTA,
    WorkFamily,
  },
  data() {
    return {
      showNavigationBar: true,
      lastScrollPosition: 0,
      scrollThreshold: 50, // Umbral para ocultar/mostrar la barra
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.scrollY;

      // Oculta la barra si el scroll es hacia abajo y supera el umbral
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) > this.scrollThreshold) {
        this.showNavigationBar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      }
    },
  },
};
</script>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .app-container {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .app-container {
    padding: 5px;
  }
}

/* Espaciado entre secciones */
.MainScreen,
.photo-carousel,
.service,
.call-to-action,
.GalleryCTA
.WorkFamily {
  margin-bottom: 100px;
}
</style>