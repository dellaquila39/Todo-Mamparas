<template>
  <v-container class="contact-container">
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="section-title primary--text">Contacto Directo</h2>
        <p class="section-subtitle">
          ¿Tienes un proyecto en mente? Escríbenos y nuestro equipo te brindará 
          una solución personalizada en menos de 24 horas.
        </p>
        <div class="title-divider"></div>
      </v-col>

      <v-col cols="12" md="6" class="contact-form">
        <v-card class="form-card" elevation="4">
          <v-form @submit.prevent="submitForm" ref="form">
            <v-text-field
              v-model="form.name"
              label="Nombre completo"
              :rules="nameRules"
              outlined
              prepend-inner-icon="mdi-account"
              class="form-field"
            ></v-text-field>

            <v-text-field
              v-model="form.email"
              label="Correo electrónico"
              :rules="emailRules"
              outlined
              prepend-inner-icon="mdi-email"
              class="form-field"
            ></v-text-field>

            <v-text-field
              v-model="form.phone"
              label="Teléfono (opcional)"
              outlined
              prepend-inner-icon="mdi-phone"
              class="form-field"
              counter="20"
            ></v-text-field>

            <v-textarea
              v-model="form.message"
              label="Cuéntanos sobre tu proyecto"
              :rules="messageRules"
              outlined
              prepend-inner-icon="mdi-comment-text"
              class="form-field"
              counter="500"
              auto-grow
              rows="4"
            ></v-textarea>

            <v-btn 
              type="submit" 
              color="primary" 
              x-large 
              class="submit-btn"
              depressed
            >
              Enviar Consulta
              <v-icon right>mdi-send</v-icon>
            </v-btn>
          </v-form>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="contact-channels">
        <v-card class="channels-card" elevation="4">
          <div class="channel-item whatsapp">
            <v-icon large color="#25D366">mdi-whatsapp</v-icon>
            <div class="channel-content">
              <h3 class="channel-title">Chat Instantáneo</h3>
              <p class="channel-description">
                Respuesta inmediata <br>
                Horario: Lunes a Viernes 9:00 - 18:00
              </p>
              <v-btn 
                color="#25D366" 
                dark 
                href="https://wa.me/5491134494555" 
                target="_blank"
                class="channel-btn"
                depressed
              >
                Abrir WhatsApp
              </v-btn>
            </div>
          </div>

          <div class="channel-item instagram">
            <v-icon large color="#E1306C">mdi-instagram</v-icon>
            <div class="channel-content">
              <h3 class="channel-title">Síguenos</h3>
              <p class="channel-description">
                Mira nuestros últimos proyectos <br>
                y promociones exclusivas
              </p>
              <v-btn 
                color="#E1306C" 
                dark 
                href="https://www.instagram.com/todo.en.mamparas?igsh=dTBuajFuZjRlOTAy" 
                target="_blank"
                class="channel-btn"
                depressed
              >
                Ver Instagram
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactForm',
  data: () => ({
    form: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    nameRules: [
      v => !!v || 'Nombre es requerido',
      v => v.length >= 3 || 'Mínimo 3 caracteres'
    ],
    emailRules: [
      v => !!v || 'Email es requerido',
      v => /.+@.+\..+/.test(v) || 'Email debe ser válido'
    ],
    messageRules: [
      v => !!v || 'Mensaje es requerido',
      v => v.length >= 10 || 'Mínimo 10 caracteres',
      v => v.length <= 500 || 'Máximo 500 caracteres'
    ]
  }),
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        // Aquí implementar el envío del formulario
        console.log('Formulario enviado:', this.form)
        // Resetear formulario después del envío
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>
.contact-container {
  padding: 4rem 0;
  background: linear-gradient(45deg, rgba(245,245,245,0.98) 0%, rgba(255,255,255,0.95) 100%);
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: #2196F3;
  margin: 2rem auto;
  border-radius: 2px;
}

.form-card, .channels-card {
  padding: 2rem;
  border-radius: 12px;
}

.form-field {
  margin-bottom: 1.5rem;
}

.submit-btn {
  margin-top: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.contact-channels {
  padding-left: 2rem;
}

.channel-item {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.channel-item.whatsapp {
  border-left: 4px solid #25D366;
}

.channel-item.instagram {
  border-left: 4px solid #E1306C;
}

.channel-content {
  margin-left: 1.5rem;
}

.channel-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.channel-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.channel-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.5px;
}

@media (max-width: 960px) {
  .contact-channels {
    padding-left: 0;
    margin-top: 2rem;
  }
  
  .channel-item {
    flex-direction: column;
    text-align: center;
  }
  
  .channel-content {
    margin-left: 0;
    margin-top: 1rem;
  }
}

@media (max-width: 600px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}
</style>