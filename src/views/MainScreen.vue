<template>
  <v-container fluid class="hero-container pa-0">
    <!-- Imagen de fondo optimizada -->
    <v-img
      :src="require('@/assets/fondos/fondo00.jpg')"
      :lazy-src="require('@/assets/fondos/fondo00-placeholder.png')"
      alt="Mamparas de lujo modernas"
      class="hero-image"
      height="100vh"
      gradient="to top right, rgba(12, 32, 56, 0.4), rgba(24, 64, 96, 0.6)"
      cover
    >
      <!-- Contenido estratificado -->
      <div class="content-overlay">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" md="10" lg="8" class="text-center">
            <!-- Titulo con animación -->
            <h1 class="hero-title animate__animated animate__fadeInDown">
              Todo en Mampara! <br> Excelencia en vidrios de Lujo
            </h1>

            <!-- Separador decorativo -->
            <v-divider class="my-8 mx-auto accent" style="max-width: 200px"></v-divider>

            <!-- Texto destacado -->
            <p class="hero-subtitle animate__animated animate__fadeIn animate__delay-1s">
              Transformamos tus espacios con diseño arquitectónico<br>
              y materiales premium
            </p>

            <!-- Botón de acción mejorado -->
            <v-btn
              class="cta-button mt-12 animate__animated animate__fadeInUp animate__delay-1s"
              x-large
              rounded
              color="accent"
              @click="openWhatsApp"
              dark
            >
              <v-icon left size="28" class="mr-2">mdi-whatsapp</v-icon>
              Contactar al Experto
              <v-icon right size="28" class="ml-2">mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "MainScreen",
  methods: {
    openWhatsApp() {
      window.open("https://wa.me/5491131918140", "_blank");
    },
  },
};
</script>

<style scoped>
/* @import '~animate.css/animate.min.css'; */

.hero-container {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-image {
  position: relative;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hero-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(25, 45, 66, 0.233) 0%, rgba(0, 0, 0, 0.274) 100%);
}

.content-overlay {
  position: relative;
  z-index: 2;
  height: 100%;
}

.hero-title {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700 !important;
  font-size: 3.5rem;
  line-height: 1.2;
  color: #ffffff;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.cta-button {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600 !important;
  text-transform: none;
  letter-spacing: 0.5px;
  padding: 18px 40px !important;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%) !important;
  box-shadow: 0 8px 24px rgba(18, 140, 126, 0.4) !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(18, 140, 126, 0.5) !important;
}

/* Responsive Design */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .cta-button {
    padding: 16px 32px !important;
    font-size: 1rem !important;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem;
    padding: 0 20px;
  }

  .hero-subtitle {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0 15px;
  }

  .cta-button {
    padding: 14px 28px !important;
    font-size: 0.9rem !important;
  }
}
</style>