<template>
  <v-container class="service-container">
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-6">
        <h1 class="text-center modern-title">Servicios</h1>
        <p class="parrafo-subtitle">Conoce nuestros servicios personalizados para vidrios y mamparas.</p>
        <div class="title-divider"></div>
      </v-col>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="service-card"
          :class="{ 'service-card-hover': hover === index }"
          @mouseover="hover = index"
          @mouseout="hover = -1"
        >
          <v-card-title class="text-center">
            <v-icon large class="blue--text">{{ service.icon }}</v-icon>
          </v-card-title>
          <v-card-text>
            <h3 class="text-center">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      services: [
        {
          title: "ASESORAMIENTO",
          description:
            "Conoce nuestras soluciones personalizadas para vidrios y mamparas. Nuestros expertos analizan tus necesidades y ofrecen opciones innovadoras.",
          icon: "mdi-account-circle",
        },
        {
          title: "CORTE A MEDIDA",
          description:
            "Descubre la precisión de nuestro corte a medida para vidrios y mamparas. Tecnología de vanguardia garantiza calidad y precisión en cada corte.",
          icon: "mdi-ruler-square-compass",
        },
        {
          title: "COLOCACIÓN",
          description:
            "Confía en nuestros técnicos especializados para la colocación de vidrios y mamparas. Verificamos cada detalle para asegurar una instalación segura y eficiente.",
          icon: "mdi-wrench",
        },
        {
          title: "REPOSICIÓN",
          description:
            "Tenemos la solución. Nuestro equipo analiza el daño y proporciona una reposición de alta calidad. Aseguramos un resultado limpio, rápido, efectivo y duradero.",
          icon: "mdi-refresh",
        },
      ],
      hover: -1,
    };
  },
};
</script>

<style scoped>
.service-container {
  padding: 2rem;
}

.modern-title {
  font-family: 'Poppins', sans-serif !important;
  color: #2A3B5D !important;
  font-weight: 600 !important;
  font-size: 2.5rem !important;
  letter-spacing: -0.5px;
}

.parrafo-subtitle {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400 !important;
  font-size: 1.1rem !important;
  color: #2d3436;
  margin-top: 0.5rem;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: #2196F3;
  margin: 1.5rem auto;
  border-radius: 2px;
}

.service-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid #ddd;
  padding: 1rem;
}

.service-card-hover {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(2, 45, 95, 0.637);
  background-color: #f7f7f7;
}

.service-description {
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  text-align: center;
}

.v-icon {
  transition: all 0.3s ease;
}

.service-card:hover .v-icon {
  transform: scale(1.2);
  color: #333;
}

@media (max-width: 960px) {
  .modern-title {
    font-size: 2rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 600px) {
  .modern-title {
    font-size: 1.75rem;
  }

  .service-card {
    padding: 0.5rem;
  }

  .service-description {
    font-size: 0.8rem;
  }
}
</style>