<template>  
  <v-app class="app-container"> 
    <v-app-bar app v-show="showNavigationBar">  
      <NavigationBar />  
    </v-app-bar>  

    <v-main>  
      <MainScreen v-if="$route.path === '/'" class="startview"></MainScreen>
      <PhotoCarousel v-if="$route.path === '/'" class="photo-carousel"></PhotoCarousel>
      <Service v-if="$route.path === '/'" class="service"></Service>  
      <CallToAction v-if="$route.path === '/'"></CallToAction>  
      <router-view v-else></router-view>  
    </v-main> 
  </v-app>  
</template>  

<script>  
import NavigationBar from './components/NavigationBar.vue';  
import MainScreen from './views/MainScreen.vue';  
// import Cards from './components/Cards.vue';
// import GlassTable from './components/GlassTable.vue';
import CallToAction from './components/CallToAction.vue';
import PhotoCarousel from './components/PhotoCarousel.vue';
import Service from './components/Service.vue';

export default {  
  name: 'App',  
  components: {  
    NavigationBar, MainScreen, CallToAction, PhotoCarousel, Service  
  },  
  data() {  
    return {  
      showNavigationBar: true,  
      lastScrollPosition: 0,  
    }  
  },  
  mounted() {  
    window.addEventListener('scroll', this.handleScroll)  
  },  
  beforeDestroy() {  
    window.removeEventListener('scroll', this.handleScroll)  
  },  
  methods: {  
    handleScroll() {  
      const currentScrollPosition = window.scrollY  
      if (currentScrollPosition > this.lastScrollPosition) {  
        this.showNavigationBar = false  
      } else {  
        this.showNavigationBar = true  
      }  
      this.lastScrollPosition = currentScrollPosition  
    }  
  }  
} 
</script>

<style>

.app-container {  
  width: 100%;  
  height: 100vh;  
  padding: 20px;  
  margin: 0 auto;  
}  

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

.mainscreen {  
  margin-bottom: 100px;  
}  

.photo-carousel {  
  margin-bottom: 100px;  
}  

.service {  
  margin-bottom: 100px;  
}

.call-to-action {  
  margin-bottom: 100px;  
}
</style>