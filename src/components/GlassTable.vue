<template>  
  <div class="glass-table-container">
    <v-container class="introduccion"> 
      <h1>Descubre Nuestras Opciones de Vidrio</h1>
      <p>En nuestra vidriería, ofrecemos una amplia variedad de vidrios para satisfacer tus necesidades y gustos. Nuestra pasión es proporcionar soluciones de vidrio personalizadas y de alta calidad. Explora nuestras opciones y descubre la que mejor se adapta a tus necesidades, ya sea para tu hogar o negocio. Nuestro equipo de expertos está listo para ayudarte a encontrar el vidrio perfecto para tu proyecto.</p>  
    </v-container> 
    <table class="glass-table">  
      <thead>  
        <tr>  
          <th>Tipo de vidrio</th>  
          <th>Grosor (mm)</th>  
          <th>Características</th>  
          <th>Uso</th>  
        </tr>  
      </thead>  
      <tbody>  
        <tr v-for="item in items" :key="item.type">  
          <td>{{ item.type }}</td>  
          <td>{{ item.thickness }}</td>  
          <td>{{ item.characteristics }}</td>  
          <td>{{ item.use }}</td>  
        </tr>  
      </tbody>  
    </table>  
  </div>  
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
          type: 'Vidrio Con Filo',  
          thickness: '4-19 mm',  
          characteristics: 'Acabado con filo, resistencia al calor',  
          use: 'Puertas, ventanas, balcones, decoración'  
        },  
        {  
          type: 'Vidrio Low-E',  
          thickness: '4-12 mm',  
          characteristics: 'Aislamiento térmico, reducción de la transferencia de calor',  
          use: 'Ventanas, puertas, balcones'  
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
    }  
  }  
}  
</script>  

<style scoped>  
.glass-table-container {  
  margin-top: 50px;  
  padding: 20px;  
  max-width: 1400px;  
  margin: 0 auto;  
  background-color: rgba(154, 211, 230, 0.692);  
  border: 5px solid #ddd;  
  border-radius: 10px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  
}  

.introduccion {  
  margin-bottom: 20px;  
} 

.glass-table {  
  width: 100%;  
  border-collapse: collapse;  
}  

.glass-table th, .glass-table td {  
  border: 1px solid #ddd;  
  padding: 10px;  
  text-align: left;  
}  

.glass-table th {  
  background-color: #f7f7f7;  
}  
</style>