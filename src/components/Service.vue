<template>  
  <v-container>  
    <h1 class="text-center modern-title">SERVICIOS</h1>  
    <v-row>  
      <v-col v-for="(service, index) in services" :key="index" cols="12" md="3">  
        <v-card class="service-card">  
          <v-card-title class="text-center">  
            <v-icon large class="blue--text">{{ service.icon }}</v-icon>  
          </v-card-title>  
          <v-card-text>  
            <h3 class="text-center">{{ service.title }}</h3>  
            <p class="service-description">{{ service.description }}</p>  
          </v-card-text>  
        </v-card>  
      </v-col>  
    </v-row>  
  </v-container>  
</template>  

<script>  
export default {
  name: "Service",
  data() {  
    return {  
      services: [  
        {  
          title: "ASESORAMIENTO",  
          description: "Conoce nuestras soluciones personalizadas para vidrios y mamparas.Nuestros expertos analizan tus necesidades y ofrecen opciones innovadoras.",  
          icon: "mdi-account-circle",  
        },  
        {  
          title: "CORTE A MEDIDA",  
          description: "Descubre la precisión de nuestro corte a medida para vidrios y mamparas. Tecnología de vanguardia garantiza calidad y precisión en cada corte.",
          icon: "mdi-ruler-square-compass", 
        },  
        {  
          title: "COLOCACIÓN",  
          description: "Confía en nuestros técnicos especializados para la colocación de vidrios y mamparas. Verificamos cada detalle para asegurar una instalación segura y eficiente.",  
          icon: "mdi-wrench",  
        },  
        {  
          title: "REPOSICIÓN",  
          description: "Tenemos la solución. Nuestro equipo analiza el daño y proporciona una reposición de alta calidad. Aseguramos un resultado limpio, rápido, efectivo y duradero.",  
          icon: "mdi-refresh",  
        },  
      ],  
    };  
  },  
};  
</script>  

<style scoped>
.modern-title {  
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Cambia a fuente moderna */  
  font-weight: bold; /* Pone el texto en negrita */  
  margin-bottom: 20px; /* Espaciado debajo del título */ 
  color: rgba(26, 51, 90, 0.918); /* Cambia el color del texto */
}
.service-card {  
  height: 300px; /* Ajusta la altura de todas las tarjetas */  
  display: flex;  
  flex-direction: column; /* Para alinear el contenido verticalmente */  
  justify-content: space-between; /* Distribuye el espacio entre elementos */
  border-radius: 5%;
  transition: box-shadow 0.9s  
} 
.service-description {  
  font-size: 1.1rem; /* Aumenta el tamaño de la fuente de la descripción */  
  line-height: 1.5; /* Espaciado entre líneas para mejor legibilidad */  
}    
  
.v-card:hover {  
  box-shadow: 0 20px 40px rgba(2, 45, 95, 0.637);  
}  
</style>