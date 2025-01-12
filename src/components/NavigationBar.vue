<template>  
  <v-app-bar app color="#2196F3" class="white--text" height="80px">
    <v-avatar title class="logo-avatar" size="60">
      <img :src="require('../assets/logo.jpg')" alt="Logo de Mi Comercio">
    </v-avatar>
    <v-btn icon class="white--text" @click="$router.go(-1)" title="Atrás">  
      <v-icon>mdi-arrow-left</v-icon>  
    </v-btn>  
    <v-btn icon href="https://www.instagram.com/" target="_blank" title="Instagram">  
      <v-icon class="instagram-icon" large>mdi-instagram</v-icon>  
    </v-btn>  
    <v-btn icon href="https://w.app/uvoxGO" target="_blank" title="Whatsapp">  
      <v-icon class="whatsapp-icon" large>mdi-whatsapp</v-icon>  
    </v-btn>  
    <v-btn icon href="mailto:info@example.com" target="_blank" title="Email">  
      <v-icon class="email-icon" large>mdi-email-outline</v-icon>  
    </v-btn>  

    <v-spacer></v-spacer>  

    <v-toolbar-items>  
      <v-btn text class="white--text" @click="goToStartView" title="Inicio">  
        <v-icon class="home" large>mdi-home</v-icon>  
      </v-btn>  
    </v-toolbar-items>  
  </v-app-bar>  
</template>  

<script>  
export default {  
  name: 'NavigationBar',  
  methods: {  
    goToStartView() {  
      this.$router.push('/');  
    },  
  },  
};  
</script>  

<style scoped>  
.logo-avatar {
  width: 60px;
  height: 60px;
  margin-left: 10px;
  border-radius: 50%;
}
.v-btn .v-icon:hover {  
  color: #314c7d;  
  border-radius: 50%;  
}  

.whatsapp-icon, .instagram-icon, .email-icon, .home {  
  color: #fdfefe !important;  
  border-bottom: none !important;  
  padding: 5px;  
}  

.whatsapp-icon:hover,  
.instagram-icon:hover,  
.email-icon:hover,  
.home:hover,  
.v-icon:hover {  
  transform: translateY(-5px);  
  box-shadow: 0 4px 12px rgba(49, 76, 125, 0.4);  
  border-radius: 50%;  
}  
</style>