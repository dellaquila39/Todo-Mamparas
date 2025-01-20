<template>  
  <v-app-bar app color="#ffffff" class="white--text" height="200px">
    <v-avatar title class="logo-avatar" size="200">
      <img :src="require('@/assets/logos/logo1.jpg')" alt="Logo de Mi Comercio">
    </v-avatar>

    <v-btn icon href="https://www.instagram.com/" target="_blank" title="Instagram">  
      <v-icon class="instagram-icon" large>mdi-instagram</v-icon>  
    </v-btn>  
    <v-btn icon href="https://w.app/uvoxGO" target="_blank" title="Whatsapp">  
      <v-icon class="whatsapp-icon" large>mdi-whatsapp</v-icon>  
    </v-btn>  
    <v-btn icon href="mailto:info@example.com" target="_blank" title="Email">  
      <v-icon class="email-icon" large>mdi-email-outline</v-icon>  
    </v-btn>  
    <v-btn icon @click="goToStartView" title="Inicio">  
      <v-icon class="home" large>mdi-home-roof</v-icon>
    </v-btn>
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
.whatsapp-icon, .instagram-icon, .email-icon, .home {  
  color: #000000 !important;  
  border-bottom: none !important;  
  padding: 5px;  
}  
.whatsapp-icon:hover {
  color: #09ac16 !important;  
  background-color: #ffffff !important;  
  border-radius: 50%;  
  transform: translateY(-5px);
} 
.instagram-icon:hover {
  color: #880181 !important;  
  background-color: #ffffff !important;  
  border-radius: 50%;  
  transform: translateY(-5px);
} 
.email-icon:hover {
  color: #b60808 !important;  
  background-color: #ffffff !important;  
  border-radius: 50%;  
  transform: translateY(-5px);
} 
.home:hover {
  color: #31327d !important;  
  background-color: #ffffff !important;  
  border-radius: 50%;  
  transform: translateY(-5px);
}

</style>