<template>
  <v-app class="app-container">

    <v-app-bar app v-show="showNavigationBar" :elevate-on-scroll="true">
      <NavigationBar />
    </v-app-bar>

    <v-main>

      <template v-if="$route.path === '/'">
        <MainScreen id="inicio" class="main-screen" />
        <PhotoCarousel id="catalogo" class="photo-carousel" />
        <Service id="servicios" class="service" />
        <PayCard class="pay-card" />
        <CallToAction class="call-to-action" />
        <GalleryCTA id="proyectos" class="gallery-cta" />
        <WorkCarousel id="trabajos" class="work-carousel" />
        <WorkFamily class="work-family" />
        <SocialQR class="social-qr" />
      </template>

      <router-view v-else />
    </v-main>

    <Footer class="footer" />
    <CookieBanner />
  </v-app>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import MainScreen from './views/MainScreen.vue';
import CallToAction from './components/CallToAction.vue';
import PhotoCarousel from './components/PhotoCarousel.vue';
import Service from './components/Service.vue';
import PayCard from './components/PayCard.vue';
import WorkCarousel from './components/WorkCarousel.vue';
import GalleryCTA from './components/GalleryCTA.vue';
import WorkFamily from './components/WorkFamily.vue';
import SocialQR from './components/SocialQR.vue';
import Footer from './components/Footer.vue';
import CookieBanner from './components/CookieBanner.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    MainScreen,
    CallToAction,
    PhotoCarousel,
    Service,
    PayCard,
    WorkCarousel,
    GalleryCTA,
    WorkFamily,
    SocialQR,
    Footer,
    CookieBanner
  },
  data() {
    return {
      showNavigationBar: true,
      lastScrollPosition: 0,
      scrollThreshold: 50,
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}


.v-main {
  flex: 1;
}

.main-screen,
.photo-carousel,
.service,
.pay-card,
.call-to-action,
.work-carousel,
.gallery-cta,
.work-family {
  margin-bottom: 100px;
  scroll-margin-top: 100px; 
}


.footer {
  flex-shrink: 0; 
}

@media (max-width: 1264px) {
  .main-screen,
  .photo-carousel,
  .service,
  .pay-card,
  .call-to-action,
  .work-carousel,
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
  .work-carousel,
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
  .work-carousel,
  .gallery-cta,
  .work-family {
    margin-bottom: 40px;
  }
}
</style>