<template>
  <v-container>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Este campo es requerido']"
      label="Vehículo"
      required
    ></v-select>
    <FormCar v-if="select == 'Carro'" />
    <FormMotorcycle v-if="select == 'Moto'" />
  </v-container>
</template>

<script>
import FormCar from "./FormCar.vue";
import FormMotorcycle from "./FormMotorcycle.vue";
export default {
  name: "RegisterVehicle",
  components: { FormCar, FormMotorcycle },
  data() {
    return {
      select: "",
      items: ["Carro", "Moto"]
    };
  }
};
</script>
