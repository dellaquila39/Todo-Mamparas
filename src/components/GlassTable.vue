<!-- <template>  
  <v-row>  
    <v-col v-for="item in items" :key="item.type" cols="12" md="4">  
      <v-card class="glass-card">  
        <v-card-title class="text-center">{{ item.type }}</v-card-title>  
        <v-card-subtitle class="text-center">{{ item.thickness }}</v-card-subtitle>  
        <v-card-text>  
          <h4>Características:</h4>  
          <p>{{ item.characteristics }}</p>  
          <h4>Uso:</h4>  
          <p>{{ item.use }}</p>  
        </v-card-text>  
      </v-card>  
    </v-col>  
  </v-row>  
</template>  

<script>  
export default {  
  name: 'GlassTable',  
  data() {  
    return {  
      items: [  
        {  
          type: 'Vidrio Templado',  
          thickness: '4-19 mm',  
          characteristics: 'Resistencia al calor y al impacto, no se astilla',  
          use: 'Puertas, ventanas, balcones, piscinas'  
        },  
        {  
          type: 'Vidrio Laminado',  
          thickness: '3-12 mm',  
          characteristics: 'Resistencia al impacto, no se astilla, aislamiento acústico',  
          use: 'Puertas, ventanas, balcones, automóviles'  
        },  
        {  
          type: 'Vidrio Espejo',  
          thickness: '4-6 mm',  
          characteristics: 'Acabado reflectante, resistencia al calor',  
          use: 'Espejos, decoración, puertas de armarios'  
        },  
        {  
          type: 'Vidrio Corte Pulido',  
          thickness: '4-19 mm',  
          characteristics: 'Acabado pulido, resistencia al calor',  
          use: 'Puertas, ventanas, balcones, decoración'  
        },  
        {  
          type: 'Vidrio Corte Matado',  
          thickness: '4-19 mm',  
          characteristics: 'Acabado matado, resistencia al calor',  
          use: 'Puertas, ventanas, balcones, decoración'  
        },  
        {  
          type: 'Vidrio Blindado',  
          thickness: '10-60 mm',  
          characteristics: 'Resistencia al impacto, seguridad',  
          use: 'Puertas, ventanas, balcones, edificios de seguridad'  
        },  
        {  
          type: 'Vidrio Armado',  
          thickness: '6-12 mm',  
          characteristics: 'Resistencia al impacto, seguridad',  
          use: 'Puertas, ventanas, balcones, edificios de seguridad'  
        },  
        {  
          type: 'Vidrio DVH (Doble Vidrio Hermético)',  
          thickness: '4-12 mm',  
          characteristics: 'Aislamiento térmico, Aislamiento acústico, Control solar',  
          use: 'Puertas, ventanas, balcones, edificios de seguridad'  
        },  
        {  
          type: 'Vidrio Float',  
          thickness: '4-12 mm',  
          characteristics: 'Vidrio plano, suave y transparente, ideal para aplicaciones arquitectónicas',  
          use: 'Ventanas, puertas, balcones, fachadas de edificios'  
        }  
      ]  
    };  
  }  
};  
</script>  

<style scoped>  
.glass-card {  
  color: #000000;  
  margin: 15px; /* Espacio entre tarjetas */  
  transition: transform 0.4s;  
  border-radius: 15px;  
  background-color: rgba(240, 233, 233, 0.438);  
}  

.glass-card:hover {  
  transform: translateY(-10px); /* Efecto de elevación al pasar el mouse */  
}  

.glass-card h4 {  
  color: #000000;  
  margin-top: 10px;  
  margin-bottom: 5px;  
  font-weight: bold; /* Negrita para subtítulos */  
}  
</style> -->