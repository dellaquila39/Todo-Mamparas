<template>
  <div>
    <!-- Contenedor con la imagen de fondo -->
    <v-container fluid class="contenedor-barandas">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" xl="8">
          <h1 class="titulo-barandas">Barandas</h1>
          <p class="subtitulo-barandas">
            En esta sección, descubrirás nuestra gama completa de Barandas y soluciones disponibles para ti.
          </p>
          <p class="parrafo-barandas">
            Aquí, la elegancia se eleva y se convierte en una obra de arte. Visualiza tus barandas de vidrio y balcones ideales, 
            imagina la libertad de disfrutar del espacio exterior y deja que nuestra experiencia en diseño de barandas te guíe hacia la creación de un espacio que combine seguridad y estilo. 
            Permítenos envolver tus sentidos en un mundo de claridad y sofisticación.
          </p>
          <BarandasCarousel :barandas="barandas" />
          <button class="btn-whatsapp">WhatsApp</button>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contenedor para ContactoView (fuera de la imagen de fondo) -->
    <v-container fluid class="contenedor-contacto">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" xl="8">
          <ContactoView />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BarandasCarousel from "@/modulos/barandas/BarandasCarousel.vue";
import ContactoView from "../../components/ContactoView.vue";

export default {
  name: "BarandasView",
  components: {
    BarandasCarousel,
    ContactoView,
  },
  data() {
    return {
      barandas: [
        {
          titulo: "Baranda de Vidrio Sin Marco",
          descripcion: "Diseño minimalista y moderno, Máxima transparencia.",
          imagen: require("../../assets/cartas/baranda1.png"),
        },
        {
          titulo: "Baranda con Perfil de Aluminio",
          descripcion: "Vidrio insertado en perfiles de aluminio para mayor resistencia.",
          imagen: require("../../assets/cartas/baranda2.png"),
        },
        {
          titulo: "Baranda Mixta (Vidrio y Pasamanos de Acero)",
          descripcion: "Estética moderna con mayor seguridad y versatilidad de diseño.",
          imagen: require("../../assets/cartas/baranda3.png"),
        },
        {
          titulo: "Baranda Curvada",
          descripcion: "Ideal para escaleras curvas con estética sofisticada.",
          imagen: require("../../assets/cartas/baranda4.png"),
        },
        {
          titulo: "Baranda con Herrajes Puntuales",
          descripcion: "Vidrio sujetado por herrajes metálicos con Diseño flotante",
          imagen: require("../../assets/cartas/baranda5.png"),
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* Contenedor con imagen de fondo */
.contenedor-barandas {
  background-image: url("~@/assets/fondos/baranda.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  padding-bottom: 50px;
  position: relative;
}

/* Overlay oscuro para legibilidad */
.contenedor-barandas::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.contenedor-contacto {
  background-color: #fff;
  padding-top: 50px;
  padding-bottom: 50px;
}

.titulo-barandas {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
  z-index: 2;
}

.subtitulo-barandas {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  opacity: 0.9;
  text-align: center;
  position: relative;
  z-index: 2;
}

.parrafo-barandas {
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.parrafo-barandas:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
  transition: all 0.4s ease-in-out;
}

.btn-whatsapp {
  background-color: #25d366;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 20px auto 0;
  display: block;
  position: relative;
  z-index: 2;
}

.btn-whatsapp:hover {
  background-color: #1da85f;
}

@media (max-width: 600px) {
  .titulo-barandas {
    font-size: 36px;
  }
  
  .subtitulo-barandas {
    font-size: 20px;
  }
  
  .parrafo-barandas {
    font-size: 16px;
    padding: 15px;
  }
}

@media (max-width: 400px) {
  .titulo-barandas {
    font-size: 28px;
  }
  
  .subtitulo-barandas {
    font-size: 18px;
  }
  
  .parrafo-barandas {
    font-size: 14px;
    padding: 10px;
  }
}
</style>