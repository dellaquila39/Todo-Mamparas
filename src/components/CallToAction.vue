<template>  
  <div class="cta-container">  
    <div class="cta-content">  
      <h2>¿Listo para obtener un presupuesto gratuito?</h2>  
      <p>No dudes en contactarnos para obtener un presupuesto personalizado y resolver todas tus dudas sobre nuestros productos y servicios de vidrio.</p>  
      <v-btn class="cta-button" @click="contactar">Contactar y obtener un presupuesto gratuito</v-btn>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  methods: {  
    contactar() {  
      // Aquí iría la lógica para contactar con nosotros (email, teléfono, formulario, etc.)  
    }  
  }  
}  
</script>  

<style scoped>  
.cta-container {  
  background-image: linear-gradient(to bottom, #4567b7, #1a1d23);  
  background-size: 100% 300px;  
  background-position: 0% 100%;  
  height: 300px;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
}  

.cta-content {  
  max-width: 800px;  
  margin: 0 auto;  
  text-align: center;  
  color: #fff;  
}  

.cta-button {  
  background-color: #03a9f4;  
  color: #020000;  
  padding: 10px 20px;  
  border: none;  
  border-radius: 5px;  
  cursor: pointer;  
}  

.cta-button:hover {  
  background-color: #0377b7;  
}  
</style>