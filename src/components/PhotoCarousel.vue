<template>
  <v-container class="photo-carousel">
    <!-- Primera fila: Mamparas de Vidrio -->
    <v-row class="mb-12">
      <v-col cols="12" md="6" order-md="1" order="1">
        <v-card class="card h-100">
          <v-card-title class="card-title">Mamparas de Vidrio</v-card-title>
          <v-card-text class="card-description">
            Despierta la elegancia en tus espacios con nuestras mamparas de vidrio de alta calidad. Diseñadas para fusionar estilo y funcionalidad, nuestras mamparas te brindan privacidad y sofisticación en cualquier ambiente. Ya sea para puertas, baños o áreas de oficina, nuestras mamparas de vidrio son la opción perfecta para aquellos que buscan combinar la estética con la practicidad.
          </v-card-text>
          <v-card-actions>
            <v-btn color="green darken-1" dark @click="goToMamparasView">
              Descubre más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order-md="2" order="2">
        <v-img
          :src="require('@/assets/trabajo/mampara1.jpg')"
          alt="Mamparas de Vidrio"
          class="card-image"
          height="475"
          cover
        ></v-img>
      </v-col>
    </v-row>

    <!-- Segunda fila: Barandas de Vidrio -->
    <v-row class="mb-12">
      <v-col cols="12" md="6" order-md="2" order="1">
        <v-card class="card h-100">
          <v-card-title class="card-title">Barandas de Vidrio</v-card-title>
          <v-card-text class="card-description">
            Elevar la seguridad y el estilo de tus espacios con nuestras barandas de vidrio. Diseñadas para combinar elegancia y resistencia, nuestras barandas te ofrecen una solución perfecta para escaleras, balcones y áreas de recreación. Nuestras barandas de vidrio no solo proporcionan una barrera de seguridad, sino que también agregan un toque de sofisticación y modernidad a cualquier espacio.
          </v-card-text>
          <v-card-actions>
            <v-btn color="green darken-1" dark @click="goToBarandasView">
              Descubre más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order-md="1" order="2">
        <v-img
          :src="require('@/assets/trabajo/fondo3.jpeg')"
          alt="Barandas de Vidrio"
          class="card-image"
          height="475"
          cover
        ></v-img>
      </v-col>
    </v-row>

    <!-- Tercera fila: Cerramientos de Vidrio -->
    <v-row class="mb-12">
      <v-col cols="12" md="6" order-md="1" order="1">
        <v-card class="card h-100">
          <v-card-title class="card-title">Cerramientos de Vidrio</v-card-title>
          <v-card-text class="card-description">
            Creá espacios abiertos y luminosos con nuestros cerramientos de vidrio. Diseñados para fusionar la arquitectura con la naturaleza, nuestros cerramientos te brindan una conexión perfecta entre interior y exterior. Ya sea para crear un espacio de trabajo inspirador o un área de descanso relajante, nuestros cerramientos de vidrio son la opción ideal para embellecer con luz natural todos los espacios.
          </v-card-text>
          <v-card-actions>
            <v-btn color="green darken-1" dark @click="goToCerramientosView">
              Descubre más
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" order-md="2" order="2">
        <v-img
          :src="require('@/assets/trabajo/fondo4.jpg')"
          alt="Cerramientos de Vidrio"
          class="card-image"
          height="475"
          cover
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PhotoCarousel",
  methods: {
    goToMamparasView() {
      this.$router.push("/mamparas");
    },
    goToBarandasView() {
      this.$router.push("/barandas");
    },
    goToCerramientosView() {
      this.$router.push("/cerramientos");
    },
  },
};
</script>

<style scoped>
.photo-carousel {
  padding: 2rem;
}

.card {
  background: linear-gradient(to bottom, #4567b7, #1a1d23);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.card-description {
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
}

.card-image {
  border-radius: 10px;
  overflow: hidden;
}

/* Estilos responsivos */
@media (max-width: 960px) {
  .card-title {
    font-size: 1.5rem;
  }

  .card-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .photo-carousel {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-description {
    font-size: 0.8rem;
  }
}
</style>