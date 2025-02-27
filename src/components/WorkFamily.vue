<template>
  <v-container fluid class="workfamily-container pa-0">

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
                Conoce Nuestro Fundador
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

    <section ref="contentSection" class="ceo-section py-16">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="ceo-narrative">
            <div class="narrative-card">
              <v-icon large color="primary" class="quote-icon">mdi-format-quote-open</v-icon>
              
              <h2 class="narrative-title">Un Mensaje de Nuestro Fundador</h2>
              
              <div class="narrative-content">
                <p class="narrative-text">
                  <span class="first-letter">S</span>oy Lucas Cardella, un apasionado del vidrio con más de tres años de experiencia en la fabricación de todo tipo de vidrios, desde cortes hasta el proceso de cocción. Esta trayectoria me ha proporcionado un profundo conocimiento sobre las distintas funcionalidades y aplicaciones del vidrio.
                </p>

                <p class="narrative-text">
                  Hoy, dirijo mi propio negocio, donde ofrezco una amplia gama de productos, incluyendo mamparas, espejos, barandas y cerramientos. Me enorgullece no solo vender, sino también instalar cada uno de estos elementos, asegurando un acabado de calidad y una atención personalizada en cada proyecto.
                </p>

                <p class="narrative-text">
                  Nuestro enfoque va más allá de proporcionar soluciones estéticas; buscamos cumplir con las necesidades específicas de nuestros clientes, garantizando un servicio integral que abarca desde la selección del vidrio ideal hasta la finalización del trabajo. Estoy aquí para convertir tus ideas en realidad y brindarte la mejor experiencia posible.
                </p>

                <p class="narrative-text">
                  ¡Te invito a descubrir cómo podemos trabajar juntos para realzar tu espacio con el vidrio perfecto!
                </p>
              </div>

              <div class="ceo-signature">
                <p class="signature-name">Lucas Cardella</p>
                <p class="signature-role">Fundador</p>
                <div class="ceo-social">
                  <a href="https://www.instagram.com/todo.en.mamparas?igsh=dTBuajFuZjRlOTAy" target="_blank" class="social-link">
                    <v-icon>mdi-instagram</v-icon>
                  </a>
                  <a href="mailto:chacalinquieto@gmail.com" class="social-link">
                    <v-icon>mdi-email</v-icon>
                  </a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <div class="cta-section text-center py-16">
      <h2 class="cta-title mb-4">¿Queres Ser Parte de Nuestra Familia?</h2>
      <p class="cta-subtitle mb-8">Asociate con Nosotros y Construyamos el Futuro</p>
      <v-btn x-large 
      color="primary" 
      class="cta-btn"
      @click="openWhatsApp"
      > 
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
    },
    openWhatsApp() {
      const url = "https://wa.me/5491134494555";
      window.open(url, "_blank", "noopener,noreferrer");
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
  background: #f8f9fa;

  .ceo-narrative {
    .narrative-card {
      background: white;
      border-radius: 16px;
      padding: 3rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.05);
      position: relative;
      
      .quote-icon {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        opacity: 0.1;
        font-size: 4rem;
      }

      .narrative-title {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        color: #2A3B5D;
        margin-bottom: 2rem;
        text-align: center;
      }

      .narrative-content {
        max-width: 800px;
        margin: 0 auto;

        .narrative-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #495057;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 2rem;
          border-left: 3px solid #2196F3;

          .first-letter {
            font-size: 1.5em;
            font-weight: 600;
            color: #2A3B5D;
            margin-right: 0.2em;
          }
        }
      }

      .ceo-signature {
        margin-top: 3rem;
        text-align: center;
        border-top: 2px solid #eee;
        padding-top: 2rem;

        .signature-name {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #2A3B5D;
          margin-bottom: 0.5rem;
        }

        .signature-role {
          color: #4A667A;
          margin-bottom: 1.5rem;
        }

        .ceo-social {
          .social-link {
            margin: 0 1rem;
            color: #2A3B5D;
            transition: color 0.3s ease;

            &:hover {
              color: #2196F3;
            }

            .v-icon {
              font-size: 1.5rem;
            }
          }
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
    .ceo-narrative {
      .narrative-card {
        padding: 2rem;

        .quote-icon {
          font-size: 3rem;
        }

        .narrative-title {
          font-size: 1.75rem;
        }

        .narrative-text {
          font-size: 1rem;
          padding-left: 1rem;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .ceo-section {
    .ceo-narrative {
      .narrative-card {
        padding: 1.5rem;

        .narrative-title {
          font-size: 1.5rem;
        }

        .narrative-text {
          font-size: 0.95rem;
        }

        .ceo-signature {
          .signature-name {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}
</style>