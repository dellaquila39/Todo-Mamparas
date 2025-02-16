<template>
  <div>
    <!-- Contenedor con la imagen de fondo -->
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
    // Desplazar la página al principio al cargar el componente
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* Contenedor con la imagen de fondo */
.fondo-mamparas {
  background-image: url("~@/assets/fondos/fondo2.jpg"); /* Ruta corregida */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos el alto de la pantalla */
  padding-bottom: 50px; /* Espacio adicional debajo del botón de WhatsApp */
  position: relative;
}

/* Overlay oscuro para mejorar la legibilidad */
.fondo-mamparas::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /* Ajusta la opacidad según sea necesario */
  z-index: 1;
}

/* Contenedor de ContactoView */
.contenedor-contacto {
  background-color: #fff; /* Fondo blanco para el componente ContactoView */
  padding-top: 50px; /* Espacio adicional arriba de ContactoView */
  padding-bottom: 50px; /* Espacio adicional debajo de ContactoView */
}

/* Estilos para el título */
.titulo-mamparas {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Estilos para el subtítulo */
.subtitulo-mamparas {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  opacity: 0.9;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Estilos para el párrafo */
.parrafo-mamparas {
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

.parrafo-mamparas:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
  transition: all 0.4s ease-in-out;
}

/* Estilos para el botón de WhatsApp */
.btn-whatsapp {
  background-color: #25d366;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  display: block;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.btn-whatsapp:hover {
  background-color: #1da85f;
}

/* Responsive Design */
@media (max-width: 600px) {
  .titulo-mamparas {
    font-size: 36px;
  }

  .subtitulo-mamparas {
    font-size: 20px;
  }

  .parrafo-mamparas {
    font-size: 16px;
    padding: 15px;
  }
}

@media (max-width: 400px) {
  .titulo-mamparas {
    font-size: 28px;
  }

  .subtitulo-mamparas {
    font-size: 18px;
  }

  .parrafo-mamparas {
    font-size: 14px;
    padding: 10px;
  }
}
</style>