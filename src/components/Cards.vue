<template>  
  <div class="container">  
    <v-row>  
      <v-col cols="12" sm="4">  
        <v-card class="ma-4" elevation="5">  
          <v-card-title>Mamparas</v-card-title>  
          <v-card-text>Transforma tus espacios con nuestras mamparas de vidrio de alta calidad. Diseñadas para proporcionar privacidad y elegancia, nuestras mamparas son perfectas para puertas, baños y áreas de oficina.</v-card-text>
          <v-card-actions>  
            <v-btn color="blue lighten-2">Ver más</v-btn>  
          </v-card-actions>  
        </v-card>  
      </v-col>  
      <v-col cols="12" sm="4">  
        <v-card class="ma-4" elevation="5">  
          <v-card-title>Barandas</v-card-title>  
          <v-card-text>Protege y embellece tus espacios con nuestras barandas de vidrio. Diseñadas para proporcionar seguridad y estilo, nuestras barandas son ideales para escaleras, balcones y áreas de recreación.</v-card-text>  
          <v-card-actions>  
            <v-btn color="blue lighten-2">Ver más</v-btn>  
          </v-card-actions>  
        </v-card>  
      </v-col>  
      <v-col cols="12" sm="4">  
        <v-card class="ma-4" elevation="5">  
          <v-card-title>Cerramientos</v-card-title>  
          <v-card-text>Crea espacios herméticos y seguros con nuestros cerramientos de vidrio. Diseñados para proporcionar una conexión segura y estanca, nuestros cerramientos son perfectos para puertas, ventanas y balcones.</v-card-text>  
          <v-card-actions>  
            <v-btn color="blue lighten-2">Ver más</v-btn>  
          </v-card-actions>  
        </v-card>  
      </v-col>  
    </v-row>  
  </div>  
</template>  

<script>  
export default {  
  name: 'Cards',  
  data() {  
    return {  
      // Aquí puedes agregar datos para cada tarjeta  
    }  
  }  
}  
</script>  

<style scoped>  
n  
.container {  
  background-color: #f7f7f79d; /* Color de fondo transparente */  
}  
.v-card {  
  background-color: rgba(154, 211, 230, 0.692) !important; /* Color de fondo transparente */  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */  
  border-radius: 10px; /* Bordes redondeados */  
  padding: 20px; /* Espacio interior */  
  height: 370px; /* Ajusta el tamaño de la carta */
  position: relative; /* Establece la posición como relative */
  transition: transform 0.2s ease-in-out; /* Agrega una transición suave */
}  
.v-card:hover {  
  transform: scale(1.05); /* Escala la carta un 5% cuando se pasa el mouse */  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Aumenta la sombra cuando se pasa el mouse */  
} 

.v-card__title {  
  font-size: 24px; /* Tamaño del título */  
  font-weight: bold; /* Negrita */  
  color: #333; /* Color del título */  
}  

.v-card__text {  
  font-size: 18px; /* Tamaño del texto */  
  color: #666; /* Color del texto */  
}  

.v-card__actions {  
  position: absolute;  
  bottom: 20px;  
  left: 20px;  
}  

.v-btn {  
  background-color: transparent !important; /* Color de fondo transparente */  
  border: 1px solid #ddd; /* Bordes */  
  color: #333; /* Color del texto */  
  padding: 10px 20px; /* Espacio interior */  
  border-radius: 5px; /* Bordes redondeados */  
}  

.v-btn:hover {  
  background-color: #f7f7f7; /* Color de fondo al pasar el mouse */  
}
</style>