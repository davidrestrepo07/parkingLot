<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="cedula"
      :counter="10"
      :rules="cedulaRules"
      label="Cedula"
      required
    ></v-text-field>
    <v-text-field
      v-model="placa"
      :counter="6"
      :rules="placaRules"
      label="Placa del vehículo"
      required
    ></v-text-field>
    <v-row>
      <v-col cols="12" offset-md="2" md="4">
        <h3 class="text-center">Día</h3>
        <v-date-picker
          v-model="picker"
          color="black lighten-1"
          locale="es-co"
          full-width
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
      <v-col cols="12">
        <v-text-field
          v-model="celda"
          :rules="cedulaRules"
          label="Celda"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn color="black" class="mr-4" @click="onSubmit()" dark
      >Ingresar Visitante</v-btn
    >

    <v-btn color="black" class="mr-4" @click="clear()" dark>Limpiar</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormCar",
  data() {
    return {
      validationTime: false,
      cedula: "",
      cedulaRules: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length <= 10) || "La cédula tiene máximo 10 dígitos",
        v => /^[0-9]+$/.test(v) || "La cédula debe de contener solo números"
      ],
      placa: "",
      placaRules: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length <= 6) || "La placa tiene máximo 6 caracteres",
        v => /^([A-Z]{3}\d{3})$/.test(v) || "Placa no válida"
      ],
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
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        alert("Vehículo ingresado correctamente");
        const state = {
          cedula: this.cedula,
          date: this.picker,
          perfil: "visitante",
          vehiculo: "carro",
          placa: this.placa
        };
        this.$store.commit("ENTER_VEHICLE", state);
        this.$router.push({ name: "Home" });
      } else {
        this.validationTime = true;
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
