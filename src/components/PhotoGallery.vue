<template>
  <v-container class="gallery-container">
    <!-- Título con referencia para scroll -->
    <div ref="titleAnchor">
      <v-row class="title-wrapper">
        <v-col cols="12">
          <div class="animated-title">
            <v-icon class="decor-icon decor-1">mdi-star-circle</v-icon>
            <v-icon class="decor-icon decor-2">mdi-sparkles</v-icon>
            <v-icon class="decor-icon decor-3">mdi-circle-multiple</v-icon>
            
            <h1 class="text-h3 text-md-h2 font-weight-bold text-center">
              <span class="title-text">Galeria de</span>
              <span class="highlighted-text">Exitos!</span>
            </h1>
            
            <div class="title-line"></div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Galería de Proyectos -->
    <v-row class="cards-wrapper">
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card
          :class="['project-card', { 'mobile-card': isMobile }]"
          :elevation="isMobile ? 4 : 2"
          @click="handleCardClick(project, index)"
        >
          <before-after-slider
            :before-image="project.before"
            :after-image="project.after"
            class="image-comparison"
            @slide-start="disableLightbox"
            @slide-end="enableLightbox"
          />

          <v-card-text class="card-content">
            <div class="text-h5 primary--text mb-2">
              {{ project.title }}
            </div>
            <div class="text-body-1 secondary--text">
              {{ project.description }}
            </div>
            
            <v-fade-transition>
              <v-btn
                v-if="isMobile"
                fab
                small
                color="accent"
                class="project-details"
              >
                <v-icon>mdi-magnify-expand</v-icon>
              </v-btn>
            </v-fade-transition>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Lightbox Fullscreen (solo móvil) -->
    <v-dialog
      v-model="lightbox.open"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="lightbox-card">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="closeLightbox">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ currentProject.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn text @click="navigate(-1)" :disabled="currentIndex === 0">
              Anterior
            </v-btn>
            <v-btn text @click="navigate(1)" :disabled="currentIndex === projects.length - 1">
              Siguiente
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-container fluid class="lightbox-content">
          <before-after-slider
            :before-image="currentProject.before"
            :after-image="currentProject.after"
            class="fullscreen-slider"
          />
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import BeforeAfterSlider from './BeforeAfterSlider.vue'

export default {
  name: 'PhotoGallery',
  components: {
    BeforeAfterSlider
  },

  data: () => ({
    projects: [
    {
  title: 'Box de ducha Moderno',
  description: 'Transformación con vidrio templado transparente',
  before: require('@/assets/antes-despues/antes1.jpg'),
  after: require('@/assets/antes-despues/despues1.jpg')
},
{
  title: 'Box de ducha Opacid',
  description: 'Transformación con vidrio templado esmerilado',
  before: require('@/assets/antes-despues/antes2.jpg'),
  after: require('@/assets/antes-despues/despues2.jpg')
},
{
  title: 'Box de ducha Opacid',
  description: 'Transformación con vidrio templado esmerilado', 
  before: require('@/assets/antes-despues/antes3.jpg'),
  after: require('@/assets/antes-despues/despues3.jpg')
},
{
  title: 'Box de ducha Semi Transparente',
  description: 'Transformación con vidrio templado transparente y esmerilado',
  before: require('@/assets/antes-despues/antes4.jpg'),
  after: require('@/assets/antes-despues/despues4.jpg')
},
{
  title: 'Mampara de Baño Corrediza (4 paños)',
  description: 'Transformación con vidrio templado esmerilado',
  before: require('@/assets/antes-despues/antes5.jpg'),
  after: require('@/assets/antes-despues/despues5.jpg')
},
{
  title: 'Mampara de Baño Corrediza (2 paños)',
  description: 'Transformación con vidrio templado semi transparente',
  before: require('@/assets/antes-despues/antes6.jpg'),
  after: require('@/assets/antes-despues/despues6.jpg')
},
{
  title: 'Mampara de baño Fija',
  description: 'Transformación con vidrio templado transparente',
  before: require('@/assets/antes-despues/antes7.jpg'),
  after: require('@/assets/antes-despues/despues7.jpg')
},
{
  title: 'Mampara de Baño Corrediza (2 paños)',
  description: 'Transformación con vidrio templado semi transparente',
  before: require('@/assets/antes-despues/antes8.jpg'),
  after: require('@/assets/antes-despues/despues8.jpg')
},
{
  title: 'Box de ducha Opacid',
  description: 'Transformación con vidrio templado esmerilado',
  before: require('@/assets/antes-despues/antes9.jpg'),
  after: require('@/assets/antes-despues/despues9.jpg')
},
{
  title: 'Mampara de baño Fija',
  description: 'Transformación con vidrio templado semi transparente',
  before: require('@/assets/antes-despues/antes10.jpg'),
  after: require('@/assets/antes-despues/despues10.jpg')
},
{
  title: 'Box de ducha Semi Octagonal Doble Opacid',
  description: 'Transformación con vidrio templado esmerilado de ambos lados',
  before: require('@/assets/antes-despues/antes11.jpg'),
  after: require('@/assets/antes-despues/despues11.jpg')
},
    ],
    lightbox: {
      open: false,
      currentIndex: 0
    },
    allowLightbox: true
  }),

  computed: {
    currentProject() {
      return this.projects[this.lightbox.currentIndex] || {}
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.scrollToTitle()
      window.addEventListener('load', this.scrollToTitle)
    })
  },

  beforeDestroy() {
    window.removeEventListener('load', this.scrollToTitle)
  },

  methods: {
    scrollToTitle() {
      if (this.$refs.titleAnchor) {
        this.$refs.titleAnchor.scrollIntoView({
          behavior: 'auto',
          block: 'start'
        })
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    handleCardClick(project, index) {
      if (this.isMobile && this.allowLightbox) {
        this.openLightbox(project, index)
      }
    },
    openLightbox(project, index) {
      this.lightbox.currentIndex = index
      this.lightbox.open = true
    },
    closeLightbox() {
      this.lightbox.open = false
    },
    navigate(direction) {
      const newIndex = this.lightbox.currentIndex + direction
      if (newIndex >= 0 && newIndex < this.projects.length) {
        this.lightbox.currentIndex = newIndex
      }
    },
    disableLightbox() {
      this.allowLightbox = false
    },
    enableLightbox() {
      setTimeout(() => {
        this.allowLightbox = true
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-container {
  background: linear-gradient(to bottom right, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 0;
  min-height: 100vh;
  overflow-anchor: none;
  animation: pageEntrance 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes pageEntrance {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .title-wrapper {
    position: relative;
    margin-bottom: 4rem;
    overflow: hidden;
    scroll-margin-top: 80px; // Espacio para headers fijos

    .animated-title {
      position: relative;
      padding: 2rem 0;
      will-change: transform;
      
      h1 {
        font-family: 'Poppins', sans-serif !important;
        letter-spacing: 2px !important;
        text-transform: uppercase;
        position: relative;
        z-index: 2;
        backface-visibility: hidden;
      }

      .title-text {
        color: #2c3e50;
        display: block;
        text-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
      }

      .highlighted-text {
        color: #4a00e0;
        background: linear-gradient(45deg, #8e2de2, #4a00e0);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: linear-gradient(90deg, #4a00e0 0%, #8e2de2 100%);
          border-radius: 2px;
        }
      }

      .title-line {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 4px;
        background: #4a00e0;
        border-radius: 2px;
        opacity: 0.2;
        z-index: 1;
      }

      .decor-icon {
        position: absolute;
        color: #8e2de2;
        opacity: 0.4;
        animation: float 4s infinite ease-in-out;
        backface-visibility: hidden;
        
        &.decor-1 {
          top: 10%;
          left: 15%;
          font-size: 2rem;
          animation-delay: 0.2s;
        }
        
        &.decor-2 {
          top: 60%;
          right: 20%;
          font-size: 1.8rem;
          animation-delay: 0.5s;
        }
        
        &.decor-3 {
          bottom: 20%;
          left: 25%;
          font-size: 1.5rem;
          animation-delay: 0.8s;
        }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(15deg); }
      }
    }
  }

  .cards-wrapper {
    margin-top: 2rem;
    contain: layout paint; // Optimización de rendimiento
  }
}

.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: default;
  transform: translateZ(0); // Acelera hardware
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(78, 67, 118, 0.1) 0%,
      rgba(43, 88, 118, 0.05) 100%
    );
    z-index: 1;
  }

  &.mobile-card {
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }
}

.image-comparison {
  height: 350px;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  contain: strict; // Optimiza rendering
  
  @media (max-width: 960px) {
    height: 250px;
  }
}

.card-content {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  will-change: transform;
}

.project-details {
  position: absolute;
  right: 16px;
  bottom: 16px;
}

.lightbox-card {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  
  .lightbox-content {
    height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.9);
    padding: 2rem;
  }
}

.fullscreen-slider {
  width: 90vw;
  height: 80vh;
  max-width: 1400px;
  
  ::v-deep .image-content {
    object-fit: contain;
  }
  
  ::v-deep .slider-handle {
    width: 50px;
    height: 50px;
    
    .v-icon {
      font-size: 28px;
    }
  }
}

@media (max-width: 600px) {
  .gallery-container {
    padding: 2rem 0;
    animation-duration: 0.4s;
  }
  
  .gallery-title .v-card__title {
    font-size: 2rem !important;
  }
  
  .project-card {
    margin: 0 8px;
  }
  
  .fullscreen-slider {
    height: 60vh;
  }

  .title-wrapper {
    margin-bottom: 2rem;
    
    .animated-title {
      h1 {
        font-size: 1.75rem !important;
      }

      .decor-icon {
        display: none;
      }
      
      .highlighted-text::after {
        bottom: -5px;
        height: 2px;
      }
    }
  }
  
  .image-comparison {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  }
}
</style>



