<template>  
  <v-app>  
    <v-app-bar app>  
      <NavigationBar />  
    </v-app-bar>  

    <v-main>  
      <StartView v-if="$route.path === '/'"></StartView>  
      <router-view v-else></router-view>  
    </v-main>  
  </v-app>  
</template>  

<script>  
import NavigationBar from './components/NavigationBar.vue';    
import StartView from './views/StartView.vue';  

export default {  
  name: 'App',  
  components: {  
    NavigationBar,StartView },   
};  
</script>