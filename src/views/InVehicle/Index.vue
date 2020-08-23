<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="6">
        <template>
          <v-card class="mx-auto" max-width="344">
            <v-img
              class="white--text align-end"
              height="300px"
              src="https://scontent.fbaq1-1.fna.fbcdn.net/v/t1.0-9/81839997_10158824849429179_8942807722059890688_o.png?_nc_cat=110&_nc_sid=174925&_nc_eui2=AeGXfjBiMsKl_iNk54TQbn_m7NOPrU1d72_s04-tTV3vb0ZWyFof6cMQ72ru-UQSugJq3-APSODzetPbRwk8nR7E&_nc_ohc=hli0XUxB-PEAX_SUUM8&_nc_ht=scontent.fbaq1-1.fna&oh=8924c012418b97540337c76b0af75abc&oe=5F672F79"
            />
            <v-card-text class="bg-black">
              <h1 class="display-1 text--primary">Empleado</h1>
              <br />
              <div class="text--primary">
                Ingreso de vehículo empleado de Mattelsa
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="black" dark @click="employee()">Ingreso</v-btn>
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
              src="https://www.liberaldictionary.com/wp-content/uploads/2018/11/visitor.png"
            />
            <v-card-text class="bg-black">
              <h1 class="display-1 text--primary">Visitante</h1>
              <br />
              <div class="text--primary">
                Ingreso de vehículo de visitante a Mattelsa
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="black" dark @click="visitor()">Ingreso</v-btn>
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
  name: "InVehicle",
  components: {},
  methods: {
    employee() {
      this.$router.push({ name: "Worker" });
    },
    visitor() {
      this.$router.push({ name: "Visitor" });
    }
  }
};
</script>
