<template>  
  <v-app-bar class=".app-container" app color="#ffffff" height="200px">
    <v-avatar title class="logo-avatar" size="155">
      <img :src="require('@/assets/logos/logo1.jpg')" alt="Logo de Mi Comercio">
    </v-avatar>

    <v-btn icon href="https://www.instagram.com/todo.en.mamparas?igsh=dTBuajFuZjRlOTAy" target="_blank" title="Instagram">  
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
  border-radius: 0%;
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

</style>