<template>
  <v-container class="contacto-view">
    <!-- Título -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="display-1 font-weight-bold mb-6">Contáctanos</h2>
      </v-col>
    </v-row>

    <!-- Texto de ayuda -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <p class="subtitulo-contacto">
          Ya viste nuestros diseños y opciones de mamparas, cerramientos, barandas, espejos y más. Ahora es el momento de dar vida a tus ideas.
        </p>
        <p class="subtitulo-contacto">
          ¿Qué esperas para contactarnos? Mándanos un WhatsApp y te asesoramos de la mejor manera. Te ofrecemos:
        </p>
        <ul class="lista-beneficios">
          <li>El mejor trato y atención personalizada</li>
          <li>El mejor presupuesto adaptado a tus necesidades ¡Sin Cargo!</li>
          <li>Soluciones personalizadas para crear el espacio perfecto para ti</li>
        </ul>
        <p class="subtitulo-contacto">
          No esperes más. Contáctanos hoy mismo y comenza a crear el espacio de tus sueños.
        </p>
      </v-col>
    </v-row>

    <!-- Botones de contacto -->
    <v-row justify="center" class="mb-6">
      <!-- WhatsApp -->
      <v-col cols="12" md="4" class="text-center">
        <div class="d-flex align-center justify-center">
          <!-- Icono -->
          <v-icon class="mr-4" size="64" color="green darken-1">mdi-whatsapp</v-icon>
          <!-- Botón -->
          <v-btn
            color="green darken-1"
            dark
            x-large
            @click="openWhatsApp"
            class="animated-button"
          >
            +549 11 5648-5574
          </v-btn>
        </div>
      </v-col>

      <!-- Instagram -->
      <v-col cols="12" md="4" class="text-center">
        <div class="d-flex align-center justify-center">
          <!-- Icono -->
          <v-icon class="mr-4" size="64" color="pink darken-1">mdi-instagram</v-icon>
          <!-- Botón -->
          <v-btn
            color="pink darken-1"
            dark
            x-large
            @click="openInstagram"
            class="animated-button"
          >
            @todomamparas
          </v-btn>
        </div>
      </v-col>

      <!-- Correo electrónico -->
      <v-col cols="12" md="4" class="text-center">
        <div class="d-flex align-center justify-center">
          <!-- Icono -->
          <v-icon class="mr-4" size="64" color="blue darken-1">mdi-email</v-icon>
          <!-- Botón -->
          <v-btn
            color="blue darken-1"
            dark
            x-large
            @click="openEmail"
            class="animated-button email-button"
          >
            todomamparas@gmail.com
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactoView",
  methods: {
    // Abrir WhatsApp
    openWhatsApp() {
      window.open("", "_blank");
    },
    // Abrir Instagram
    openInstagram() {
      window.open("", "_blank");
    },
    // Abrir correo electrónico
    openEmail() {
      window.location.href = "";
    },
  },
};
</script>

<style scoped>
.contacto-view {
  padding: 4rem 0;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo semi-transparente */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Estilos para el texto de ayuda */
.subtitulo-contacto {
  font-size: 22px;
  font-weight: 400;
  line-height: 1.6;
  color: #333;
  margin-bottom: 16px;
}

.lista-beneficios {
  text-align: left;
  display: inline-block;
  margin: 16px 0;
  padding-left: 24px;
}

.lista-beneficios li {
  font-size: 18px;
  font-weight: 400;
  color: #555;
  margin-bottom: 8px;
}

/* Animación para los botones */
.animated-button {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animated-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Estilos específicos para el botón de correo electrónico */
.email-button {
  font-size: 14px; /* Reducir el tamaño de la fuente */
  padding: 12px 16px; /* Reducir el padding horizontal */

}

/* Estilos responsivos */
@media (max-width: 960px) {
  .contacto-view {
    padding: 2rem 0;
  }

  .v-btn {
    font-size: 14px;
    padding: 12px 24px;
  }

  .v-icon {
    size: 48px;
  }

  .subtitulo-contacto {
    font-size: 16px;
  }

  .lista-beneficios li {
    font-size: 14px;
  }
}

@media (max-width: 600px) {
  .v-btn {
    width: 100%;
    margin-bottom: 1rem;
  }

  .d-flex {
    flex-direction: column;
    align-items: center;
  }

  .v-icon {
    margin-bottom: 1rem;
  }
}
</style>