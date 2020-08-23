<template>
  <v-container>
    <v-row>
      <v-col cols="8" md="4" offset-md="2">
        <v-img :src="vehicle.imagen"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="text-center">Placa: {{ vehicle.placa }}</h1>

        <br />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-if="vehicle.vehiculo == 'carro'">
        <h2 class="text-center">Total a cobrar: COP 6000</h2>
      </v-col>
      <v-col cols="12" v-if="vehicle.vehiculo == 'moto'">
        <h2 class="text-center">Total a cobrar: COP 2000</h2>
      </v-col>
      <v-col offset="5">
        <v-btn dark color="black" @click="onSubmit">Cobrado</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Charge",
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      alert("Se ha relizado el cobro");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
