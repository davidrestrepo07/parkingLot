<template>
  <v-container>
    <v-card class="mt-2">
      <h2 class="text-center">Vehículos parqueados hoy</h2>
      <v-card-title>
        <br />
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="table"
        :search="search"
        :items-per-page="20"
        :page.sync="page"
        hide-default-footer
        @page-count="pageCount = $event"
      ></v-data-table>
      <v-pagination
        v-model="page"
        :length="pageCount"
        dark
        color="black"
      ></v-pagination>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VehiclesInParkingLot",
  data() {
    return {
      pageCount: 0,
      page: 1,
      search: "",
      headers: [
        {
          text: "Cedula",
          align: "start",
          sortable: true,
          value: "cedula"
        },
        { text: "Placa", value: "placa" },
        { text: "Perfil", value: "perfil" },
        { text: "Pagó", value: "payment" }
      ]
    };
  },
  computed: {
    ...mapState({
      //obtener todos los datos de los vehiculos parqueados
      parking: state => state.vehiclesInParkingLot
    }),
    table() {
      //ver todos los vehiculos que se han parqueado el dia de hoy
      var tzoffset = new Date().getTimezoneOffset() * 60000;
      const today = new Date(Date.now() - tzoffset).toISOString().substr(0, 10);
      const vehicles = this.parking.parking.filter(vehicle => {
        if (vehicle.date == today) {
          return true;
        }
      });
      return vehicles;
    }
  }
};
</script>
