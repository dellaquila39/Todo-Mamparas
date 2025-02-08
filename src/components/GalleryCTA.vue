<template>
  <v-container fluid class="gallery-cta">
    <v-row align="center" class="flex-column flex-md-row">
      <!-- Sección de Texto -->
      <v-col cols="12" md="7" class="text-content pa-6 pa-md-8 order-0 order-md-0">
        <div class="text-wrapper">
          <div class="header-group mb-4">
            <v-icon color="primary" large class="mr-2">mdi-image-filter-hdr</v-icon>
            <span class="overline">GALERÍA DE TRANSFORMACIONES</span>
          </div>
          
          <h2 class="display-text mb-4">
            Descubre el impacto<br>
            <span class="highlight">visual</span> del vidrio
            <v-icon color="accent" class="sparkle">mdi-sparkles</v-icon>
          </h2>
          
          <p class="subtext mb-6">
            Explora nuestra colección de proyectos<br>
            <span class="emphasis">Mira el Antes y después de nuestros trabajos</span>
            <v-icon small color="accent" class="ml-1">mdi-camera</v-icon>
          </p>

          <!-- Botón desktop -->
          <v-btn 
            x-large 
            color="primary" 
            class="cta-btn d-none d-md-inline-flex"
            @click="goToPhotoGallery"
            depressed
          >
            <v-icon left>mdi-image-search</v-icon>
            Ver Galería Completa
            <v-icon right>mdi-arrow-top-right-thick</v-icon>
          </v-btn>
        </div>
      </v-col>

      <!-- Sección Visual -->
      <v-col cols="12" md="5" class="visual-section pa-0 order-1 order-md-1n">
        <div class="glass-container">
          <div class="gallery-preview">
            <div class="thumbnail-grid">
              <div 
                v-for="(project, index) in previewProjects"
                :key="index"
                class="thumbnail-item"
                :style="`background-image: url(${project.image})`"
              >
                <!-- Fondo oscuro semi-transparente -->
                <div class="image-overlay"></div>
                
                <!-- Contenedor de título separado -->
                <div class="title-container">
                  <span class="caption">{{ project.title }}</span>
                  <v-icon color="white">mdi-magnify-plus-outline</v-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Overlay de vidrio SIN texto -->
        <div class="glass-overlay"></div>
      </v-col>

      <!-- Botón mobile -->
      <v-col cols="12" class="text-center order-2 d-md-none">
        <v-btn 
          x-large 
          color="primary" 
          class="cta-btn"
          @click="goToPhotoGallery"
          depressed
        >
          <v-icon left>mdi-image-search</v-icon>
          Ver Galería Completa
          <v-icon right>mdi-arrow-top-right-thick</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GalleryCTA',
  data: () => ({
    previewProjects: [
      {
        image: require('@/assets/proyectos/proyecto-cerramiento.jpg'),
        title: 'Cerramientos Modernos'
      },
      {
        image: require('@/assets/proyectos/proyecto-baranda.jpg'),
        title: 'Barandas Elegantes'
      },
      {
        image: require('@/assets/proyectos/proyecto-mampara.png'),
        title: 'Mamparas de Diseño'
      },
      {
        image: require('@/assets/proyectos/proyecto-oficina.jpg'),
        title: 'Divisiones de Oficina'
      }
    ]
  }),
  methods: {
    goToPhotoGallery() {
      this.$router.push('/gallery');
    },
  },
}
</script>

<style scoped>
.gallery-cta {
  background: linear-gradient(150deg, #f8f9fa 0%, #ffffff 100%);
  min-height: 600px;
  padding: 80px 0;
}

.text-content {
  padding-right: 8% !important;
}

.text-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.primary {
  background-color: #2A3B5D !important;
  border-color: #2A3B5D !important;
}

.accent {
  color: #4A667A !important;
}

/* Tipografía */
.overline {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 3px !important;
  font-weight: 600 !important;
  color: #4A667A;
  font-size: 0.9rem !important;
}

.display-text {
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #2A3B5D;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 3px;
  background: currentColor;
  opacity: 0.3;
}

.subtext {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #495057;
}

/* Sección Visual */
.glass-container {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  z-index: 1;
}

.gallery-preview {
  position: relative;
  border-radius: 20px;
  height: 500px;
  overflow: hidden;
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 15px;
  height: 100%;
}

.thumbnail-item {
  position: relative;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  min-height: 150px;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.thumbnail-item:hover .image-overlay {
  background: rgba(0, 0, 0, 0.1);
}

.title-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;
}

.thumbnail-item:hover .title-container {
  opacity: 1;
}

.caption {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: white;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
  padding: 0 10px;
}

.glass-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  pointer-events: none;
  z-index: 0;
}

/* Botón */
.cta-btn {
  font-family: 'Inter', sans-serif;
  font-weight: 600 !important;
  letter-spacing: 0.5px !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 6px rgba(42, 59, 93, 0.1) !important;
  margin-top: 30px;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(42, 59, 93, 0.2) !important;
}

/* Responsive */
@media (max-width: 960px) {
  .display-text {
    font-size: 2rem;
  }
  
  .gallery-preview {
    height: 400px;
  }
}

@media (max-width: 600px) {
  .gallery-cta {
    padding: 50px 0;
  }
  
  .display-text {
    font-size: 1.75rem;
  }
  
  .gallery-preview {
    height: 300px;
  }
  
  .cta-btn {
    width: 100%;
  }
}
</style>