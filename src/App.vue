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
        <MainScreen class="main-screen" />
        <PhotoCarousel class="photo-carousel" />
        <Service class="service" />
        <PayCard class="pay-card" />
        <CallToAction class="call-to-action" />
        <GalleryCTA class="gallery-cta" />
        <WorkFamily class="work-family" />
      </template>

      <!-- Otras rutas -->
      <router-view v-else />
    </v-main>

    <!-- Footer (ahora fuera del v-main) -->
    <Footer class="footer" />
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import MainScreen from './views/MainScreen.vue';
import CallToAction from './components/CallToAction.vue';
import PhotoCarousel from './components/PhotoCarousel.vue';
import Service from './components/Service.vue';
import PayCard from './components/PayCard.vue';
import GalleryCTA from './components/GalleryCTA.vue';
import WorkFamily from './components/WorkFamily.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    MainScreen,
    CallToAction,
    PhotoCarousel,
    Service,
    PayCard,
    GalleryCTA,
    WorkFamily,
    Footer,
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
/* Estilos base */
.app-container {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

/* Asegura que el contenido principal ocupe el espacio restante */
.v-main {
  flex: 1;
}

/* Espaciado entre secciones - Versión Mejorada */
.main-screen,
.photo-carousel,
.service,
.pay-card,
.call-to-action,
.gallery-cta,
.work-family {
  margin-bottom: 100px;
  scroll-margin-top: 100px; /* Para compensar la barra fija */
}

/* Estilos para el Footer */
.footer {
  flex-shrink: 0; /* Evita que el Footer se encoja */
}

/* Responsive Design */
@media (max-width: 1264px) {
  .main-screen,
  .photo-carousel,
  .service,
  .pay-card,
  .call-to-action,
  .gallery-cta,
  .work-family {
    margin-bottom: 80px;
  }
}

@media (max-width: 960px) {
  .main-screen,
  .photo-carousel,
  .service,
  .pay-card,
  .call-to-action,
  .gallery-cta,
  .work-family {
    margin-bottom: 60px;
  }
}

@media (max-width: 600px) {
  .main-screen,
  .photo-carousel,
  .service,
  .pay-card,
  .call-to-action,
  .gallery-cta,
  .work-family {
    margin-bottom: 40px;
  }
}
</style>