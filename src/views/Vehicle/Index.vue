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
          <br />
        </v-text>
      </v-col>
    </v-row>
    <br />
    <h1 class="text-center">Formulario de ingreso del vehículo</h1>
    <br />
    <form>
      <v-row>
        <v-col cols="12" offset-md="2" md="4">
          <h3 class="text-center">Día</h3>
          <v-date-picker
            v-model="picker"
            color="black lighten-1"
            locale="es-co"
            full-width
          ></v-date-picker>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-center">Hora</h3>
          <v-time-picker v-model="time" color="black lighten-1"></v-time-picker>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" offset-md="2" md="8">
          <v-text-field
            v-model="celda"
            :rules="nameRules"
            label="Celda"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" offset-md="2" md="8">
          <v-btn color="black" dark @click="onSubmit">Ingresar</v-btn>
        </v-col>
      </v-row>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "Vehicle",
  data() {
    return {
      celda: "",
      vehicle: {
        placa: "ERT324",
        modelo: "2003",
        puertas: "5",
        imagen: "https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      },
      vehicleIs: 1,
      picker: new Date().toISOString().substr(0, 10),
      time: null
    };
  },
  methods: {
    onSubmit() {
      alert("Registrado Pa");
    }
  }
};
</script>
