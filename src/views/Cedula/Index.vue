<template>
  <v-container>
    <v-row>
      <v-col offset="4"
        ><v-btn dark class="black my-4">Registrar Nuevo Vehículo</v-btn></v-col
      >
    </v-row>

    <h1>Carros</h1>
    <v-row dense>
      <v-col v-for="(carro, i) in carros" :key="i" cols="12">
        <v-card color="#F4F4F4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"
                >Placa: {{ carro.placa }}</v-card-title
              >

              <v-card-text>
                Modelo: {{ carro.modelo }}
                <br />
                Puertas: {{ carro.puertas }}
              </v-card-text>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="carro.imagen"></v-img>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-btn dark color="black">Ingresar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <h1>Motos</h1>
    <v-row dense>
      <v-col v-for="(moto, i) in motos" :key="i" cols="12">
        <v-card color="#F4F4F4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"
                >Placa: {{ moto.placa }}</v-card-title
              >

              <v-card-text>
                Cilindraje: {{ moto.cilindraje }}cc
                <br />
                Tiempos: {{ moto.tiempos }}T
              </v-card-text>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="moto.imagen"></v-img>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-btn dark color="black">Ingresar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cedula",
  data: () => ({
    carros: [
      {
        imagen: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        placa: "FHA452",
        modelo: "Foster the People",
        puertas: "4"
      },
      {
        imagen: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        placa: "FHA452",
        modelo: "Foster the People",
        puertas: "4"
      }
    ],
    motos: [
      {
        cilindraje: "300",
        tiempos: "4",
        placa: "FTN456",
        imagen: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      }
    ]
  })
};
</script>
