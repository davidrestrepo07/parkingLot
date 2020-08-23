<template>
  <v-container>
    <h1 class="text-center">Informes mensuales</h1>
    <br />
    <h3>Seleccione mes y año del informe mensual</h3>
    <form>
      <v-row>
        <v-col>
          <v-select
            v-model="selectMonth"
            :items="Object.keys(month)"
            :error-messages="selectErrors"
            label="Mes"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="selectYear"
            :items="year"
            :error-messages="selectErrors"
            label="Año"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
        </v-col>
      </v-row>
      <v-row v-if="selectMonth != '' && selectYear != ''">
        <InformTable
          :year="selectYear"
          :month="month[selectMonth]"
        ></InformTable>
      </v-row>
    </form>
  </v-container>
</template>
<script>
import InformTable from "./InformTable.vue";
export default {
  name: "Informes",
  components: { InformTable },
  data() {
    return {
      month: {
        Enero: "1",
        Febrero: "2",
        Marzo: "3",
        Abril: "4",
        Mayo: "5",
        Junio: "6",
        Julio: "7",
        Agosto: "8",
        Septiembre: "9",
        Octubre: "10",
        Noviembre: "11",
        Diciembre: "12"
      },
      year: [2015, 2016, 2017, 2018, 2019, "2020"],
      selectMonth: "",
      selectYear: ""
    };
  },
  methods: {}
};
</script>
