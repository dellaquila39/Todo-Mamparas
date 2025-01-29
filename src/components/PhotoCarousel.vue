<template>  
  <div class="photo-carousel">  
    <div class="row">  
      <div class="col-md-6 order-md-1 order-1 h-100">  
        <div class="card h-100 w-100">  
          <h2 class="card-title">Mamparas de Vidrio</h2>  
          <p class="card-description">Despierta la elegancia en tus espacios con nuestras mamparas de vidrio de alta calidad. Diseñadas para fusionar estilo y funcionalidad, nuestras mamparas te brindan privacidad y sofisticación en cualquier ambiente. Ya sea para puertas, baños o áreas de oficina, nuestras mamparas de vidrio son la opción perfecta para aquellos que buscan combinar la estética con la practicidad.</p>  
          <button class="card-button" @click="goToMamparasView">Descubre más</button>  
        </div>  
      </div>  
      <div class="col-md-6 order-md-2 order-2">  
        <v-carousel cycle height="475" hide-delimiters>  
          <v-carousel-item v-for="image in images" :key="image.id">  
            <div class="carousel-item-wrapper">  
              <img :src="require(`@/assets/trabajo/${image.src}`)" alt="Imagen del trabajo" class="carousel-image" />  
              <div class="carousel-overlay">  
                <h2 class="carousel-title">{{ image.title }}</h2>  
                <p class="carousel-description">{{ image.description }}</p>  
              </div>  
            </div>  
          </v-carousel-item>  
        </v-carousel>  
      </div>  
    </div>  
    <div class="row mt-12">  
      <div class="col-md-6 order-md-2 order-1 h-100">  
        <div class="card h-100 w-100">  
          <h2 class="card-title">Barandas de Vidrio</h2>  
          <p class="card-description">Elevar la seguridad y el estilo de tus espacios con nuestras barandas de vidrio. Diseñadas para combinar elegancia y resistencia, nuestras barandas te ofrecen una solución perfecta para escaleras, balcones y áreas de recreación. Nuestras barandas de vidrio no solo proporcionan una barrera de seguridad, sino que también agregan un toque de sofisticación y modernidad a cualquier espacio.</p>  
          <button class="card-button">Descubre más</button>  
        </div>  
      </div>  
      <div class="col-md-6 order-md-1 order-2">  
        <v-carousel cycle height="475" hide-delimiters>  
          <v-carousel-item v-for="image in images2" :key="image.id">  
            <div class="carousel-item-wrapper">  
              <img :src="require(`@/assets/trabajo/${image.src}`)" alt="Imagen del trabajo" class="carousel-image" />  
              <div class="carousel-overlay">  
                <h2 class="carousel-title">{{ image.title }}</h2>  
                <p class="carousel-description">{{ image.description }}</p>  
              </div>  
            </div>  
          </v-carousel-item>  
        </v-carousel>  
      </div>  
    </div>  
    <div class="row mt-12">  
      <div class="col-md-6 order-md-1 order-1 h-100">  
        <div class="card h-100 w-100">  
          <h2 class="card-title">Cerramientos de Vidrio</h2>  
          <p class="card-description">Creá espacios abiertos y luminosos con nuestros cerramientos de vidrio. Diseñados para fusionar la arquitectura con la naturaleza, nuestros cerramientos te brindan una conexión perfecta entre interior y exterior. Ya sea para crear un espacio de trabajo inspirador o un área de descanso relajante, nuestros cerramientos de vidrio son la opción ideal para  embellecer con luz natural todos los espacios</p>  
          <button class="card-button">Descubre más</button>  
        </div>  
      </div>  
      <div class="col-md-6 order-md-2 order-2">  
        <v-carousel cycle height="475" hide-delimiters>  
          <v-carousel-item v-for="image in images3" :key="image.id">  
            <div class="carousel-item-wrapper">  
              <img :src="require(`@/assets/trabajo/${image.src}`)" alt="Imagen del trabajo" class="carousel-image" />  
              <div class="carousel-overlay">  
                <h2 class="carousel-title">{{ image.title }}</h2>  
                <p class="carousel-description">{{ image.description }}</p>  
              </div>  
            </div>  
          </v-carousel-item>  
        </v-carousel>  
      </div>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: 'PhotoCarousel',  
  data() {  
    return {  
      images: [  
        {  
          id: 1,  
          src: 'mampara1.jpg',  
          title: 'Título de la obra 1',  
          description: 'Descripción de la obra 1',  
        },  
      ],  
      images2: [  
        {  
          id: 1,  
          src: 'fondo3.jpeg',  
          title: 'Título de la obra 6',  
          description: 'Descripción de la obra 6',  
        },  
      ],  
      images3: [  
        {  
          id: 1,  
          src: 'fondo4.jpg',  
          title: 'Título de la obra 11',  
          description: 'Descripción de la obra 11',  
        },  
      ],  
    };  
  },  
  methods: {  
    goToMamparasView() {  
      this.$router.push('/mamparas');
    }  
  }  
};  
</script>  

<style scoped>  
.photo-carousel {  
  position: relative;  
  overflow: hidden;  
}  

.row {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: center;  
}  

.col-md-6 {  
  width: 50%;  
  padding: 20px;  
}  

.card {  
  background: linear-gradient(to bottom, #4567b7, #1a1d23);  
  padding: 20px; 
  height: 475px; 
  border: 1px solid #ddd;  
  border-radius: 10px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
  transition: all 0.3s ease-in-out;  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
}  

.card-title {  
  font-size: 36px;  
  font-weight: bold;  
  color: #fff;  
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);  
  margin-bottom: 10px;  
}  

.card-description {  
  font-size: 18px;  
  color: #ccc;  
  margin-bottom: 20px;  
}  

.card-button {  
  background-color: #4CAF50;  
  color: #fff;  
  padding: 10px 20px;  
  border: none;  
  border-radius: 5px;  
  cursor: pointer;  
  transition: all 0.3s ease-in-out;  
}  

.card-button:hover {  
  background-color: #3e8e41;  
}  

.card:hover {  
  transform: scale(1.05);  
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);  
}  

.carousel-item-wrapper {  
  display: flex;  
  flex-wrap: wrap;  
  justify-content: center;  
}  

.carousel-image {  
  max-width: 100%;  
  height: auto;  
}  

@media (max-width: 768px) {  
  .row {  
    flex-direction: column;  
  }  
  .col-md-6 {  
    width: 100%;  
  }  
  .card {  
    margin-bottom: 20px;  
  }  
  .v-carousel {  
    margin-top: 20px;  
  }  
}  
</style>