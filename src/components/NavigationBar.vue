<template>
  <v-app-bar app color="white" elevate-on-scroll height="80" class="navigation-bar">
    <!-- Logo -->
    <v-avatar class="logo" size="120" tile>
      <img 
        :src="require('@/assets/logos/logo2.png')" 
        alt="Logo Todo Mamparas"
        class="logo-image"
      >
    </v-avatar>

    <v-spacer></v-spacer>

    <!-- Menú principal -->
    <div class="nav-links d-none d-md-flex">
      <v-btn text @click="goToStartView" class="nav-link">
        <v-icon left>mdi-home</v-icon>
        Inicio
      </v-btn>
      <v-btn text to="/contacto" class="nav-link"> <!-- Cambiado a Contacto -->
        <v-icon left>mdi-email-send</v-icon>
        Contacto
      </v-btn>
      <v-btn text @click="scrollToSection('proyectos')" class="nav-link"> <!-- Redirección a sección -->
        <v-icon left>mdi-image-multiple</v-icon>
        Proyectos
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <!-- Iconos de contacto - Modificado el contenedor -->
    <div class="social-icons-container">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn 
            icon 
            color="#C13584"
            href="https://www.instagram.com/todo.en.mamparas?igsh=dTBuajFuZjRlOTAy" 
            target="_blank"
            class="social-icon"
            v-on="on"
          >
            <v-icon :size="iconSize">mdi-instagram</v-icon>
          </v-btn>
        </template>
        <span>Síguenos en Instagram</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn 
            icon 
            color="#25D366"
            href="https://wa.me/5491134494555" 
            target="_blank"
            class="social-icon"
            v-on="on"
          >
            <v-icon :size="iconSize">mdi-whatsapp</v-icon>
          </v-btn>
        </template>
        <span>Contáctanos por WhatsApp</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn 
            icon 
            color="#D50029"
            href="mailto:chacalinquieto@gmail.com" 
            class="social-icon"
            v-on="on"
          >
            <v-icon :size="iconSize">mdi-email</v-icon>
          </v-btn>
        </template>
        <span>Envíanos un email</span>
      </v-tooltip>
    </div>

    <!-- Menú móvil actualizado -->
    <v-menu bottom left class="d-flex d-md-none">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="goToStartView">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item to="/contacto">
          <v-list-item-title>Contacto</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('proyectos')">
          <v-list-item-title>Proyectos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavigationBar',
  computed: {
    iconSize() {
      return this.$vuetify.breakpoint.smAndDown ? '28px' : '32px'
    }
  },
  methods: {
    goToStartView() {
      this.$router.push('/');
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
};
</script>

<style scoped>
.navigation-bar {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 20px;
}

.logo {
  margin-left: 2rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-image {
  object-fit: contain;
}

.nav-links {
  gap: 1.5rem;
}

.nav-link {
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #2d3436 !important;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #2196F3 !important;
  transform: translateY(-2px);
}

/* Contenedor modificado para los iconos */
.social-icons-container {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 180px;
  justify-content: flex-end;
}

.social-icon {
  transition: all 0.3s ease;
  margin: 0 4px;
}

.social-icon:hover {
  transform: scale(1.15);
}

/* Ajustes responsive para iconos */
@media (max-width: 960px) {
  .logo {
    margin-left: 1rem;
    size: 100px;
  }
  
  .nav-links {
    gap: 0.8rem;
  }
  
  .social-icons-container {
    min-width: auto;
    gap: 4px;
  }
}

@media (max-width: 600px) {
  .logo {
    margin-left: 0.5rem;
    size: 80px;
  }
  
  .social-icon {
    margin: 0 2px;
  }
  
  .social-icons-container {
    gap: 2px;
  }
  
  .v-btn--icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 400px) {
  .navigation-bar {
    padding: 0 10px;
  }
  
  .social-icon .v-icon {
    font-size: 24px !important;
  }
  
  .logo {
    size: 70px;
    margin-left: 0.2rem;
  }
}
</style>