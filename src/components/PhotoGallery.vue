<template>
  <v-container class="gallery-container">
    <!-- Título Animado -->
    <v-row>
      <v-col cols="12">
        <v-hover v-slot="{ hover }">
          <v-card
            :class="['gallery-title', { 'zoom-effect': hover }]"
            :elevation="hover ? 12 : 2"
          >
            <v-card-title class="text-h3 text-md-h2 font-weight-bold text-center primary--text">
              Galeria de Exitos!
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

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

  methods: {
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
}

.gallery-title {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  
  .zoom-effect {
    transform: scale(1.02);
  }
}

.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: default;
  
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
  
  @media (max-width: 960px) {
    height: 250px;
  }
}

.card-content {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
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
  .gallery-title .v-card__title {
    font-size: 2rem !important;
  }
  
  .project-card {
    margin: 0 8px;
  }
  
  .fullscreen-slider {
    height: 60vh;
  }
}
</style>




