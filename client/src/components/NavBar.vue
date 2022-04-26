<template>
  <v-container> 
    <v-bottom-navigation v-model="value" 
    fixed
    app>
      <v-btn value="home" to="/">
        <span>Home</span>

        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="favorites" to="/favourite">
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn value="popular" to="/popular">
          <span>Popular</span>
          <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({ value: 'home' }),
};
</script>