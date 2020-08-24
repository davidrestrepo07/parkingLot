<template>
  <div class="container font-gotham">
    <h1>Ingreso de Vehículo empleado Mattelsa</h1>
    <br />
    <v-form ref="form" lazy-validation @submit.prevent="onSubmit">
      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Este campo es requerido']"
        label="Forma de registro"
        required
      ></v-select>
      <v-text-field
        v-model="valor"
        :disabled="this.select == ''"
        :rules="this.select == 'Placa' ? valorRulesPlaca : valorRulesCedula"
        label="Valor"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="onSubmit()" dark color="black">Ingreso</v-btn>
      <v-btn @click="clear()" dark color="black">Limpiar</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Worker",
  data() {
    return {
      items: ["Cédula", "Placa"],
      valor: "",
      valorRulesCedula: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length <= 10) || "La cédula tiene máximo 10 digitos",
        v => /^[0-9]+$/.test(v) || "La cédula debe de contener solo números"
      ],
      valorRulesPlaca: [
        v => !!v || "Este campo es requerido",
        v => (v && v.length <= 6) || "La placa tiene máximo 6 caracteres",
        v =>
          /^([A-Z]{3}\d{2}[A-Z]{1}|[A-Z]{3}\d{3})$/.test(v) || "Placa no válida"
      ],
      select: ""
    };
  },
  computed: {
    ...mapState({
      employees: state => state.employees
    })
  },
  methods: {
    clear() {
      this.$refs.form.reset();
      this.select = "";
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        //buscar la cedula en el state de empleados
        if (this.select == "Cédula") {
          const worker = this.employees.employees.find(
            employee => employee.cedula == this.valor
          );

          if (worker == undefined) {
            alert(
              "Esta cédula no está registrada en la base de datos de empleados"
            );
          } else {
            this.$router.push({
              name: "Cedula",
              params: { cedula: this.valor }
            });
          }
        } else {
          //buscar la placa en el array de empleados
          const vehicle = this.employees.employees.find(
            vehicle =>
              vehicle.carros.find(vehi => vehi.placa == this.valor) !=
                undefined ||
              vehicle.motos.find(vehi => vehi.placa == this.valor) != undefined
          );
          if (vehicle == undefined) {
            alert(
              "Esta placa no está registrada en la base de datos de empleados, serás redirigido para registrar este vehículo"
            );
            this.$router.push({
              name: "Register"
            });
          } else {
            this.$router.push({
              name: "Vehicle",
              params: { cedula: vehicle.cedula, placa: this.valor }
            });
          }
        }
      }
    }
  }
};
</script>
