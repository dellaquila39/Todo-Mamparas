<template>
  <transition name="fade">
    <div v-if="visible" class="cookie-banner">
      <span>
        Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra <a href="/politica-cookies" target="_blank">política de cookies</a>.
      </span>
      <v-btn color="primary" class="accept-btn" @click="acceptCookies">Aceptar</v-btn>
    </div>
  </transition>
</template>

<script>
export default {
  name: "CookieBanner",
  data() {
    return {
      visible: true, // Siempre visible al cargar
    };
  },
  methods: {
    acceptCookies() {
      this.visible = false; // Solo oculta el banner hasta recargar
    }
  }
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(42, 59, 93, 0.97);
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  font-size: 1rem;
  box-shadow: 0 -2px 16px rgba(31,125,202,0.12);
}
.cookie-banner a {
  color: #90caf9;
  text-decoration: underline;
}
.accept-btn {
  margin-left: 1.5rem;
  background: #1f7dca !important;
  color: #fff !important;
  font-weight: 600;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(31,125,202,0.10);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>