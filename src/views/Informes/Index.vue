<template>
  <v-container>
    <h1 class="text-center">Informes mensuales</h1>
    <br />
    <h3>Seleccione mes y año del informe mensual</h3>
    <form>
      <v-row>
        <v-col>
          <v-select
            v-model="select"
            :items="month"
            :error-messages="selectErrors"
            label="Mes"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="select"
            :items="year"
            :error-messages="selectErrors"
            label="Año"
            required
            @change="$v.select.$touch()"
            @blur="$v.select.$touch()"
          ></v-select>
        </v-col>
      </v-row>

      <v-btn class="mr-4" @click="submit" dark color="black"
        >Recibir informe</v-btn
      >
    </form>
  </v-container>
</template>
<script>
export default {
  name: "Informes",
  data() {
    return {
      month: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      year: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020
      ]
    };
  },
  methods: {}
};
</script>
