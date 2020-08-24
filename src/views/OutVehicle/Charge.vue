<template>
  <v-container>
    <v-row>
      <v-col cols="8" md="4" offset-md="2">
        <v-img :src="vehicle.imagen"></v-img>
      </v-col>
      <v-col cols="12" md="12">
        <h1 class="text-center">
          Placa: {{ vehicle.placa }}
          <br />
          c.c {{ vehicle.cedula }}
        </h1>

        <br />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-if="vehicle.vehiculo == 'carro'">
        <h2 class="text-center">
          Total a cobrar: COP {{ this.carro | formatNumber }}
        </h2>
      </v-col>
      <v-col cols="12" v-if="vehicle.vehiculo == 'moto'">
        <h2 class="text-center">
          Total a cobrar: COP {{ this.moto | formatNumber }}
        </h2>
      </v-col>
      <v-col offset="5">
        <v-btn dark color="black" @click="onSubmit">Cobrado</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { formatNumber } from "@/filters/numeral";
export default {
  name: "Charge",
  filters: { formatNumber },
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      carro: 6000,
      moto: 2000
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("PAYMENT", { placa: this.vehicle.placa });
      alert("Se ha relizado el cobro");
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
