<template>
  <div class="text-center">
    <h2>Cargando</h2>
    <v-progress-circular
      :size="70"
      :width="7"
      color="black"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>
