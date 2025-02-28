<template>
  <v-container fluid class="gallery-cta">
    <v-row align="center" class="flex-column flex-md-row">

      <v-col cols="12" md="7" class="text-content pa-6 pa-md-8 order-0 order-md-0">
        <div class="text-wrapper">
          <div class="header-group mb-4">
            <v-icon color="primary" large class="mr-2">mdi-image-filter-hdr</v-icon>
            <span class="overline">GALERÍA DE TRANSFORMACIONES</span>
          </div>
          
          <h2 class="display-text mb-4">
            <span class="text-reveal">Descubre el impacto<br></span>
            <span class="highlight">visual</span> del vidrio
            <v-icon color="accent" class="sparkle">mdi-sparkles</v-icon>
          </h2>
          
          <p class="subtext mb-6">
            <span class="text-reveal">Explora nuestra colección de proyectos<br></span>
            <br>
            <span class="emphasis">Mira el Antes y después de nuestros trabajos</span>
            <v-icon small color="accent" class="ml-1">mdi-camera</v-icon>
          </p>


          <v-btn 
            x-large 
            color="primary" 
            class="cta-btn d-none d-md-inline-flex"
            @click="goToPhotoGallery"
            depressed
            :ripple="false"
          >
            <v-icon left>mdi-image-search</v-icon>
            Ver Galería Completa
            <v-icon right>mdi-arrow-top-right-thick</v-icon>
          </v-btn>
        </div>
      </v-col>


      <v-col cols="12" md="5" class="visual-section pa-0 order-1 order-md-1">
        <div class="glass-container">
          <div class="gallery-preview">
            <div class="thumbnail-grid">
              <div 
                v-for="(project, index) in previewProjects"
                :key="index"
                class="thumbnail-item"
              >
                <v-img
                  :src="project.image"
                  :lazy-src="generateLowResPlaceholder(project.image)"
                  aspect-ratio="1"
                  class="thumbnail-image"
                  transition="scale-transition"
                >
                  <template #placeholder>
                    <div class="image-preloader"></div>
                  </template>
                  
                  <div class="image-overlay"></div>
                  
                  <div class="title-container">
                    <span class="caption">{{ project.title }}</span>
                    <v-icon color="white">mdi-magnify-plus-outline</v-icon>
                  </div>
                </v-img>
              </div>
            </div>
          </div>
        </div>
        

        <div class="glass-overlay"></div>
      </v-col>


      <v-col cols="12" class="text-center order-2 d-md-none">
        <v-btn 
          x-large 
          color="primary" 
          class="cta-btn"
          @click="goToPhotoGallery"
          depressed
          :ripple="false"
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
  image: require('@/assets/proyectos/proyecto-cerramiento.webp'),
  title: 'Cerramientos Modernos'
},
{
  image: require('@/assets/proyectos/proyecto-baranda.webp'),
  title: 'Barandas Elegantes'
},
{
  image: require('@/assets/proyectos/proyecto-mampara.webp'),
  title: 'Mamparas de Diseño'
},
{
  image: require('@/assets/proyectos/proyecto-oficina.webp'),
  title: 'Divisiones de Oficina'
}
    ]
  }),
  methods: {
    goToPhotoGallery() {
      this.$router.push('/gallery');
    },
    generateLowResPlaceholder(image) {

      return image.replace(/(\.\w+)$/, '-low$1');
    }
  },
}
</script>

<style scoped>
.gallery-cta {
  background: linear-gradient(150deg, #f8f9fa 0%, #ffffff 100%);
  min-height: 600px;
  padding: 80px 0;
}


.text-wrapper {
  max-width: 600px;
  margin: 0 auto;
  will-change: transform;
}

.display-text {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.2;
  color: #2A3B5D;
}


.glass-container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  padding: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  transform: translateZ(0);
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 15px;
  height: 100%;
  will-change: transform;
}

.thumbnail-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transform: translateZ(0);
}

.thumbnail-image {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
}

.thumbnail-item:hover .thumbnail-image {
  transform: scale(1.03);
}

.image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 60%);
  transition: opacity 0.3s ease;
}

.title-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  opacity: 0.8; 
  transition: opacity 0.3s ease;
  mix-blend-mode: screen;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.thumbnail-item:hover .title-container {
  opacity: 1;
}

.caption {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem; 
  color: white;
  font-weight: 500;
  letter-spacing: 0.3px;
}


.text-reveal {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
}

@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}


.image-preloader {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { background-color: #f0f2f5; }
  50% { background-color: #e1e4e8; }
  100% { background-color: #f0f2f5; }
}


@media (max-width: 960px) {
  .gallery-cta {
    padding: 60px 0;
    min-height: auto;
  }
  
  .glass-container {
    margin: 0 10px;
    backdrop-filter: blur(8px);
  }
}

@media (max-width: 600px) {
  .thumbnail-grid {
    gap: 8px;
    padding: 10px;
  }
  
  .cta-btn {
    font-size: 0.9rem !important;
    padding: 12px 24px !important;
  }
}
</style>


