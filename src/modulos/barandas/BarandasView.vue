<template>
  <div>
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
          <button class="btn-whatsapp">
            <v-icon left dark>mdi-whatsapp</v-icon>
            Contactar por WhatsApp
          </button>
        </v-col>
      </v-row>
    </v-container>

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

.contenedor-barandas {
  background-image: url('~@/assets/fondos/baranda.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
}

.contenedor-barandas::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2));
  z-index: 1;
}

.contenedor-contacto {
  background-color: #f9f9f9;
  padding: 80px 0;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.titulo-barandas {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.8s ease-out forwards;
}

.subtitulo-barandas {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
  animation: slideUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.parrafo-barandas {
  font-size: 1.1rem;
  max-width: 800px;
  padding: 25px;
  margin: 0 auto 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 2;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  animation: slideUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.parrafo-barandas:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-whatsapp {
  background: #25d366;
  color: #fff;
  border: none;
  padding: 15px 35px;
  font-size: 1.1rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 40px auto 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(37, 211, 102, 0.3);
  animation: slideUp 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

.btn-whatsapp:hover {
  background: #1da851;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
}

@media (max-width: 960px) {
  .titulo-barandas {
    font-size: 2.8rem;
  }
  
  .subtitulo-barandas {
    font-size: 1.3rem;
  }
  
  .parrafo-barandas {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .contenedor-barandas {
    padding: 60px 15px;
    background-attachment: scroll;
  }
  
  .titulo-barandas {
    font-size: 2rem;
  }
  
  .subtitulo-barandas {
    font-size: 1.1rem;
  }
  
  .parrafo-barandas {
    padding: 20px;
  }
  
  .btn-whatsapp {
    padding: 12px 25px;
  }
}

@media (max-width: 400px) {
  .titulo-barandas {
    font-size: 1.8rem;
  }
  
  .parrafo-barandas {
    padding: 15px;
  }
}
</style>


