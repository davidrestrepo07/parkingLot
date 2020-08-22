<template>
  <div class="container font-gotham">
    <h1>Salida de Vehículo</h1>
    <br />
    <form @submit.prevent>
      <v-text-field
        v-model="placa"
        :rules="nameErrors"
        label="Placa del vehiculo"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="submit" color="black" dark>Cobrar</v-btn>
      <v-btn @click="clear" color="black" dark>Limpiar</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "OutVehicle"
};
</script>
