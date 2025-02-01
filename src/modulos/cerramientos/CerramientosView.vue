<template>
  <div>
    <!-- Contenedor con la imagen de fondo -->
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

          <!-- CerramientosCarousel -->
          <CerramientosCarousel :cerramientos="cerramientos" />

          <!-- Botón de WhatsApp -->
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
/* Estilos para el contenedor con la imagen de fondo */
.contenedor-cerramientos {
  background-image: url("../../assets/fondos/fondo2.jpg");
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
}

/* Estilos para el contenedor de ContactoView */
.contenedor-contacto {
  background-color: #fff; /* Fondo blanco para el componente ContactoView */
  padding-top: 50px; /* Espacio adicional arriba de ContactoView */
  padding-bottom: 50px; /* Espacio adicional debajo de ContactoView */
}

.titulo-cerramientos {
  color: rgba(241, 240, 240, 0.568);
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.subtitulo-cerramientos {
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  opacity: 0.8;
  text-align: center;
}

.parrafo-cerramientos {
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
}

.parrafo-cerramientos:hover {
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
  margin-top: 20px;
  display: block;
  margin: 0 auto;
}

.btn-whatsapp:hover {
  background-color: #1da85f;
}

@media (max-width: 600px) {
  .card {
    width: 150px;
    height: 200px;
  }
}

@media (max-width: 400px) {
  .card {
    width: 100px;
    height: 150px;
  }
}
</style>