<!-- <template>
  <v-parallax :src="backgroundImage" height="600" class="about-banner">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6" class="text-center">
          <v-card class="glass-card pa-4 pa-sm-6" elevation="10">
            <v-card-title class="text-h4 text-sm-h3 font-weight-bold mb-4">
              Sobre Nosotros
            </v-card-title>
            <v-card-text class="text-body-1 text-sm-h6">
              En <strong>Todo Mamparas</strong>, somos más que una empresa, somos una familia. 
              Desde que empezamos este proyecto, lo hemos hecho con el corazón, trabajando juntos para ofrecer lo mejor de nosotros en cada detalle. 
              Nos apasiona transformar espacios con vidrio, pero lo que realmente nos mueve es la confianza, el compromiso y el cariño que ponemos en cada paso...
            </v-card-text>
            <v-btn color="primary" large class="mt-4" @click="learnMore">
              Conoce Más
            </v-btn>
            n
            <div class="social-icons mt-6">
              <a href="https://facebook.com" target="_blank" class="social-link">
                <v-icon class="social-icon">mdi-facebook</v-icon>
              </a>
              <a href="https://instagram.com" target="_blank" class="social-link">
                <v-icon class="social-icon">mdi-instagram</v-icon>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" class="social-link">
                <v-icon class="social-icon">mdi-whatsapp</v-icon>
              </a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      backgroundImage: require('@/assets/fondos/about4.jpg'), 
    };
  },
  methods: {
    learnMore() {
    
      alert('¡Pronto más información!');
    },
  },
};
</script>

<style scoped>
.about-banner {
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  border-radius: 20px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-h4 {
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.text-body-1 {
  color: #e0e0e0;
  line-height: 1.8;
}

.v-btn {
  font-weight: bold;
}


.social-icons {
  display: flex;
  justify-content: center;
  gap: 1.5rem; 
}

.social-link {
  text-decoration: none;
}

.social-icon {
  color: rgba(255, 255, 255, 0.8); 
  font-size: 2rem; 
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  color: rgba(255, 255, 255, 1); 
  transform: scale(1.1); 
}


@media (max-width: 600px) {
  .glass-card {
    padding: 1rem;
  }

  .text-h4 {
    font-size: 1.5rem; 
  }

  .text-body-1 {
    font-size: 0.9rem; 
  }

  .social-icon {
    font-size: 1.5rem; 
  }
}
</style> -->