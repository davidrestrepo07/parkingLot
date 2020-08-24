<template>
  <v-form ref="form" lazy-validation @submit.prevent="editVehicle">
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
      v-model="modelo"
      :counter="4"
      :rules="modeloRules"
      label="Modelo"
      required
    ></v-text-field>

    <v-text-field
      v-model="puertas"
      :rules="puertasRules"
      label="Número de puertas"
      required
    ></v-text-field>
    <v-file-input
      label="Foto del carro"
      filled
      v-model="imagen"
      prepend-icon="mdi-camera"
      accept="image/png, image/jpeg, image/bmp"
      :rules="[v => !!v || 'Este campo es requerido']"
    ></v-file-input>

    <v-btn color="black" class="mr-4" @click="editVehicle()" dark
      >Registrar Carro</v-btn
    >

    <v-btn color="black" class="mr-4" @click="clear()" dark>Limpiar</v-btn>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FormCar",
  data() {
    return {
      cedula: "",
      imagen: null,
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
      modelo: "",
      modeloRules: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length == 4) || "El modelo tiene 4 dígitos",
        v => /^[0-9]+$/.test(v) || "El modelo debe de contener solo números"
      ],
      puertas: "",
      puertasRules: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length == 1) || "Debe contener 1 dígito",
        v => /^[0-9]+$/.test(v) || "Debe de contener solo números"
      ],

      isVehicle: "1"
    };
  },
  computed: {
    ...mapState({
      employees: state => state.employees
    })
  },
  methods: {
    editVehicle() {
      const employee = this.employees.employees.find(
        employee => employee.cedula == this.cedula
      );
      if (this.$refs.form.validate()) {
        if (employee != undefined) {
          //si se guardara la imagen aca guardariamos el nombre de la imagen para luego buscarla en la base de datos
          // const imagenName=this.imagen.name
          alert(
            "Se ha registrado correctamente el vehículo a la cédula " +
              this.cedula
          );
          const state = {
            cedula: this.cedula,
            placa: this.placa,
            modelo: this.modelo,
            puertas: this.puertas,
            isVehicle: this.isVehicle
            //si hubiera base de datos
            //imagen:imagenName
          };
          this.$store.commit("EDIT_VEHICLES", state);
          const cedula = this.cedula;
          this.$router.push({ name: "Cedula", params: { cedula } });
        } else {
          alert(
            "Esta cédula no está registrada en la base de datos de empleados"
          );
        }
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
