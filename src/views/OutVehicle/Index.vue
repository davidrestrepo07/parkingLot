<template>
  <div class="container font-gotham">
    <h1>Salida de Vehículo</h1>
    <br />
    <v-form ref="form" lazy-validation @submit.prevent="onSubmit">
      <v-text-field
        v-model="placa"
        :rules="placaRules"
        label="Placa del vehículo"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="onSubmit" color="black" dark>Cobrar</v-btn>
      <v-btn @click="clear" color="black" dark>Limpiar</v-btn>
    </v-form>

    <Charge :vehicle="vehicle" v-if="show"></Charge>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Charge from "./Charge.vue";
export default {
  name: "OutVehicle",
  components: { Charge },
  data() {
    return {
      placaRules: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length <= 6) || "La placa tiene máximo 6 caracteres",
        v =>
          /^([A-Z]{3}\d{2}[A-Z]{1}|[A-Z]{3}\d{3})$/.test(v) || "Placa no válida"
      ],
      placa: "",
      vehicle: {},
      show: false
    };
  },
  computed: {
    ...mapState({
      parking: state => state.vehiclesInParkingLot
    })
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        //ver si el vehiculo ha sido ingresado con la fecha de hoy
        var tzoffset = new Date().getTimezoneOffset() * 60000;
        const today = new Date(Date.now() - tzoffset)
          .toISOString()
          .substr(0, 10);
        const carsToday = this.parking.parking.filter(x => x.date == today);
        const findVehicleToday = carsToday.find(x => x.placa == this.placa);

        if (findVehicleToday != undefined && findVehicleToday.payment == "NO") {
          this.vehicle = findVehicleToday;
          this.show = true;
        } else if (
          findVehicleToday != undefined &&
          findVehicleToday.payment == "SI"
        ) {
          alert("Este vehículo ingresó hoy pero pagó anteriormente");
          this.$router.push({ name: "Home" });
        } else {
          alert("Este vehículo no ha ingresado hoy");
        }
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
