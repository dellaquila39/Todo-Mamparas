<template>
  <div>
    <v-container fluid class="fondo-mamparas">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" xl="8">
          <h1 class="titulo-mamparas">Mamparas</h1>
          <p class="subtitulo-mamparas">
            En esta sección, descubrirás nuestra gama completa de Mamparas y soluciones disponibles para ti.
          </p>
          <p class="parrafo-mamparas">
            Aquí, el diseño se une con la imaginación para crear espacios que transportan. Visualiza tu mampara ideal,
            imagina el futuro y deja que nuestra pasión por el diseño te guíe hacia la creación de un espacio que refleje tu esencia.
            Permítenos envolver tus sentidos en un mundo de belleza y elegancia.
          </p>
          <MamparasCarousel :mamparas="mamparas" />
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
import MamparasCarousel from "@/modulos/mamparas/MamparasCarousel.vue";
import ContactoView from "../../components/ContactoView.vue";

export default {
  name: "MamparasView",
  components: {
    MamparasCarousel,
    ContactoView,
  },
  data() {
    return {
      mamparas: [
        {
          titulo: "Mampara de Vidrio Opacid",
          descripcion: "Vidrio translúcido que permite la entrada de luz",
          imagen: require("../../assets/cartas/opacid1.png"),
        },
        {
          titulo: "Mampara de Vidrio Oscuro",
          descripcion: "Vidrio tintado, reduce la luz y la visibilidad",
          imagen: require("../../assets/cartas/oscuro1.jpg"),
        },
        {
          titulo: "Mampara de Vidrio Fijo",
          descripcion: "Vidrio fijo sin sistema de apertura de facil instalación",
          imagen: require("../../assets/cartas/fija1.png"),
        },
        {
          titulo: "Mampara Corrediza",
          descripcion: "Vidrio con sistema deslizante para mayor comodidad",
          imagen: require("../../assets/cartas/corrediza1.jpg"),
        },
        {
          titulo: "Box de Ducha",
          descripcion: "Recinto de ducha cerrado de varias medidas",
          imagen: require("../../assets/cartas/boxducha1.webp"),
        },
        {
          titulo: "Mampara Bisagra",
          descripcion: "Mampara de vidrio con sitema de bisagra",
          imagen: require("../../assets/cartas/bisagra1.jpg"),
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
.fondo-mamparas {
  background-image: url('~@/assets/fondos/fondo2.jpg');
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


.fondo-mamparas::before {
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


.titulo-mamparas {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transform: translateY(20px);
  animation: slideUp 0.8s ease forwards;
}

.subtitulo-mamparas {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  opacity: 0.95;
}

.parrafo-mamparas {
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
}

.parrafo-mamparas:hover {
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
}

.btn-whatsapp:hover {
  background: #1da851;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
}

.btn-whatsapp:active {
  transform: translateY(0);
}

@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 960px) {
  .titulo-mamparas {
    font-size: 2.8rem;
  }
  
  .subtitulo-mamparas {
    font-size: 1.3rem;
    padding: 0 20px;
  }
  
  .parrafo-mamparas {
    font-size: 1rem;
    margin: 0 20px 30px;
  }
}

@media (max-width: 600px) {
  .fondo-mamparas {
    padding: 60px 15px;
  }
  
  .titulo-mamparas {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .subtitulo-mamparas {
    font-size: 1.1rem;
  }
  
  .parrafo-mamparas {
    padding: 20px;
    margin-bottom: 30px;
  }
  
  .btn-whatsapp {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .titulo-mamparas {
    font-size: 1.8rem;
  }
  
  .subtitulo-mamparas {
    font-size: 1rem;
  }
  
  .parrafo-mamparas {
    padding: 15px;
    font-size: 0.95rem;
  }
}
</style>

