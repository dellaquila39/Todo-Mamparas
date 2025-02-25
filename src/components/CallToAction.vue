<template>
  <v-container fluid class="cta-container pa-0">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" md="8" class="text-center">
        <h2 class="cta-title">¿Listo para obtener un presupuesto gratuito?</h2>
        <p class="cta-description">
          No dudes en contactarnos para obtener un presupuesto personalizado y resolver todas tus dudas sobre nuestros productos y servicios de vidrio.
        </p>
        <v-btn
          color="blue lighten-1"
          dark
          large
          class="cta-button"
          href="https://wa.me/5491134494555" 
          target="_blank"
        >
          <v-icon left>mdi-whatsapp</v-icon>
          Obtener un presupuesto gratuito
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CallToAction",

};
</script>

<style scoped>
.cta-container {
  background: linear-gradient(to bottom, #4567b7, #1a1d23);
  height: 400px; /* Aumenté la altura para un mejor aspecto */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 0 20px; /* Añadí padding para evitar que el texto se corte */
}

.cta-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
  padding: 0 20px; /* Añadí padding para evitar que el texto se corte */
}

.cta-button {
  background-color: #03a9f4;
  color: #fff;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  white-space: normal; /* Permite que el texto del botón se divida en varias líneas */
  padding: 10px 20px; /* Ajusté el padding para dispositivos móviles */
}

.cta-button:hover {
  background-color: #0377b7;
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Estilos responsivos */
@media (max-width: 960px) {
  .cta-title {
    font-size: 2rem;
  }

  .cta-description {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .cta-container {
    height: 300px;
  }

  .cta-title {
    font-size: 1.5rem; /* Reduje el tamaño de la fuente para dispositivos móviles */
    padding: 0 10px; /* Ajusté el padding para dispositivos móviles */
  }

  .cta-description {
    font-size: 0.9rem;
    padding: 0 10px; /* Ajusté el padding para dispositivos móviles */
  }

  .cta-button {
    font-size: 14px;
    padding: 8px 16px;
    width: 90%; /* Ajusté el ancho del botón para dispositivos móviles */
    margin: 0 auto; /* Centré el botón */
  }
}
</style>