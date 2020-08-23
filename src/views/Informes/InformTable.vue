<template>
  <v-container>
    <v-card class="mt-2">
      <h2 class="text-center">Informe mensual</h2>
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
        :items="report"
        :search="search"
        items-per-page="20"
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
  name: "InformTable",
  props: {
    year: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    }
  },
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

        { text: "Perfil", value: "perfil" },
        { text: "Uso de días del parqueadero", value: "use" }
      ]
    };
  },
  computed: {
    ...mapState({
      parking: state => state.vehiclesInParkingLot
    }),
    inform() {
      const vehicles = this.parking.parking.filter(vehicle => {
        if (
          vehicle.date.includes(this.year) &&
          vehicle.date.includes(this.month)
        ) {
          return true;
        }
      });
      return vehicles;
    },
    report() {
      const report = [];

      this.inform.forEach(function(obj) {
        let index = report.findIndex(first => first.cedula == obj.cedula);
        if (index < 0) {
          let added = {
            cedula: obj.cedula,
            perfil: obj.perfil,
            use: 1
          };
          report.push(added);
        } else {
          report[index].use++;
        }
      });
      return report;
    }
  }
};
</script>
