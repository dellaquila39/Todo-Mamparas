<template>
  <v-container class="photo-carousel">
    <div 
      v-for="(section, index) in sections" 
      :key="index"
      class="section-container"
      :class="{ 'reverse-section': index % 2 === 0 }"
    >
      <v-card class="section-card">
        <v-row no-gutters class="align-stretch">
          <!-- Columna de texto -->
          <v-col cols="12" md="6" class="text-content">
            <div class="text-wrapper d-flex flex-column justify-center">
              <div class="decorative-line mx-auto"></div>
              <h2 class="section-title text-center">{{ section.title }}</h2>
              <div class="section-description-container">
                <p class="section-description text-center">{{ section.description }}</p>
              </div>
              <div class="text-center">
                <v-btn
                  :color="section.color"
                  class="cta-btn mx-auto"
                  large
                  @click="goToView(section.route)"
                >
                  <v-icon left>{{ section.icon }}</v-icon>
                  {{ section.cta }}
                </v-btn>
              </div>
            </div>
          </v-col>

          <!-- Columna de imagen -->
          <v-col cols="12" md="6" class="image-content pa-0">
            <v-img
              :src="section.image"
              :lazy-src="section.image"
              aspect-ratio="1.5"
              cover
              class="fill-height"
            >
              <!-- Placeholder durante la carga -->
              <template #placeholder>
                <div class="image-preloader"></div>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "PhotoCarousel",
  data() {
    return {
      sections: [
        {
          title: "Mamparas de Vidrio",
          description: "Despierta la elegancia en tus espacios con nuestras mamparas de vidrio de alta calidad...",
          image: require('@/assets/trabajo/mampara2.webp?w=1920&q=75'), // Optimizada
          icon: "mdi-shower",
          color: "primary darken-3",  
          route: "/mamparas",
          cta: "Explora modelos"
        },
        {
          title: "Barandas de Vidrio",
          description: "Elevar la seguridad y el estilo de tus espacios con nuestras barandas de vidrio...",
          image: require('@/assets/trabajo/fondo3.webp?w=1920&q=75'), // Optimizada
          icon: "mdi-blinds-vertical-closed",
          color: "primary darken-3",
          route: "/barandas",
          cta: "Explora modelos"
        },
        {
          title: "Cerramientos de Vidrio",
          description: "Creá espacios abiertos y luminosos con nuestros cerramientos de vidrio...",
          image: require('@/assets/trabajo/fondo4.webp?w=1920&q=75'), // Optimizada
          icon: "mdi-wall",
          color: "primary darken-3",
          route: "/cerramientos",
          cta: "Explora modelos"
        },
        {
          title: "Espejos",
          description: "Transformá tus espacios con nuestros espejos y estilos más modernos...",
          image: require('@/assets/cartas/espejo.webp?w=800&q=80'), // Optimizada (tamaño menor)
          icon: "mdi-mirror",
          color: "primary darken-3",
          route: "/espejos",
          cta: "Explora modelos"
        }
      ]
    };
  },
  methods: {
    goToView(route) {
      this.$router.push(route); // Navegación programática
    }
  }
};
</script>

<style lang="scss" scoped>
.photo-carousel {
  padding: 4rem 1rem;

  @media (max-width: 600px) {
    padding: 2rem 0.5rem;
  }
}

.section-container {
  margin-bottom: 4rem;

  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }
}

.section-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08) !important;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 12px 32px rgba(0,0,0,0.12) !important;
  }
}

.text-content {
  .text-wrapper {
    height: 100%;
    padding: 2rem;

    @media (min-width: 960px) {
      padding: 3rem;
      max-width: 85%;
      margin: 0 auto;
    }
  }
}

.decorative-line {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #2A3B5D 0%, #4A667A 100%);
  margin: 0 auto 1.5rem auto;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.75rem;
  color: #2A3B5D;
  margin-bottom: 1rem;

  @media (min-width: 960px) {
    font-size: 2rem;
  }
}

.section-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #4A667A;
  margin: 0 auto 1.5rem;
  max-width: 600px;
}

.cta-btn {
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 0.8rem 1.8rem !important;
  transition: transform 0.2s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
}

.image-content {
  min-height: 350px;

  .v-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    min-height: 250px;
  }
}

.image-preloader {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400% 400%;
  animation: preloader-gradient 1.5s ease infinite;
}

@keyframes preloader-gradient {
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (min-width: 960px) {
  .reverse-section .v-row {
    flex-direction: row-reverse;
  }

  .section-card .v-row {
    min-height: 500px;
  }
}
</style>