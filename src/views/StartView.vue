<template>  
  <v-container fluid :style="{ backgroundImage: `url(${backgroundImage})` }" class="glass-background">
    <v-row justify="center" align="center" class="min-vh-100">  
      <v-col cols="12" md="6">  
        <v-card class="pa-5 glass-card" outlined>  
          <v-card-title class="text-center">  
            <h1 class="title">Bienvenido a Todo en Mamparas</h1>  
          </v-card-title>  
          <v-card-subtitle class="text-center">  
            <p class="subtitle">Calidad y diseño en cada pieza.</p>  
          </v-card-subtitle>  

          <v-divider></v-divider>  

          <v-card-text>  
            <h2 class="featured-title">Características destacadas</h2>  
            <ul class="features-list">  
              <li>Vidrios a medida</li>  
              <li>Servicios de instalación profesionales</li>  
              <li>Asesoría en diseño y personalización</li>  
              <li>Amplia variedad de tipos y estilos de vidrio</li>  
            </ul>  
          </v-card-text>  

          <v-card-actions>  
            <v-btn href="https://w.app/uvoxGO" color="blue lighten-2">Contáctanos</v-btn>  
          </v-card-actions>  
        </v-card>  
      </v-col>  
    </v-row>  
  </v-container>  
</template>  

<script>
import backgroundImage from '../assets/fondo2.jpg';

export default {  
  name: 'StartView',  
  data() {  
    return {  
      backgroundImage,
    }  
  },  
}  
</script>  

<style scoped>  
.glass-background {  
  background-image: url('../assets/fondo2.jpg');
  background-size: cover;  
  background-position: center;  
  color: #ffffff;  
}  

.glass-card {  
  background: rgba(255, 255, 255, 0.8); /* Fondo blanco semi-transparente */  
  border-radius: 15px;  
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);  
}  

.title {  
  font-size: 2.5rem;  
  font-weight: bold;  
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  
}  

.subtitle {  
  font-size: 1.2rem;  
  margin-top: 10px;  
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);  
}  

.featured-title {  
  font-size: 1.5rem;  
  margin-top: 20px;  
  color: #3a3a3a;  
  text-align: center;  
}  

.features-list {  
  list-style-type: none;  
  padding: 0;  
  margin: 0;  
  font-size: 1.1rem;  
}  

.features-list li {  
  margin: 10px 0;  
  position: relative;  
  padding-left: 20px;  
}  

.features-list li:before {  
  content: "✔"; /* Icono de confirmación */  
  position: absolute;  
  left: 0;  
  color: #2196F3; /* Color azul */  
  font-weight: bold;  
}  

.v-btn {  
  background-color: #2196F3; /* Color de fondo del botón */
  transition: background-color 0.5s ease;
  border-radius: 15px; 
}  

.v-btn:hover {  
  background-color: #1976d2; /* Color al pasar el cursor sobre el botón */  
}  
</style>