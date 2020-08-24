<template>
  <div class="container">
    <v-row class="justify-center my-5">
      <v-btn color="black" dark @click="parkingLot()"
        >Ver vehículos en el parqueadero</v-btn
      >
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <template>
          <v-card class="mx-auto" max-width="344">
            <v-img
              class="white--text align-end"
              height="300px"
              src="https://www.comparaonline.com.co/blog-statics/co/uploads/2016/08/parqueadero-publico-1.jpg"
            />
            <v-card-text class="bg-black">
              <h1 class="display-1 text--primary">Entrada de Vehículo</h1>
              <br />
              <div class="text--primary">
                Registro de vehículo para ingreso al parqueadero ya sea
                visitante o empleado
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="black" dark @click="inVehicle()">Ingreso</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>

      <v-col cols="12" md="6">
        <template>
          <v-card class="mx-auto" max-width="344">
            <v-img
              class="white--text align-end"
              height="300px"
              src="https://www.solucionesyautomatizaciones.com/wp-content/uploads/2018/06/ACCESO-AUTO.jpg"
            />
            <v-card-text class="bg-black">
              <h1 class="display-1 text--primary">Salida de Vehículo</h1>
              <br />
              <div class="text--primary">
                Salida de un vehículo, para el cobro del parqueadero
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="black" dark @click="outVehicle()">Salida</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  methods: {
    inVehicle() {
      this.$router.push({ name: "InVehicle" });
    },
    outVehicle() {
      this.$router.push({ name: "OutVehicle" });
    },
    parkingLot() {
      this.$router.push({ name: "VehiclesInParkingLot" });
    }
  }
};
</script>
