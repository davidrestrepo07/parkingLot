<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="placa"
      :counter="6"
      :rules="nameRules"
      label="Placa del vehículo"
      required
    ></v-text-field>
    <v-text-field
      v-model="cilindraje"
      :counter="6"
      :rules="nameRules"
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

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"
      >Validate</v-btn
    >

    <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

    <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "FormMotorcycle",
  data() {
    return {
      tiempos: ["2T", "4T"]
    };
  }
};
</script>
