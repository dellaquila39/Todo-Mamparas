<template>
  <v-container fluid class="mainscreen pa-0">
    <!-- Imagen de fondo -->
    <v-img
      src="@/assets/fondos/fondo1.jpg"
      alt="Imagen de fondo"
      class="background-image"
      height="100vh"
      cover
    >
      <!-- Contenido centrado -->
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" class="text-center">
          <h1 class="title font-weight-bold white--text mb-4">
            Todo en Mampara
          </h1>
          <p class="phrase white--text mb-6">
            ¿Querés renovar tu baño? Diseñamos y colocamos las mejores mamparas!
          </p>
          <v-btn
            color="green darken-1"
            dark
            large
            class="btn-whatsapp"
            @click="openWhatsApp"
          >
            <v-icon left>mdi-whatsapp</v-icon>
            WhatsApp
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "Mainscreen",
  methods: {
    openWhatsApp() {
      window.open("https://wa.me/5491131918140", "_blank");
    },
  },
};
</script>

<style scoped>
.mainscreen {
  height: 100vh;
  position: relative;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.title {
  font-size: 48px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.phrase {
  font-size: 24px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.btn-whatsapp {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-whatsapp:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Estilos responsivos */
@media (max-width: 960px) {
  .title {
    font-size: 36px;
  }

  .phrase {
    font-size: 20px;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 28px;
  }

  .phrase {
    font-size: 18px;
  }

  .btn-whatsapp {
    font-size: 16px;
    padding: 8px 16px;
  }
}
</style>