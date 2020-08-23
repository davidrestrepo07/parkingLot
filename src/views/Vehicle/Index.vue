<template>
  <v-container>
    <h1 class="text-center">Vehículo</h1>
    <v-row>
      <v-col cols="8" md="4" offset-md="2">
        <v-img :src="vehicle.imagen"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <v-text v-if="'modelo' in vehicle">
          Placa: {{ vehicle.placa }}
          <br />
          Modelo: {{ vehicle.modelo }}
          <br />
          Puertas: {{ vehicle.puertas }}
          <br />
        </v-text>
        <v-text v-if="'cilindraje' in vehicle">
          Placa: {{ vehicle.placa }}
          <br />
          Cilindraje: {{ vehicle.cilindraje }}cc
          <br />
          Tiempos: {{ vehicle.tiempos }}
          <br />
        </v-text>
      </v-col>
    </v-row>
    <br />
    <h1 class="text-center">Formulario de ingreso del vehículo</h1>
    <br />
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" offset-md="2" md="4">
          <h3 class="text-center">Día</h3>
          <v-date-picker
            v-model="picker"
            color="black lighten-1"
            locale="es-co"
            full-width
            required
            :rules="[v => !!v || 'Este campo es requerido']"
          ></v-date-picker>
        </v-col>
        <v-col cols="12" md="4">
          <h3 class="text-center">Hora</h3>
          <v-time-picker v-model="time" color="black lighten-1">
            <span style="color:red" v-if="this.time == null && validationTime"
              >Este campo es requerido</span
            >
          </v-time-picker>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" offset-md="2" md="8">
          <v-text-field
            v-model="celda"
            :rules="celdaRules"
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
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Vehicle",
  data() {
    return {
      validationTime: false,
      celda: "",
      celdaRules: [
        v => !!v || "Este campo es requerido",
        v => /^[0-9]+$/.test(v) || "Este campo solo debe contener números",
        v => (v && v.length <= 3) || "Máximo 3 dígitos"
      ],
      picker: new Date().toISOString().substr(0, 10),
      time: null
    };
  },
  computed: {
    ...mapState({
      employees: state => state.employees
    }),
    vehicle() {
      const { cedula, placa } = this.$route.params;
      const employee = this.employees.employees.find(
        employee => employee.cedula == cedula
      );
      const vehicleIndex = employee.carros.findIndex(
        vehicle => vehicle.placa == placa
      );
      if (vehicleIndex < 0) {
        const index = employee.motos.findIndex(
          vehicle => vehicle.placa == placa
        );
        return employee.motos[index];
      }
      return employee.carros[vehicleIndex];
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate() && this.time != null) {
        alert("Registrado Pa");
        const { cedula } = this.$route.params;

        if ("modelo" in this.vehicle) {
          const state = {
            cedula: cedula,
            date: this.picker,
            perfil: "empleado",
            vehiculo: "carro",
            placa: this.vehicle.placa
          };
          this.$store.commit("ENTER_VEHICLE", state);
          this.$router.push({ name: "Home" });
        } else {
          const state = {
            cedula: cedula,
            date: this.picker,
            perfil: "empleado",
            vehiculo: "moto"
          };
          this.$store.commit("ENTER_VEHICLE", state);
          this.$router.push({ name: "Home" });
        }
      } else {
        this.validationTime = true;
      }
    }
  }
};
</script>
