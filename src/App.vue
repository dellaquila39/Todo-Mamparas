<template>  
  <v-app>  
    <v-app-bar app>  
      <NavigationBar />  
    </v-app-bar>  

    <v-main>  
      <StartView v-if="$route.path === '/'"></StartView>
      <v-spacer style="height: 85px" v-if="$route.path === '/'"></v-spacer>  
      <Cards v-if="$route.path === '/'"></Cards>
      <v-spacer style="height: 85px" v-if="$route.path === '/'"></v-spacer>  
      <GlassTable v-if="$route.path === '/'"></GlassTable>
      <v-spacer style="height: 85npx" v-if="$route.path === '/'"></v-spacer> 
      <CallToAction v-if="$route.path === '/'"></CallToAction>  
      <router-view v-else></router-view> 
    </v-main>  
  </v-app>  
</template>  

<script>  
import NavigationBar from './components/NavigationBar.vue';    
import StartView from './views/StartView.vue';
import Cards from './components/Cards.vue';
import GlassTable from './components/GlassTable.vue';
import CallToAction from './components/CallToAction.vue';

export default {  
  name: 'App',  
  components: {  
    NavigationBar,StartView,Cards,GlassTable,CallToAction },   
};  
</script>

