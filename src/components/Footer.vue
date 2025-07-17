<template>
  <v-footer dark class="footer">
    <v-container>

      <v-row class="footer-content">

        <v-col cols="12" md="4" class="footer-section">
          <div class="logo-container mb-4">
            <v-img
              :src="require('@/assets/logos/logo1.webp')"
              max-width="180"
              contain
              class="footer-logo"
            />
          </div>
          <p class="company-description">
            Especialistas en soluciones de vidrio arquitectónico desde 2023. 
            Transformando espacios con calidad y diseño innovador.
          </p>
          <div class="social-icons mt-4">
            <v-btn
              v-for="(social, i) in socialMedia"
              :key="i"
              icon
              :href="social.link"
              target="_blank"
              class="mx-1 social-icon"
            >
              <v-icon size="28">{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>


        <v-col cols="6" md="2" class="footer-section">
          <h3 class="footer-heading">Navegación</h3>
          <v-list dense class="transparent">
            <v-list-item
              v-for="(link, index) in quickLinks"
              :key="index"
              @click="handleLinkClick(link)"
              class="footer-link"
            >
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>


        <v-col cols="6" md="2" class="footer-section">
          <h3 class="footer-heading">Legal</h3>
          <v-list dense class="transparent">
            <v-list-item
              v-for="(legal, index) in legalLinks"
              :key="index"
              :href="legal.url"
              target="_blank"
              class="footer-link"
            >
              <v-list-item-title>{{ legal.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>


        <v-col cols="12" md="4" class="footer-section">
          <h3 class="footer-heading">Contacto</h3>
          <v-list dense class="transparent contact-list">
            <v-list-item class="footer-contact-item">
              <v-list-item-icon>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>General Rodriguez 1748</v-list-item-title>
                <v-list-item-subtitle>Buenos Aires, Argentina</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="footer-contact-item">
              <v-list-item-icon>
                <v-icon>mdi-phone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>+54 9 11 3449-4555</v-list-item-title>
                <v-list-item-subtitle>Lun-Vie 9:00 - 18:00</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="footer-contact-item">
              <v-list-item-icon>
                <v-icon>mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>todoenmamparaslc@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Soporte 24/7</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>


      <v-divider class="my-6"></v-divider>


      <v-row class="footer-bottom">
        <v-col cols="12" md="6" class="copyright">
          © {{ new Date().getFullYear() }} Todo Mampara S.A. - Todos los derechos reservados
        </v-col>
        
        <v-col cols="12" md="6" class="developer-credit">
          <span class="credit-text">
            Desarrollado y Pensado por
            <a 
            href="https://wa.me/5491138185204" 
              target="_blank" 
              class="developer-link"
            >
              Della
            </a>
            ¡Para contactarnos haga click en el Enlace!
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    quickLinks: [
      { title: 'Inicio', anchor: 'inicio' },
      { title: 'Servicios', anchor: 'servicios' },
      { title: 'Proyectos', anchor: 'proyectos' },
      { title: 'Catálogo', anchor: 'catalogo' },
      { 
        title: 'Contacto', 
        route: '/contacto' 
      }
    ],
    legalLinks: [
      { title: 'Términos y Condiciones', url: '/terminos' },
      { title: 'Política de Privacidad', url: '/privacidad' },
      { title: 'Aviso Legal', url: '/legal' }
    ],
    socialMedia: [
      { icon: 'mdi-facebook', link: 'https://www.facebook.com/share/159Fo8pesp/' },
      { icon: 'mdi-instagram', link: 'https://www.instagram.com/todo.en.mamparas?igsh=dTBuajFuZjRlOTAy' },
      { icon: 'mdi-linkedin', link: '' },
      { icon: 'mdi-youtube', link: '' }
    ]
  }),
  methods: {
    handleLinkClick(link) {
      if (link.route) {
        this.$router.push(link.route); 
      } else if (link.external) {
        window.open(link.url, '_blank'); // 
      } else {
        this.scrollToSection(link.anchor);
      }
    },
    scrollToSection(anchor) {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            this.scrollToAnchor(anchor);
          });
        });
      } else {
        this.scrollToAnchor(anchor);
      }
    },
    scrollToAnchor(anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #2d3436 !important;
  color: #ffffff !important;
  padding: 4rem 0 1rem !important;
  border-top: 4px solid #0984e3;
}

.footer-content {
  padding-bottom: 2rem;
}

.footer-section {
  padding: 1.5rem;
}

.footer-heading {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #dfe6e9;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #0984e3;
}

.company-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #b2bec3;
  max-width: 300px;
}

.footer-link {
  color: #b2bec3 !important;
  transition: all 0.3s ease;
  padding: 4px 0 !important;
  cursor: pointer;
}

.footer-link:hover {
  color: #0984e3 !important;
  transform: translateX(5px);
}

.social-icon {
  color: #b2bec3 !important;
  transition: all 0.3s ease;
}

.social-icon:hover {
  color: #0984e3 !important;
  transform: scale(1.1);
}

.contact-list {
  background-color: rgba(255, 255, 255, 0.05) !important;
  border-radius: 8px;
  padding: 1rem !important;
}

.footer-contact-item {
  margin: 0.5rem 0;
}

.footer-bottom {
  padding: 1rem 0;
  font-size: 0.85rem;
  color: #636e72;
}

.copyright {
  text-align: left;
}

.developer-credit {
  text-align: right;
}

.credit-text {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
}

.developer-link {
  color: #74b9ff !important;
  text-decoration: none;
  transition: all 0.3s ease;
}

.developer-link:hover {
  color: #0984e3 !important;
  text-decoration: underline;
}

@media (max-width: 960px) {
  .footer-section {
    text-align: center;
    padding: 1rem;
  }

  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .company-description {
    margin: 0 auto;
  }

  .copyright,
  .developer-credit {
    text-align: center !important;
    padding: 0.5rem 0;
  }
}
</style>