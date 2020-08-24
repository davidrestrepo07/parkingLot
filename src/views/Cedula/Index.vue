<template>
  <v-container>
    <v-row>
      <v-col offset="4">
        <v-btn dark class="black my-4" @click="registerVehicle"
          >Registrar Nuevo Vehículo</v-btn
        >
      </v-col>
    </v-row>
    <h1 class="mb-2">
      Vehículos de {{ employee.nombre }} {{ employee.apellido }} cc.{{
        employee.cedula
      }}
    </h1>
    <h2>Carros</h2>
    <v-row dense>
      <v-col v-for="(carro, i) in employee.carros" :key="i" cols="12">
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
            <v-btn dark color="black" @click="showVehicle(carro.placa)"
              >Ingresar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <h2>Motos</h2>
    <v-row dense>
      <v-col v-for="(moto, i) in employee.motos" :key="i" cols="12">
        <v-card color="#F4F4F4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"
                >Placa: {{ moto.placa }}</v-card-title
              >

              <v-card-text>
                Cilindraje: {{ moto.cilindraje }}cc
                <br />
                Tiempos: {{ moto.tiempos }}
              </v-card-text>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="moto.imagen"></v-img>
            </v-avatar>
          </div>
          <v-card-actions>
            <v-btn dark color="black" @click="showVehicle(moto.placa)"
              >Ingresar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Cedula",
  data: () => ({}),
  computed: {
    //se obtiene los empleados del store
    ...mapState({
      employees: state => state.employees
    }),
    employee() {
      //obtener la cedula del empleado y su info
      const { cedula } = this.$route.params;
      const employee = this.employees.employees.find(
        employee => employee.cedula == cedula
      );
      return employee;
    }
  },
  methods: {
    registerVehicle() {
      //ir a la ruta para registrar al vehiculo
      this.$router.push({ name: "Register" });
    },
    showVehicle(placa) {
      //mostrar el vehiculo para su ingreso al parqueadero
      this.$router.push({
        name: "Vehicle",
        params: { cedula: this.employee.cedula, placa: placa }
      });
    }
  }
};
</script>
