<template>
  <v-container class="py-12">
    <!-- Encabezado -->
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-6">
        <h2 class="section-title">Conecta con Nosotros</h2>
        <p class="section-subtitle mt-3">
          Escanea nuestros códigos <strong>QR</strong> para contactarnos directamente o seguirnos en nuestras redes sociales.
        </p>
        <div class="title-divider"></div>
      </v-col>
    </v-row>

    <!-- Tarjetas de redes sociales -->
    <v-row align="center" justify="center">
      <!-- WhatsApp Card -->
      <v-col cols="12" md="6" class="pa-4">
        <v-card class="social-card whatsapp-gradient" elevation="10">
          <v-card-text class="card-content">
            <v-icon size="80" color="white">mdi-whatsapp</v-icon>
            <h3 class="card-title white--text mt-4">WhatsApp</h3>
            <p class="card-description white--text mt-3">
              Contáctanos por WhatsApp para consultas rápidas y presupuestos personalizados.
            </p>
            
            <div class="qr-container">
              <img 
                src="@/assets/codigos-QR/QRwhats.jpg" 
                alt="QR WhatsApp TodoMampara"
                class="qr-image"
              />
            </div>
            
            <v-btn
              class="action-btn"
              dark
              large
              rounded
              @click="openWhatsApp"
            >
              <span class="btn-text">ABRIR WHATSAPP</span>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Instagram Card -->
      <v-col cols="12" md="6" class="pa-4">
        <v-card class="social-card instagram-gradient" elevation="10">
          <v-card-text class="card-content">
            <v-icon size="80" color="white">mdi-instagram</v-icon>
            <h3 class="card-title white--text mt-4">Instagram</h3>
            <p class="card-description white--text mt-3">
              Síguenos en Instagram para ver nuestros proyectos y promociones exclusivas.
            </p>
            
            <div class="qr-container">
              <img 
                src="@/assets/codigos-QR/QRinsta.png" 
                alt="QR Instagram TodoMampara"
                class="qr-image"
              />
            </div>
            
            <v-btn
              class="action-btn"
              dark
              large
              rounded
              @click="openInstagram"
            >
              <span class="btn-text">SEGUIR EN INSTAGRAM</span>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Frase motivadora -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" md="8" class="text-center">
        <div class="motivational-section pa-8 rounded-xl">
          <v-icon size="60" class="motivation-icon">mdi-star-circle</v-icon>
          <h3 class="motivational-title mt-4">¿Listo para transformar tu Ambiente?</h3>
          <p class="motivational-text mt-3">
            Contáctanos hoy mismo y recibe un <strong>presupuesto personalizado</strong> sin compromiso
          </p>
          
          <v-btn
            class="mt-4 motivation-btn"
            x-large
            rounded
            @click="openWhatsApp"
          >
            <v-icon left>mdi-chat</v-icon>
            <span class="btn-text">INICIAR CONVERSACIÓN</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SocialQR',
  methods: {
    openWhatsApp() {
      window.open("https://wa.me/5491134494555", "_blank");
    },
    openInstagram() {
      window.open("https://www.instagram.com/todo.en.mamparas", "_blank");
    }
  }
}
</script>

<style scoped>
/* ESTILOS GENERALES */
.section-title {
  font-family: 'Poppins', sans-serif !important;
  color: #2A3B5D !important;
  font-weight: 600 !important;
  font-size: 2.5rem !important;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400 !important;
  font-size: 1.1rem !important;
  color: #2d3436;
  margin-top: 0.5rem;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: #2196F3;
  margin: 1.5rem auto;
  border-radius: 2px;
}

/* TARJETAS DE REDES SOCIALES */
.social-card {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 24px;
}

.card-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* MEJORA EN TEXTOS - TAMAÑO AUMENTADO Y MÁS ATRACTIVO */
.card-description {
  font-size: 1.2rem !important; /* Tamaño aumentado */
  font-weight: 500 !important;  /* Texto más grueso */
  line-height: 1.7 !important; /* Más espacio entre líneas */
  max-width: 400px;
  margin: 15px auto 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.whatsapp-gradient {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
}

.instagram-gradient {
  background: linear-gradient(45deg, #405DE6, #833AB4, #C13584, #E1306C);
}

.qr-container {
  margin: 20px auto;
  padding: 15px;
  background: white;
  border-radius: 10px;
  max-width: 220px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.qr-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
}

.action-btn {
  margin-top: 20px;
  width: 100%;
  max-width: 250px;
  align-self: center;
  background: linear-gradient(90deg, #0D2E5C 0%, #1A6E7A 100%) !important;
  color: white !important;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 7px 15px rgba(0,0,0,0.25) !important;
}

/* SECCIÓN MOTIVADORA */
.motivational-section {
  background: linear-gradient(120deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #e0e7ff;
  position: relative;
  overflow: hidden;
}

.motivational-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(26,110,122,0.1) 0%, transparent 70%);
  z-index: 0;
}

.motivation-icon {
  color: #1A6E7A !important;
  position: relative;
  z-index: 2;
}

.motivational-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #0D2E5C;
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.motivational-text {
  font-size: 1.4rem;
  color: #2d3436;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.motivational-text strong {
  background: linear-gradient(90deg, #0D2E5C, #1A6E7A);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}

.motivation-btn {
  background: linear-gradient(90deg, #0D2E5C 0%, #1A6E7A 100%) !important;
  color: white !important;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 40px !important;
  font-size: 1.1rem;
  box-shadow: 0 5px 15px rgba(13, 46, 92, 0.3) !important;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.motivation-btn:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 20px rgba(13, 46, 92, 0.4) !important;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .card-title {
    font-size: 1.6rem;
  }
  
  .card-description {
    font-size: 1.1rem !important;
  }
  
  .motivational-title {
    font-size: 1.8rem;
  }
  
  .motivational-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-description {
    font-size: 1.05rem !important;
  }
  
  .qr-container {
    max-width: 180px;
    padding: 12px;
  }
  
  .action-btn {
    max-width: 100%;
    font-size: 0.95rem;
  }
  
  .motivational-title {
    font-size: 1.6rem;
  }
  
  .motivational-text {
    font-size: 1.1rem;
  }
  
  .motivation-btn {
    width: 100%;
    padding: 5px 20px !important;
  }
}
</style>