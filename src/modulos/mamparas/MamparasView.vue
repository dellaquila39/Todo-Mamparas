<template>  
  <v-container fluid class="fondo-mamparas">  
    <h1 class="titulo-mamparas">Mamparas</h1>  
    <p class="subtitulo-mamparas">En esta sección encontrarás las mamparas que tenemos disponibles.</p>  
    <p class="parrafo-mamparas">Aquí podrás explorar nuestra variedad de mamparas, desde las más elegantes hasta las más funcionales. Nuestro objetivo es brindarte la mejor experiencia de compra en línea.</p>
    <MamparasCarousel :mamparas="mamparas" />
    <button class="btn-whatsapp">WhatsApp</button>  
  </v-container>  
</template>  

<script> 

import MamparasCarousel from '@/modulos/mamparas/MamparasCarousel.vue';

export default {  
  name: 'MamparasView', 
  components: {  
    MamparasCarousel  
  }, 
  data() {  
    return {  
      mamparas: [  
        {  
          titulo: 'Mampara de Vidrio Opacid',  
          descripcion: 'Vidrio translúcido que permite la entrada de luz',  
          imagen: require('../../assets/cartas/opacid1.png')  
        },  
        {  
          titulo: 'Mampara de Vidrio Oscuro',  
          descripcion: 'Vidrio tintado, reduce la luz y la visibilidad',  
          imagen: require('../../assets/cartas/oscuro1.jpg')   
        },
        {  
          titulo: 'Mampara de Vidrio Fijo',  
          descripcion: 'Vidrio fijo sin sistema de apertura de facil instalación',  
          imagen: require('../../assets/cartas/fija1.png')   
        },
        {  
          titulo: 'Mampara Corrediza',  
          descripcion: 'Vidrio con sistema deslizante para mayor comodidad',  
          imagen: require('../../assets/cartas/corrediza1.jpg') 
        }, 
        {  
          titulo: 'Box de Ducha',  
          descripcion: 'Recinto de ducha cerrado de varias medidas',  
          imagen: require('../../assets/cartas/boxducha1.webp')  
        },
        {  
          titulo: 'Mampara Bisagra',  
          descripcion: 'Mampara de vidrio con sitema de bisagra',  
          imagen: require('../../assets/cartas/bisagra1.jpg')  
        },     

      ] 

    };  
  }  
}  
</script>  

<style scoped>  
.fondo-mamparas {  
  background-image: url('../../assets/fondos/fondo2.jpg');  
  background-size: cover;  
  background-position: center;  
  height: 100vh;  
  display: flex;  
  flex-direction: column;  
  justify-content: center;  
  align-items: center;  
  color: #fff;  
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  
}  

.titulo-mamparas {  
  color: rgba(0, 0, 0, 0.568);
  font-size: 48px;  
  font-weight: bold;  
  margin-bottom: 20px;  
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  
}  

.subtitulo-mamparas {  
  font-size: 24px;  
  font-weight: normal;  
  margin-bottom: 20px;  
  opacity: 0.8;  
}  

.parrafo-mamparas {  
  font-size: 18px;  
  font-weight: normal;  
  text-align: center;  
  max-width: 600px;  
  padding: 20px;  
  background-color: rgba(255, 255, 255, 0.1);  
  border-radius: 10px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
}  

.parrafo-mamparas:hover {  
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