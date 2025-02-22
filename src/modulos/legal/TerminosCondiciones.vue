<template>
  <v-container class="terms-container">
    <v-row class="justify-center">
      <v-col cols="12" md="10" lg="8">
        <!-- Encabezado -->
        <div class="text-center mb-8">
          <h1 class="terms-title primary--text">Términos y Condiciones de Uso</h1>
          <p class="update-date">Última actualización: 22 de Febrero de 2025</p>
          <v-divider class="my-4"></v-divider>
        </div>

        <!-- Contenido -->
        <v-list class="terms-content" dense>
          <!-- Sección 1: Aceptación de los Términos -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">1. Aceptación de los Términos</h2>
              <p class="section-text">
                Bienvenido a <strong>Todo Mampara S.A.</strong>. Al acceder y usar nuestro sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones. Si no está de acuerdo con alguno de estos términos, le recomendamos que no utilice este sitio.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 2: Uso del Sitio -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">2. Uso del Sitio</h2>
              <h3 class="subsection-title">2.1. Uso Permitido</h3>
              <p class="section-text">
                Usted se compromete a utilizar este sitio únicamente para fines legales y de forma que no infrinja los derechos de, o restrinja o inhiba el uso y disfrute del sitio por parte de terceros.
              </p>

              <h3 class="subsection-title">2.2. Restricciones</h3>
              <p class="section-text">
                Está prohibido:
              </p>
              <ul class="prohibitions-list">
                <li>Usar el sitio para enviar o recibir contenido que sea ilegal, dañino o que infrinja derechos de propiedad.</li>
                <li>Realizar actividades que puedan dañar, deshabilitar, sobrecargar o afectar el funcionamiento del sitio.</li>
              </ul>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 3: Propiedad Intelectual -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">3. Propiedad Intelectual</h2>
              <p class="section-text">
                Todo el contenido del sitio, incluidos textos, gráficos, logotipos, imágenes y software, es propiedad de <strong>Todo Mampara S.A.</strong> o de sus licenciantes y está protegido por las leyes de propiedad intelectual. Está prohibido reproducir, distribuir o crear obras derivadas sin el consentimiento expreso por escrito de <strong>Todo Mampara S.A.</strong>.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 4: Exención de Responsabilidad -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">4. Exención de Responsabilidad</h2>
              <p class="section-text">
                El uso de este sitio es bajo su propio riesgo. <strong>Todo Mampara S.A.</strong> no garantiza la disponibilidad continua del sitio y no se hace responsable de ningún daño directo, indirecto, incidental, punitivo o consecuencial que surja de su uso.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 5: Enlaces a Terceros -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">5. Enlaces a Terceros</h2>
              <p class="section-text">
                Este sitio puede contener enlaces a sitios web de terceros. <strong>Todo Mampara S.A.</strong> no tiene control sobre el contenido, políticas de privacidad o prácticas de estos sitios, y no asume ninguna responsabilidad por ellos.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 6: Protección de Datos -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">6. Protección de Datos</h2>
              <p class="section-text">
                La información personal que recopilamos se utilizará de acuerdo con nuestra <router-link to="/privacidad" class="contact-link">Política de Privacidad</router-link>, que forma parte de estos términos.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 7: Modificaciones de los Términos -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">7. Modificaciones de los Términos</h2>
              <p class="section-text">
                <strong>Todo Mampara S.A.</strong> se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones estarán vigentes desde su publicación en el sitio. Se recomienda revisar periódicamente esta sección para estar informado sobre los cambios.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 8: Legislación Aplicable -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">8. Legislación Aplicable</h2>
              <p class="section-text">
                Estos términos y condiciones se rigen por las leyes de <strong>Argentina</strong>, y cualquier disputa que surja en relación con el uso del sitio será sometida a la jurisdicción exclusiva de los tribunales de <strong>Buenos Aires, Argentina</strong>.
              </p>
            </v-list-item-content>
          </v-list-item>

          <!-- Sección 9: Contacto -->
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">9. Contacto</h2>
              <p class="section-text">
                Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos a través de nuestro 
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
  name: 'TerminosCondiciones'
}
</script>

<style scoped>
.terms-container {
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.95);
}

.terms-title {
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

.terms-content {
  background: transparent !important;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #2d3436;
  margin: 2rem 0 1rem;
}

.subsection-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #444;
  margin: 1.5rem 0 0.5rem;
}

.section-text {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

.prohibitions-list {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.prohibitions-list li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.contact-link {
  color: #2196F3 !important;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  text-decoration: underline;
}

@media (max-width: 960px) {
  .terms-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .terms-container {
    padding: 2rem 0;
  }
  
  .terms-title {
    font-size: 1.75rem;
  }
  
  .section-text {
    font-size: 0.9rem;
  }
}
</style>