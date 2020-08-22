<template>
  <v-container>
    <v-row>
      <v-col cols="8" md="4" offset-md="2">
        <v-img :src="vehicle.imagen"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-text v-if="vehicleIs == 1">
          Placa: {{ vehicle.placa }}
          <br />
          Modelo: {{ vehicle.modelo }}
          <br />
          Puertas: {{ vehicle.puertas }}
          <br />
        </v-text>
        <v-text v-if="vehicleIs == 2">
          Placa: {{ vehicle.placa }}
          <br />
          Cilindraje: {{ vehicle.modelo }}cc
          <br />
          Tiempos: {{ vehicle.puertas }}T
        </v-text>
        <br />
        <v-btn dark color="black">cobrar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-center">Total a cobrar: COP {{}}</h2>
      </v-col>
      <v-col offset="5">
        <v-btn dark color="black">Cobrado</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Charge",
  data() {
    return {
      vehicle: {
        placa: "ERT324",
        modelo: "2003",
        puertas: "5",
        imagen: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      vehicleIs: 1
    };
  },
  methods: {
    onSubmit() {
      alert("Registrado Pa");
    }
  }
};
</script>
