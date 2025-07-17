<template>
  <v-container class="payment-container">
    <v-row class="justify-center">
      <v-col cols="12" class="text-center mb-4">
        <h2 class="payment-title">Medios de Pago</h2>
        <p class="payment-subtitle">Aceptamos múltiples formas de pago para tu comodidad</p>
        <div class="title-divider"></div>
      </v-col>

      <v-col 
        v-for="(method, index) in paymentMethods"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="d-flex justify-center"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 6 : 2"
            class="payment-card"
            :class="{ 'glass-effect': isGlassEffect }"
          >
            <v-icon
              size="64"
              class="payment-icon"
              :color="method.color"
            >
              {{ method.icon }}
            </v-icon>
            <v-card-title class="justify-center payment-method-title">
              {{ method.title }}
            </v-card-title>
            <v-card-text class="text-center payment-description">
              <span>{{ method.description }}</span>
              <div v-if="method.extra" class="mt-2">
                <v-img
                  v-for="(img, i) in method.extra"
                  :key="i"
                  :src="img"
                  max-width="80"
                  class="d-inline-block mx-1"
                  contain
                />
              </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="justify-center mt-6">
      <v-col cols="12" md="8" class="text-center payment-disclaimer">
        <div class="disclaimer-container">
          <v-icon small color="primary" class="mb-2">mdi-information-outline</v-icon>
          <p class="disclaimer-text">
            Aceptamos todas las principales tarjetas de débito y crédito 
            <span class="brands">(Visa, Mastercard, American Express)</span>. 
            Las transacciones con tarjeta de crédito incluyen un 
            <span class="highlight">recargo del 10%</span> 
            según disposiciones de entidades financieras.
          </p>
          <div class="decorative-line"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default { 
  name: 'PayCard',
  data: () => ({
    paymentMethods: [
      {
        title: 'Efectivo',
        icon: 'mdi-cash-fast',
        color: '#4CAF50',
        description: 'Descuento especial por pago en efectivo',
        extra: [require('@/assets/pagos/efectivo.png')]
      },
      {
        title: 'Transferencia',
        icon: 'mdi-bank-outline',
        color: '#2196F3',
        description: 'Cuenta corriente disponible',
        extra: [require('@/assets/pagos/transferencia1.jpg')]

      },
      {
        title: 'Tarjeta de Débito',
        icon: 'mdi-card-account-details-outline',
        color: '#9C27B0',
        description: 'Aceptamos todas las tarjetas',
        extra: [require('@/assets/pagos/visa-debito.png')]
      },
      {
        title: 'Tarjeta de Crédito',
        icon: 'mdi-contactless-payment',
        color: '#FF9800',
        description: 'Aceptamos todas las tarjetas de credito',
        extra: [require('@/assets/pagos/mastercard.png')
        ]
      }
    ],
    isGlassEffect: true
  })
}
</script>

<style scoped>
n
.payment-container {
  background: linear-gradient(45deg, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.9) 100%);
}

.payment-title {
  font-family: 'Poppins', sans-serif !important;
  color: #2A3B5D !important;
  font-weight: 600 !important;
  font-size: 2.5rem !important;
  letter-spacing: -0.5px;
}

.payment-subtitle {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400 !important;
  font-size: 1.1rem !important;
  color: #2d3436;
  margin-top: 0.5rem;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: #2196F3;
  margin: 1.5rem auto;
  border-radius: 2px;
}

.payment-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 280px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border-radius: 15px !important;
  backdrop-filter: blur(5px);
  margin: 0.5rem;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.7) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
}

.payment-method-title {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 500 !important;
  font-size: 1.25rem !important;
  padding: 0.5rem 0 !important;
}

.payment-description {
  font-family: 'Poppins', sans-serif !important;
  font-size: 0.9rem !important;
  line-height: 1.4 !important;
}

.payment-icon {
  transition: transform 0.3s ease;
  margin: 1rem 0;
}

.payment-card:hover .payment-icon {
  transform: scale(1.1);
}

.payment-disclaimer {
  position: relative;
  padding: 1.5rem 0;
}

.disclaimer-container {
  position: relative;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.disclaimer-text {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #444;
  margin: 0 auto;
  max-width: 600px;
}

.decorative-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, #2196F3 50%, transparent 100%);
  width: 40%;
  bottom: -10px;
  left: 30%;
}

.brands {
  font-weight: 500;
  color: #2196F3;
}

.highlight {
  font-weight: 600;
  color: #FF9800;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #FF9800 0%, rgba(255,152,0,0.3) 100%);
}

@media (max-width: 600px) {
  .disclaimer-text {
    font-size: 0.85rem;
    padding: 0 1rem;
  }
  
  .decorative-line {
    width: 60%;
    left: 20%;
  }
}

@media (max-width: 960px) {
  .payment-card {
    width: 260px; /* Mantenemos el mismo ancho */
    min-height: 300px; /* Altura consistente */
    padding: 1rem;
  }
  
  .payment-title {
    font-size: 2rem !important;
  }
}

@media (max-width: 600px) {
  .payment-card {
    width: 100%;
    max-width: 300px;
    min-height: 280px;
  }
}
</style>