<template>  
  <div class="mainscreen">  
    <div class="background-image">  
      <img src="@/assets/fondos/fondo1.jpg" alt="Imagen de fondo" />  
    </div>  
    <div class="content">  
      <h1 class="title">Todo en Mampara</h1>  
      <p class="phrase">¿Queres renovar tu baño? Diseñamos y colocamos las mejores mamparas!</p>  
      <button class="btn-whatsapp">WhatsApp</button>  
    </div>  
  </div>  
</template>  

<script>  
export default {  
  name: 'Mainscreen',  
};  
</script>  

<style scoped>  
.mainscreen {  
  position: relative;  
  height: 100vh;  
  width: 100vw;  
}  

.background-image {  
  position: absolute;  
  top: 0;  
  left: 0;  
  width: 100%;  
  height: 100%;  
}  

.background-image img {  
  width: 100%;  
  height: 100%;  
  object-fit: cover;  
}  

.content {  
  position: absolute;  
  top: 50%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  text-align: center;  
}  

.title {  
  font-size: 48px;  
  font-weight: bold;  
  color: #fff;  
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);  
}  

.phrase {  
  font-size: 24px;  
  color: #fff;  
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);  
  margin-bottom: 20px;  
}  

.btn-whatsapp {  
  background-color: #25D366;  
  color: #fff;  
  border: none;  
  padding: 10px 20px;  
  font-size: 18px;  
  cursor: pointer;  
  border-radius: 5px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  
}  

.btn-whatsapp:hover {  
  background-color: #1DA85F;  
}  
</style>