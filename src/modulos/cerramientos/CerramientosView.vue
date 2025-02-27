<template>
  <div>

    <v-container fluid class="contenedor-cerramientos">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" xl="8">
          <h1 class="titulo-cerramientos">Cerramientos</h1>
          <p class="subtitulo-cerramientos">
            En esta sección, descubrirás nuestra gama completa de Cerramientos y soluciones disponibles para ti.
          </p>
          <p class="parrafo-cerramientos">
            Aquí, la imaginación toma forma y se convierte en realidad. Visualiza tu espacio ideal, 
            sueña con el futuro y deja que nuestra dedicación al diseño te guíe hacia la creación de un espacio que exprese tu estilo. 
            Permítenos transportarte a un mundo de armonía y sofisticación.
          </p>

          <CerramientosCarousel :cerramientos="cerramientos" />
          <button 
          class="btn-whatsapp"
          @click="openWhatsApp"
          >
            
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
import CerramientosCarousel from "@/modulos/cerramientos/CerramientosCarousel.vue";
import ContactoView from "../../components/ContactoView.vue";

export default {
  name: "CerramientosView",
  components: {
    CerramientosCarousel,
    ContactoView,
  },
  data() {
    return {
      cerramientos: [
        {
          titulo: "Cerramientos Corredizos",
          descripcion: "Paneles de vidrio que se deslizan horizontalmente sobre rieles.",
          imagen: require("../../assets/cerramientos/corredizo.png"),
        },
        {
          titulo: "Cerramientos Fijos",
          descripcion: "Paneles de vidrio que no se abren, utilizados principalmente para dividir espacios",
          imagen: require("../../assets/cerramientos/fijos.jpg"),
        },
        {
          titulo: "Cerramientos Mixtos",
          descripcion: "Combinan vidrio con otros materiales como aluminio o madera, ofreciendo lo mejor de ambos mundos.",
          imagen: require("../../assets/cerramientos/mixto.jpg"),
        },
        {
          titulo: "Cerramientos con Cierre Multipunto",
          descripcion: "Sistemas de cerramiento que incluyen múltiples puntos de bloqueo para mayor seguridad y aislamiento.",
          imagen: require("../../assets/cerramientos/multipunto.jpg"),
        },
        {
          titulo: "Cerramientos Plegables",
          descripcion: "Compuestos por paneles de vidrio que se pliegan sobre sí mismos, estos cerramientos permiten abrir completamente un espacio.",
          imagen: require("../../assets/cerramientos/plegable (2).jpg"),
        },
      ],
    };
  },

  methods: {
    openWhatsApp() {
      const url = "https://wa.me/5491134494555";
      window.open(url, "_blank", "noopener,noreferrer");
    }
  },

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>

.contenedor-cerramientos {
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

.contenedor-cerramientos::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.), rgba(0, 0, 0, 0.2));
  z-index: 1;
}

.contenedor-contacto {
  background-color: #f9f9f9;
  padding: 80px 0;
}

.titulo-cerramientos {
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

.subtitulo-cerramientos {
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

.parrafo-cerramientos {
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

.parrafo-cerramientos:hover {
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
  .titulo-cerramientos {
    font-size: 2.8rem;
  }
  
  .subtitulo-cerramientos {
    font-size: 1.3rem;
    padding: 0 20px;
  }
  
  .parrafo-cerramientos {
    font-size: 1rem;
    margin: 0 20px 30px;
  }
}

@media (max-width: 600px) {
  .contenedor-cerramientos {
    padding: 60px 15px;
  }
  
  .titulo-cerramientos {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .subtitulo-cerramientos {
    font-size: 1.1rem;
  }
  
  .parrafo-cerramientos {
    padding: 20px;
    margin-bottom: 30px;
  }
  
  .btn-whatsapp {
    padding: 12px 25px;
    font-size: 1rem;
  }
}

@media (max-width: 400px) {
  .titulo-cerramientos {
    font-size: 1.8rem;
  }
  
  .subtitulo-cerramientos {
    font-size: 1rem;
  }
  
  .parrafo-cerramientos {
    padding: 15px;
    font-size: 0.95rem;
  }
}
</style>