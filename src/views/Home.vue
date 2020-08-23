<template>
  <div class="container">
    <v-row><v-icon v-text="platform"></v-icon></v-row>
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
              <v-btn color="black" dark @click="In()">Ingreso</v-btn>
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
              src="https://www.aradock.es/wp-content/uploads/2019/05/sistema-control-acceso-barreras.jpg"
            />
            <v-card-text class="bg-black">
              <h1 class="display-1 text--primary">Salida de Vehículo</h1>
              <br />
              <div class="text--primary">
                Salida de un vehículo, para el cobro del parqueadero
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="black" dark @click="Out()">Salida</v-btn>
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
    In() {
      this.$router.push({ name: "InVehicle" });
    },
    Out() {
      this.$router.push({ name: "OutVehicle" });
    }
  }
};
</script>
