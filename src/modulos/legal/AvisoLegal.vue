<template>
  <v-container class="legal-notice-container">
    <v-row class="justify-center">
      <v-col cols="12" md="10" lg="8">

        <div class="text-center mb-8">
          <h1 class="legal-notice-title primary--text">Aviso Legal</h1>
          <p class="update-date">Última actualización: 22 de Febrero de 2025</p>
          <v-divider class="my-4"></v-divider>
        </div>

        <v-list class="legal-notice-content" dense>
          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">1. Identificación del Titular</h2>
              <p class="section-text">
                Título y titular: <strong>Todo Mampara S.A.</strong>
              </p>
              <ul class="info-list">
                <li><strong>Dirección:</strong> General Rodriguez 1748, Buenos Aires, Argentina</li>
                <li><strong>Teléfono:</strong> +54 9 11 3449-4555</li>
                <li><strong>Correo electrónico:</strong> chacalinquieto@gmail.com</li>
              </ul>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">2. Objeto</h2>
              <p class="section-text">
                El Sitio tiene como objetivo proporcionar información sobre nuestros productos y servicios, así como facilitar la consulta y el contacto con nuestros clientes potenciales. La utilización del Sitio implica la aceptación plena y sin reservas de estos términos.
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">3. Propiedad Intelectual</h2>
              <p class="section-text">
                Los contenidos del Sitio, incluyendo, pero no limitado a, textos, imágenes, logotipos, gráficos, videos y otros materiales, son propiedad de <strong>Todo Mampara S.A.</strong> o de sus licenciantes. Queda prohibida cualquier reproducción, distribución o comunicación pública de los contenidos sin la autorización previa y por escrito de <strong>Todo Mampara S.A.</strong>.
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">4. Responsabilidad</h2>
              <p class="section-text">
                <strong>Todo Mampara S.A.</strong> no se hace responsable de los posibles daños o perjuicios que puedan derivarse del uso inadecuado de los contenidos del Sitio. Asimismo, no garantizamos la disponibilidad y continuidad del funcionamiento del Sitio, ni que esté libre de errores.
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">5. Enlaces a Terceros</h2>
              <p class="section-text">
                El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para facilitar el acceso a la información y no implican una aprobación o respaldo de los contenidos de dichos sitios. <strong>Todo Mampara S.A.</strong> no se responsabiliza del contenido, la política de privacidad o las prácticas de dichos sitios.
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">6. Modificaciones</h2>
              <p class="section-text">
                <strong>Todo Mampara S.A.</strong> se reserva el derecho de modificar el presente Aviso Legal en cualquier momento, por lo que se recomienda revisar este documento periódicamente. Las modificaciones serán efectivas desde su publicación en el Sitio.
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">7. Legislación Aplicable</h2>
              <p class="section-text">
                Este Aviso Legal se regirá e interpretará de acuerdo con las leyes de <strong>Argentina</strong>, y cualquier disputa que surja en relación con el uso del Sitio será sometida a la jurisdicción exclusiva de los tribunales de <strong>Buenos Aires, Argentina</strong>.
              </p>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <h2 class="section-title">8. Contacto</h2>
              <p class="section-text">
                Si tiene alguna pregunta sobre este Aviso Legal, por favor contáctenos a través de nuestro 
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
  name: 'AvisoLegal'
}
</script>

<style scoped>
.legal-notice-container {
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.95);
}

.legal-notice-title {
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

.legal-notice-content {
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
  .legal-notice-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .legal-notice-container {
    padding: 2rem 0;
  }
  
  .legal-notice-title {
    font-size: 1.75rem;
  }
  
  .section-text {
    font-size: 0.9rem;
  }
}
</style>