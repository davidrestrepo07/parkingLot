<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="cedula"
      :counter="10"
      :rules="cedulaRules"
      label="Cédula"
      required
    ></v-text-field>
    <v-text-field
      v-model="placa"
      :counter="6"
      :rules="placaRules"
      label="Placa del vehículo"
      required
    ></v-text-field>
    <v-text-field
      v-model="cilindraje"
      :counter="4"
      :rules="cilindrajeRules"
      label="Cilindraje en cc"
      required
    ></v-text-field>

    <v-select
      v-model="tiempo"
      :items="tiempos"
      :rules="[v => !!v || 'Item is required']"
      label="Tiempos"
      required
    ></v-select>

    <v-file-input
      label="Foto de la moto"
      filled
      prepend-icon="mdi-camera"
      accept="image/png, image/jpeg, image/bmp"
    ></v-file-input>

    <v-btn color="black" class="mr-4" @click="editVehicle()" dark
      >Registrar moto</v-btn
    >

    <v-btn color="black" class="mr-4" @click="clear()" dark>Limpiar</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormMotorcycle",
  data() {
    return {
      tiempos: ["2T", "4T"],
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
        v => /^([A-Z]{3}\d{2}[A-Z]{1})$/.test(v) || "Placa no válida"
      ],
      cilindraje: "",
      cilindrajeRules: [
        v => !!v || "Este campo es requerido",
        v =>
          (v && v.length <= 4) || "El cilindraje debe de ser máximo 4 dígitos",
        v => /^[0-9]+$/.test(v) || "El cilindraje debe de contener solo números"
      ],
      isVehicle: "0",
      tiempo: ""
    };
  },
  methods: {
    editVehicle() {
      if (this.$refs.form.validate()) {
        alert(
          "Se ha registrado correctamente el vehículo a la cédula " +
            this.cedula
        );
        const state = {
          cedula: this.cedula,
          placa: this.placa,
          cilindraje: this.cilindraje,
          tiempos: this.tiempo,
          isVehicle: this.isVehicle
        };
        this.$store.commit("editVehicles", state);
        const cedula = this.cedula;
        this.$router.push({ name: "Cedula", params: { cedula } });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
