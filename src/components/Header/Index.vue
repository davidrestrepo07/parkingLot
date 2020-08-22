<template>
  <div>
    <v-app-bar color="#000000" dense dark height="100px">
      <router-link to="/">
        <img
          src="https://i.pinimg.com/originals/dc/6f/aa/dc6faa73a2a936eb4a1c77dbc140a4c1.png"
          alt
          height="100px"
        />
      </router-link>
      <v-toolbar-title>Parking Lot</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom></v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab :to="{ name: 'Home' }">Home</v-tab>
          <v-tab :to="{ name: 'Informes' }">Informes</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
