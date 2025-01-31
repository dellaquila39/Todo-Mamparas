<template>  
  <v-container fluid class="carousel-container">  
    <v-row>  
      <v-col cols="12">  
        <div class="carousel-wrapper">  
          <div class="card" v-for="(baranda, index) in barandas" :key="index" :class="{ 'active': index === currentIndex }">  
            <v-img :src="baranda.imagen" max-width="250" max-height="300" class="mx-auto" contain />   
            <div class="card-content">  
              <h2 class="card-title">{{ baranda.titulo }}</h2>  
              <p class="card-text">{{ baranda.descripcion }}</p>  
            </div>  
          </div>  
        </div>  
        <div class="controls">  
          <v-btn icon @click="prevCard">  
            <v-icon>mdi-chevron-left</v-icon>  
          </v-btn>  
          <v-btn icon @click="nextCard">  
            <v-icon>mdi-chevron-right</v-icon>  
          </v-btn>  
        </div>  
      </v-col>  
    </v-row>  
  </v-container>  
</template>  

<script>  
export default {  
  name: 'BarandasCarousel',  
  props: {  
    barandas: {  
      type: Array,  
      required: true  
    }  
  },  
  data() {  
    return {  
      currentIndex: 0  
    }  
  },  
  methods: {  
    prevCard() {  
      this.currentIndex = (this.currentIndex - 1 + this.barandas.length) % this.barandas.length  
    },  
    nextCard() {  
      this.currentIndex = (this.currentIndex + 1) % this.barandas.length  
    }  
  }  
}  
</script>  

<style scoped>  
.carousel-container {  
  padding: 0;  
  margin: 0;  
}  

.carousel-wrapper {  
  display: flex;
  flex-wrap: wrap;  
  justify-content: center;  
  align-items: center;  
  padding: 20px;  
  overflow: hidden;  
  margin-bottom: 20px;
}  

.card {  
  position: relative;  
  display: inline-block;  
  margin: 10px;  
  width: 250px;  
  height: 365px;  
  border-radius: 10px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);  
  transition: all 0.5s ease-in-out;  
}  

.card.active {  
  transform: scale(1.1);  
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);  
}  

.card-content {  
  position: absolute;  
  bottom: 0;  
  left: 0;  
  right: 0;  
  padding: 10px;  
  background-color: rgba(0, 0, 0, 0.493);  
  border-bottom-left-radius: 10px;  
  border-bottom-right-radius: 10px;  
}  

.card-title {  
  font-size: 18px;  
  font-weight: bold;  
  margin-bottom: 10px;  
}  

.card-text {  
  font-size: 14px;  
  color: #ffffffc4;  
}  

.controls {  
  position: absolute;  
  top: 90%;  
  left: 0;  
  right: 0;  
  display: flex;  
  justify-content: space-between;  
  padding: 0 20px;  
}  

.controls button {  
  background-color: rgba(0, 0, 0, 0.356);  
  border: none;  
  padding: 10px;  
  cursor: pointer;  
}  

.controls button:hover {  
  background-color: rgba(221, 217, 217, 0.445);  
  border-radius: 50%;  
}  

@media (max-width: 600px) {  
  .card { 
    flex-basis: 100%; 
    width: 150px;  
    height: 340px;  
  }  
}  

@media (max-width: 400px) {  
  .card { 
    flex-basis: 100%; 
    width: 100px;  
    height: 340px;  
  }  
} 
</style>