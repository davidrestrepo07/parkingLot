<template>
  <div class="container font-gotham">
    <h1>Ingreso de Vehículo empleado Mattelsa</h1>
    <br />
    <form @submit.prevent>
      <v-select
        v-model="select"
        :items="items"
        :rules="selectErrors"
        label="Forma de registro"
        required
      ></v-select>
      <v-text-field
        v-model="valor"
        :rules="nameErrors"
        label="Valor"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="submit">Ingreso</v-btn>
      <v-btn @click="clear">Limpiar</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "Worker",
  data() {
    return {
      items: ["Cédula", "Placa"],
      valor: "",
      select: ""
    };
  },
  methods: {
    clear() {
      this.valor = "";
      this.select = "";
    }
  }
};
</script>
