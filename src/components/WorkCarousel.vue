<template>
  <v-container class="work-carousel-container" fluid>
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="10" class="text-center">
        <h2 class="carousel-title animate-fade-in">Mira nuestros últimos Trabajos</h2>
        <p class="carousel-subtitle animate-fade-in-delay">
          Colocación en el día de mamparas, puertas y box de ducha en vidrio templado y esmerilado.
        </p>
        <v-carousel
          ref="carousel"
          cycle
          height="360"
          hide-delimiters
          show-arrows
          class="premium-carousel"
        >
          <template v-slot:prev>
            <v-btn icon class="carousel-nav prev" @click.stop="prevSlide">
              <v-icon large>mdi-chevron-left</v-icon>
            </v-btn>
          </template>

          <template v-slot:next>
            <v-btn icon class="carousel-nav next" @click.stop="nextSlide">
              <v-icon large>mdi-chevron-right</v-icon>
            </v-btn>
          </template>

          <v-carousel-item v-for="(group, index) in groupedWorks" :key="index">
            <v-row justify="center" align="center" no-gutters>
              <v-col
                v-for="(item, idx) in group"
                :key="idx"
                cols="12"
                sm="6"
                md="4"
                class="d-flex justify-center"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="work-card ma-2"
                    :elevation="hover ? 12 : 4"
                    @click="openLightbox(item)"
                    :class="{ 'on-hover': hover }"
                  >
                    <v-img
                      :src="item.thumbnail"
                      height="200px"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)"
                    >
                      <v-card-title class="text-h6">{{ item.title }}</v-card-title>
                    </v-img>
                    <v-card-text class="px-4 pb-4">{{ item.description }}</v-card-text>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>

        <v-dialog v-model="lightbox" max-width="1000" persistent class="lightbox-dialog">
          <template v-if="selectedImage">
            <div class="lightbox-backdrop" @click="lightbox = false"></div>
            <div class="lightbox-modal">
              <v-btn icon class="lb-close" @click="lightbox = false">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>

              <v-btn icon class="lb-nav prev" @click.stop="prevImage">
                <v-icon x-large color="white">mdi-chevron-left</v-icon>
              </v-btn>
              
              <transition name="fade" mode="out-in">
                <img 
                  :key="selectedImage.full" 
                  :src="selectedImage.full" 
                  class="lightbox-image"
                  :alt="selectedImage.description"
                />
              </transition>
              
              <v-btn icon class="lb-nav next" @click.stop="nextImage">
                <v-icon x-large color="white">mdi-chevron-right</v-icon>
              </v-btn>

              <div class="lightbox-caption">
                <h3>{{ selectedImage.title }}</h3>
                <p>{{ selectedImage.description }}</p>
              </div>
            </div>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      works: [
        // Slide 1
        [
          {
            thumbnail: require("@/assets/carrusel-trabajo/mampara-carrusel1.webp"),
            full: require("@/assets/carrusel-trabajo/mampara-carrusel1.webp"),
            title: "Box de ducha",
            description: "Mampara de baño en vidrio templado de 10mm"
          },
          {
            thumbnail: require("@/assets/carrusel-trabajo/mampara-carrusel2.webp"),
            full: require("@/assets/carrusel-trabajo/mampara-carrusel2.webp"),
            title: "Mampara corrediza",
            description: "Mampara de vidrio corrediza a 2 puertas"
          },
          {
            thumbnail: require("@/assets/carrusel-trabajo/mampara-carrusel3.webp"),
            full: require("@/assets/carrusel-trabajo/mampara-carrusel3.webp"),
            title: "Box de ducha",
            description: "Mampara de baño en vidrio templado de 8mm"
          }
        ],
        // Slide 2
        [
          {
            thumbnail: require("@/assets/carrusel-trabajo/mampara-carrusel4.webp"),
            full: require("@/assets/carrusel-trabajo/mampara-carrusel4.webp"),
            title: "Box rectangular con puerta deslizante",
            description: "Mampara de baño en vidrio templado y esmerilado de 10mm"
          },
          {
            thumbnail: require("@/assets/carrusel-trabajo/mampara-carrusel5.webp"),
            full: require("@/assets/carrusel-trabajo/mampara-carrusel5.webp"),
            title: "Mampara deslizante a 4 paños",
            description: "Mampara de diseño a 4 paños, 2 deslizantes y 2 fijos"
          },
          {
            thumbnail: require("@/assets/carrusel-trabajo/mampara-carrusel6.webp"),
            full: require("@/assets/carrusel-trabajo/mampara-carrusel6.webp"),
            title: "Mampara deslizante con diseño esmerilado",
            description: "Mampara deslizante con diseño esmerilado de 10mm"
          }
        ]
      ],
      lightbox: false,
      selectedImage: null
    };
  },
  computed: {
    groupedWorks() {
      const screenWidth = window.innerWidth;
      const itemsPerGroup = screenWidth >= 1264 ? 3 : screenWidth >= 960 ? 2 : 1;

      const flatList = this.works.flat();
      const groups = [];
      for (let i = 0; i < flatList.length; i += itemsPerGroup) {
        groups.push(flatList.slice(i, i + itemsPerGroup));
      }
      return groups;
    }
  },
  methods: {
    openLightbox(image) {
      this.selectedImage = image;
      this.lightbox = true;
    },
    prevImage() {
      const flat = this.works.flat();
      const currentIndex = flat.findIndex(img => img.full === this.selectedImage.full);
      const newIndex = (currentIndex - 1 + flat.length) % flat.length;
      this.selectedImage = flat[newIndex];
    },
    nextImage() {
      const flat = this.works.flat();
      const currentIndex = flat.findIndex(img => img.full === this.selectedImage.full);
      const newIndex = (currentIndex + 1) % flat.length;
      this.selectedImage = flat[newIndex];
    },
    prevSlide() {
      this.$refs.carousel.prev();
    },
    nextSlide() {
      this.$refs.carousel.next();
    }
  }
};
</script>

<style scoped>
/* ===== CARRUSEL PRINCIPAL ===== */
.premium-carousel {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: #f7f1f1;
}

.carousel-nav {
  position: absolute;
  top: -50px; 
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.377);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(31, 125, 202, 0.15);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #fff;
}
.carousel-nav:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
.carousel-nav.prev {
  left: 20px;
}
.carousel-nav.next {
  right: 20px;
}
.carousel-nav .v-icon {
  color: #333;
  font-size: 32px;
}

.work-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}
.work-card:hover {
  transform: translateY(-8px);
}
.work-card .v-card__text {
  min-height: 72px;
  display: flex;
  color:black !important; /* Letras negras */
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.9rem;
}

/* ===== LIGHTBOX PREMIUM ===== */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.95);
  z-index: 999;
}
.lightbox-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90vh;
  background: transparent;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lb-close {
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  color: white;
}
.lb-close:hover {
  background: rgba(255, 255, 255, 0.2);
}
.lb-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(31, 125, 202, 0.85);
  backdrop-filter: blur(4px);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.lb-nav.prev {
  left: 16px;
}
.lb-nav.next {
  right: 16px;
}
.lb-nav .v-icon {
  color: #fff;
  font-size: 32px;
}
.lb-nav:hover {
  background: #1f7dca;
}
.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.lightbox-caption {
  margin-top: 20px;
  color: white;
  text-align: center;
  max-width: 80%;
}
.lightbox-caption h3 {
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
}
.lightbox-caption p {
  font-size: 1rem;
  color: #e2e8f0;
  margin-bottom: 0;
  font-family: 'Roboto', sans-serif;
}

/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 960px) {
  .carousel-nav {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.9);
  }
  .carousel-nav.prev {
    left: 10px;
  }
  .carousel-nav.next {
    right: 10px;
  }
  .carousel-nav .v-icon {
    font-size: 28px;
  }

  .lightbox-modal {
    max-width: 95vw;
  }

  .lb-nav {
    width: 40px;
    height: 40px;
    top: 50%;
    /* Siempre visibles y pegadas al borde */
  }
  .lb-nav.prev {
    left: 8px !important;
    right: auto;
  }
  .lb-nav.next {
    right: 8px !important;
    left: auto;
  }

  .lb-close {
    top: 15px;
    right: 15px;
  }

  .lightbox-image {
    max-height: 70vh;
  }

  .work-card .v-card__text {
    min-height: auto;
    padding: 12px !important;
    font-size: 0.8rem;
  }
}

@media (max-width: 600px) {
  .lb-nav {
    width: 36px;
    height: 36px;
    top: 50%;
  }
  .lb-nav.prev {
    left: 4px !important;
    right: auto;
  }
  .lb-nav.next {
    right: 4px !important;
    left: auto;
  }

  .lightbox-caption {
    max-width: 95%;
  }
}



.carousel-title {
  font-family: 'Montserrat', 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f7dca;
  letter-spacing: -1px;
  margin-bottom: 0.2em;
  text-shadow: 0 4px 16px rgba(31,125,202,0.08);
  background: linear-gradient(90deg, #1f7dca 60%, #2196f3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.carousel-subtitle {
  font-family: 'Roboto', 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 1.5em;
  opacity: 0.85;
  letter-spacing: 0.2px;
}

/* Animaciones */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeInUp 0.8s cubic-bezier(.4,2,.3,1) both;
}
.animate-fade-in-delay {
  animation: fadeInUp 1s 0.3s cubic-bezier(.4,2,.3,1) both;
}
</style>