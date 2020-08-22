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
      v-model="modelo"
      :counter="4"
      :rules="nameRules"
      label="Modelo"
      required
    ></v-text-field>

    <v-text-field
      v-model="puertas"
      :rules="emailRules"
      label="Número de puertas"
      required
    ></v-text-field>
    <v-file-input
      label="Foto del carro"
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
  name: "FormCar"
};
</script>
