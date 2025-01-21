<template>  
  <v-app>  
    <v-app-bar app>  
      <NavigationBar />  
    </v-app-bar>  

    <v-main>  
      <MainScreen v-if="$route.path === '/'" class="startview"></MainScreen>
      <PhotoCarousel v-if="$route.path === '/'" class="photo-carousel"></PhotoCarousel>
      <Service v-if="$route.path === '/'" class="service"></Service> 
      <Cards v-if="$route.path === '/'" class="cards"></Cards>    
      <GlassTable v-if="$route.path === '/'" class="glass-table"></GlassTable>  
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
    NavigationBar,MainScreen,CallToAction,PhotoCarousel,Service },   
};  
</script>

<style>

.startview {  
  margin-bottom: 100px;  
}  

/* .cards {  
  margin-bottom: 85px;  
}   */

.photo-carousel {  
  margin-bottom: 200px;  
}  

/* .glass-table {  
  margin-bottom: 85px;  
}  */

.service {  
  margin-bottom: 200px;  
}

.call-to-action {  
  margin-bottom: 200px;  
}
</style>