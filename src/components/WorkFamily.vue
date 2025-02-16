<template>
  <v-container fluid class="workfamily-container pa-0">
    <!-- Sección Hero con Fondo Fijo -->
    <div class="fixed-hero">
      <div class="hero-overlay">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="10" class="text-center">
              <h1 class="hero-title">
                <span class="title-line">Somos Familia,</span>
                <span class="title-line">Creamos Excelencia!</span>
              </h1>
              <p class="hero-subtitle mt-6">
                En <strong>Todo Mamparas</strong>, somos más que una empresa, somos una familia. 
                Desde que empezamos este proyecto, lo hemos hecho con el corazón, trabajando juntos para ofrecer lo mejor de nosotros en cada detalle. 
                Nos apasiona transformar espacios con vidrio, pero lo que realmente nos mueve es la confianza, el compromiso y el cariño que ponemos en cada paso.
              </p>
              <v-btn
                x-large
                color="primary darken-2"
                class="explore-btn mt-8"
                @click="scrollToContent"
              >
                <v-icon left>mdi-heart-multiple</v-icon>
                Conoce Nuestra Historia
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <!-- Sección del CEO -->
    <section ref="contentSection" class="ceo-section py-16">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="ceo-photo">
            <v-img
              :src="require('@/assets/logos/retrato.jpeg')"
              :lazy-src="require('@/assets/logos/retrato.jpeg')"
              aspect-ratio="1"
              class="ceo-image"
              gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
            >
              <div class="ceo-overlay">
                <v-icon large color="white">mdi-format-quote-open</v-icon>
                <p class="ceo-quote">"La verdadera medida de un hombre no es lo que construye, sino cómo lo construye."</p>
              </div>
            </v-img>
          </v-col>

          <v-col cols="12" md="6" class="ceo-info">
            <h2 class="ceo-name">Lucas Martinez</h2>
            <p class="ceo-role">Fundador de Todo Mampara</p>
            <div class="ceo-description">
              <p>
                Es un visionario emprendedor con una pasión por la innovación y la excelencia. 
                Con una trayectoria de cinco años en la industria del vidrio, Lucas ha desarrollado un profundo conocimiento y respeto por el material, 
                lo que lo ha llevado a crear soluciones únicas y funcionales.

              </p>
              <p>
                Trabajando junto a su padre y un equipo de profesionales apasionados, 
                Lucas está revolucionando la forma en que pensamos sobre el vidrio y su aplicación en la arquitectura y el diseño.
              </p>
              <p>
                Su filosofía de negocio se basa en la innovación, la funcionalidad y la construcción de relaciones sólidas con sus clientes y colaboradores. 
                Con <strong>Todo Mampara</strong>, Lucas está creando un legado que trasciende la empresa en sí, 
                y que se refleja en cada proyecto y cada pieza de vidrio que sale de su taller.
              </p>
            </div>
            <div class="ceo-social">
              <a href="#" target="_blank" class="social-link">
                <v-icon>mdi-linkedin</v-icon>
              </a>
              <a href="https://www.instagram.com/todo.en.mamparas?igsh=dTBuajFuZjRlOTAy" target="_blank" class="social-link">
                <v-icon>mdi-instagram</v-icon>
              </a>
              <a href="#" target="_blank" class="social-link">
                <v-icon>mdi-email</v-icon>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Final -->
    <div class="cta-section text-center py-16">
      <h2 class="cta-title mb-4">¿Queres Ser Parte de Nuestra Familia?</h2>
      <p class="cta-subtitle mb-8">Asociate con Nosotros y Construyamos el Futuro</p>
      <v-btn x-large color="primary" class="cta-btn">
        <v-icon left>mdi-account-group</v-icon>
        Hablemos de Negocios
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'WorkFamily',
  methods: {
    scrollToContent() {
      this.$refs.contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
.workfamily-container {
  background: #f8f9fa;
}

.fixed-hero {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: 
    linear-gradient(45deg, rgba(18, 32, 47, 0.8) 0%, rgba(38, 61, 86, 0.6) 100%),
    url('../assets/familia/construccion.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  
  display: flex;
  align-items: center;
  justify-content: center;

  .hero-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-title {
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    color: white;
    line-height: 1.1;
    text-shadow: 0 4px 12px rgba(0,0,0,0.3);

    .title-line {
      display: block;
      animation: slideUp 1s ease;
    }
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.849);
    line-height: 1.8;
    text-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  .explore-btn {
    font-weight: 600;
    letter-spacing: 1px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
}

.ceo-section {
  background: white;

  .ceo-photo {
    position: relative;
    border-radius: 16px;
    overflow: hidden;

    .ceo-image {
      border-radius: 16px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    }

    .ceo-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 2rem;
      background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2));
      color: white;
      text-align: center;

      .ceo-quote {
        font-style: italic;
        margin-top: 1rem;
      }
    }
  }

  .ceo-info {
    padding: 2rem;

    .ceo-name {
      font-family: 'Poppins', sans-serif;
      font-size: 2.5rem;
      color: #2A3B5D;
    }

    .ceo-role {
      font-size: 1.25rem;
      color: #4A667A;
      margin-bottom: 2rem;
    }

    .ceo-description {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #495057;

      p {
        margin-bottom: 1.5rem;
      }
    }

    .ceo-social {
      margin-top: 2rem;

      .social-link {
        margin-right: 1rem;
        color: #2A3B5D;
        transition: color 0.3s ease;

        &:hover {
          color: #4A667A;
        }
      }
    }
  }
}

.cta-section {
  background: #2A3B5D;
  color: white;
  border-radius: 16px;

  .cta-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 960px) {
  .ceo-section {
    .ceo-photo {
      margin-bottom: 2rem;
    }

    .ceo-info {
      text-align: center;
    }
  }
}
</style>