<template>
  <v-container class="privacy-container">
    <v-row class="justify-center">
      <v-col cols="12" md="10" lg="8">
        <!-- Encabezado -->
        <div class="text-center mb-8">
          <h1 class="privacy-title primary--text">Política de Privacidad</h1>
          <p class="update-date">Última actualización: 22 de Febrero de 2025</p>
          <v-divider class="my-4"></v-divider>
        </div>

        <!-- Contenido -->
        <v-list class="privacy-content" dense>
          <!-- Sección 1: Información que Recopilamos -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">1. Información que Recopilamos</h2>
              <p class="section-text">
                En <strong>Todo Mampara S.A.</strong> (en adelante, "el Sitio"), nos tomamos muy en serio la privacidad del usuario. Esta Política de Privacidad describe cómo manejamos la información que puede ser recopilada durante su visita al Sitio.
              </p>
              <p class="section-text">
                Nuestro Sitio recopila información de forma limitada. Puede incluir:
              </p>
              <ul class="info-list">
                <li>
                  <strong>Información de contacto:</strong> Si usted nos contacta a través de formularios, puede que recolectemos su nombre y correo electrónico.
                </li>
                <li>
                  <strong>Datos de navegación:</strong> Podemos recopilar información no personal como su dirección IP y el tipo de navegador, que se utilizan para mejorar la experiencia del usuario en nuestro Sitio.
                </li>
              </ul>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 2: Uso de la Información -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">2. Uso de la Información</h2>
              <p class="section-text">
                La información que recopilamos se utiliza exclusivamente para:
              </p>
              <ul class="info-list">
                <li>Responder a sus preguntas o solicitudes.</li>
                <li>Mejorar nuestros servicios y la funcionalidad del Sitio.</li>
              </ul>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 3: Compartición de Información -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">3. Compartición de Información</h2>
              <p class="section-text">
                No compartimos su información con terceros. No vendemos, alquilamos ni cedemos su información personal.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 4: Seguridad de la Información -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">4. Seguridad de la Información</h2>
              <p class="section-text">
                Tomamos las precauciones necesarias para proteger la información que pueda ser recopilada, pero recuerde que ningún método de transmisión por Internet es completamente seguro.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 5: Cookies -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">5. Cookies</h2>
              <p class="section-text">
                Nuestro Sitio puede usar cookies para mejorar su experiencia. Puede configurar su navegador para que rechace cookies, aunque esto puede afectar el funcionamiento del Sitio.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 6: Cambios en la Política de Privacidad -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">6. Cambios en la Política de Privacidad</h2>
              <p class="section-text">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le sugerimos que revise esta sección periódicamente para estar informado sobre cómo protegemos su información.
              </p>
            </v-list-item-content>
          </v-list-item>
          
          <!-- Sección 7: Contacto -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">7. Contacto</h2>
              <p class="section-text">
                Si tiene alguna pregunta sobre estas Politicas de Privacidad, por favor contáctenos a través de nuestro 
                <router-link to="/contacto" class="contact-link">formulario de contacto</router-link>.
              </p>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PoliticaPrivacidad'
}
</script>

<style scoped>
.privacy-container {
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.95);
}

.privacy-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
}

.update-date {
  font-family: 'Poppins', sans-serif;
  color: #666;
  margin-top: 0.5rem;
}

.privacy-content {
  background: transparent !important;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #2d3436;
  margin: 2rem 0 1rem;
}

.section-text {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

.info-list {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.info-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

@media (max-width: 960px) {
  .privacy-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .privacy-container {
    padding: 2rem 0;
  }
  
  .privacy-title {
    font-size: 1.75rem;
  }
  
  .section-text {
    font-size: 0.9rem;
  }
}
</style>