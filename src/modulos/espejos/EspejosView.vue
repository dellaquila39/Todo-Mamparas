<template>
  <div>

    <v-container fluid class="fondo-espejos">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" xl="8">
          <h1 class="titulo-espejos">Espejos</h1>
          <p class="subtitulo-espejos">
            En esta sección, descubrirás nuestra gama completa de Espejos y soluciones disponibles para ti.
          </p>
          <p class="parrafo-espejos">
            Aquí, el arte se une a la reflexión para crear espejos que no solo capturan tu imagen, sino también tu esencia. Imagina tu espejo ideal, 
            visualiza cómo transformará tu espacio y permite que nuestra pasión por el diseño te inspire a crear un ambiente que refleje tu estilo único. 
            Déjanos envolverte en un mundo de sofisticación y elegancia, donde cada detalle se convierte en un reflejo de tu personalidad.
          </p>
          <EspejosCarousel :espejos="espejos" />
          <button 
          class="btn-whatsapp"
          @click="openWhatsApp">
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
import EspejosCarousel from "./EspejosCarousel.vue";
import ContactoView from "../../components/ContactoView.vue";

export default {
  name: "EspejosView",
  components: {
    EspejosCarousel,
    ContactoView,
  },
  data() {
    return {
      espejos: [
        {
          titulo: "Espejo Empotrado",
          descripcion: "Espejos que se instalan directamente en la pared, sin protuberancias, creando un aspecto limpio y minimalista.",
          imagen: require("../../assets/espejos/empotrado.png"),
        },
        {
          titulo: "Espejo con Luz Led",
          descripcion: "Proporcionan iluminación funcional y estética, ideal para generar ambientes modernos",
          imagen: require("../../assets/espejos/luminoso.jpg"),
        },
        {
          titulo: "Espejo con Marco",
          descripcion: "Añaden un toque estético y pueden adaptarse a diferentes estilos (moderno, rústico, vintage, etc.).",
          imagen: require("../../assets/espejos/marco-diseño.jpg"),
        },
        {
          titulo: "Espejo Decorativo",
          descripcion: "Espejos con formas no convencionales (redondos, ovalados, hexagonales, etc.) o diseños artísticos.",
          imagen: require("../../assets/espejos/forma.jpg"),
        },
        {
          titulo: "Espejo de Pared Completa",
          descripcion: "Espejos grandes que cubren toda una pared, creando un efecto visual impactante.",
          imagen: require("../../assets/espejos/espejo-grande.webp"),
        },
        {
          titulo: "Espejo de Cuerpo Entero",
          descripcion: "Espejos largos que permiten verse de pies a cabeza, Ideales para vestidoresn.",
          imagen: require("../../assets/espejos/cuerpo-entero.png"),
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },

  methods: {
    openWhatsApp() {
      const url = "https://wa.me/5491134494555";
      window.open(url, "_blank", "noopener,noreferrer");
    }
  },
};
</script>

<style scoped>

.fondo-espejos {
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

.fondo-espejos::before {
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

.titulo-espejos {
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

.subtitulo-espejos {
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

.parrafo-espejos {
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

.parrafo-espejos:hover {
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
  .titulo-espejos {
    font-size: 2.8rem;
  }
  
  .subtitulo-espejos {
    font-size: 1.3rem;
  }
  
  .parrafo-espejos {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .fondo-espejos {
    padding: 60px 15px;
    background-attachment: scroll;
  }
  
  .titulo-espejos {
    font-size: 2rem;
  }
  
  .subtitulo-espejos {
    font-size: 1.1rem;
  }
  
  .parrafo-espejos {
    padding: 20px;
  }
  
  .btn-whatsapp {
    padding: 12px 25px;
  }
}

@media (max-width: 400px) {
  .titulo-espejos {
    font-size: 1.8rem;
  }
  
  .parrafo-espejos {
    padding: 15px;
  }
}
</style>

