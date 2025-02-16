<template>
  <div>
    <!-- Contenedor con la imagen de fondo -->
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
          <button class="btn-whatsapp">WhatsApp</button>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contenedor para ContactoView -->
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
};
</script>

<style scoped>
/* Contenedor principal */
.fondo-espejos {
  background-image: url('~@/assets/fondos/fondo2.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh;
  padding-bottom: 50px;
  position: relative;
}

/* Overlay oscuro */
.fondo-espejos::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.contenedor-contacto {
  background-color: #fff;
  padding: 50px 0;
}

/* Textos */
.titulo-espejos {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
  z-index: 2;
}

.subtitulo-espejos {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  opacity: 0.9;
  text-align: center;
  position: relative;
  z-index: 2;
}

.parrafo-espejos {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  padding: 20px;
  margin: 0 auto 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.parrafo-espejos:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
  transition: all 0.4s ease-in-out;
}

/* Botón WhatsApp */
.btn-whatsapp {
  background-color: #25d366;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 20px auto 0;
  display: block;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.btn-whatsapp:hover {
  background-color: #1da85f;
}

/* Responsive */
@media (max-width: 600px) {
  .titulo-espejos {
    font-size: 36px;
  }
  
  .subtitulo-espejos {
    font-size: 20px;
  }
  
  .parrafo-espejos {
    font-size: 16px;
    padding: 15px;
  }
}

@media (max-width: 400px) {
  .titulo-espejos {
    font-size: 28px;
  }
  
  .subtitulo-espejos {
    font-size: 18px;
  }
  
  .parrafo-espejos {
    font-size: 14px;
    padding: 10px;
  }
}
</style>