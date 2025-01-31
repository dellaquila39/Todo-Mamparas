<template>  
  <v-container fluid class="contenedor-barandas">  
    <v-row justify="center" align="center">  
      <v-col cols="12" md="10" xl="8">   
        <h1 class="titulo-barandas">Barandas</h1>  
        <p class="subtitulo-barandas">En esta sección encontrarás las bsrsndas que tenemos disponibles.</p>  
        <p class="parrafo-barandas">  
          Aquí podrás explorar nuestra variedad de barandas, desde las más elegantes hasta las más funcionales.  
          Nuestro objetivo es brindarte la mejor experiencia de compra en línea.  
        </p>  
        <BarandasCarousel :barandas="barandas" />
        <button class="btn-whatsapp">WhatsApp</button>
      </v-col>  
    </v-row>  
  </v-container>  
</template>  

<script>  
import BarandasCarousel from '@/modulos/barandas/BarandasCarousel.vue';

export default {  
  name: 'BarandasView',  
  components: {  
    BarandasCarousel  
  },  
  data() {  
    return {  
      barandas: [  
        {  
          titulo: 'Mampara de Vidrio Opacid',  
          descripcion: 'Vidrio translúcido que permite la entrada de luz',  
          imagen: require('../../assets/cartas/opacid1.png'),  
        },  
        {  
          titulo: 'Mampara de Vidrio Oscuro',  
          descripcion: 'Vidrio tintado, reduce la luz y la visibilidad',  
          imagen: require('../../assets/cartas/oscuro1.jpg'),  
        },  
        {  
          titulo: 'Mampara de Vidrio Fijo',  
          descripcion: 'Vidrio fijo sin sistema de apertura de facil instalación',  
          imagen: require('../../assets/cartas/fija1.png'),  
        },  
        {  
          titulo: 'Mampara Corrediza',  
          descripcion: 'Vidrio con sistema deslizante para mayor comodidad',  
          imagen: require('../../assets/cartas/corrediza1.jpg'),  
        },  
        {  
          titulo: 'Box de Ducha',  
          descripcion: 'Recinto de ducha cerrado de varias medidas',  
          imagen: require('../../assets/cartas/boxducha1.webp'),  
        },  
        {  
          titulo: 'Mampara Bisagra',  
          descripcion: 'Mampara de vidrio con sistema de bisagra',  
          imagen: require('../../assets/cartas/bisagra1.jpg'),  
        },  
      ],  
    };  
  },  
};  
</script>  

<style scoped>  
.contenedor-barandas {  
  background-image: url('../../assets/fondos/fondo2.jpg');  
  background-size: cover;  
  background-position: center;   
  display: flex;  
  flex-wrap: wrap;  
  flex-direction: column;  
  justify-content: center;  
  align-items: center;  
  color: #fff;  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  
}  

.titulo-barandas {  
  color:rgba(241, 240, 240, 0.568);  
  font-size: 48px;  
  font-weight: bold;  
  margin-bottom: 20px;  
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  
  text-align: center;
}  

.subtitulo-barandas {  
  font-size: 24px;  
  font-weight: normal;  
  margin-bottom: 20px;  
  opacity: 0.8;  
  text-align: center;
}  

.parrafo-barandas {  
  font-size: 18px;  
  font-weight: normal;  
  text-align: center;  
  max-width: 600px;  
  padding: 20px;  
  background-color: rgba(255, 255, 255, 0.1);  
  border-radius: 10px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;  
  
}  

.parrafo-barandas:hover {  
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);  
  transform: translateY(-10px);  
  transition: all 0.4s ease-in-out;  
}  

.btn-whatsapp {  
  background-color: #25D366;  
  color: #fff;  
  border: none;  
  padding: 10px 20px;  
  font-size: 18px;  
  cursor: pointer;  
  border-radius: 5px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  
  margin-top: 20px;
  display: block;
  margin: 0 auto;

}
.btn-whatsapp:hover {  
  background-color: #1DA85F;  
} 

@media (max-width: 600px) {  
  .card { 
    width: 150px;  
    height: 200px;  
  }  
}  

@media (max-width: 400px) {  
  .card { 
    width: 100px;  
    height: 150px;  
  }  
} 
</style>