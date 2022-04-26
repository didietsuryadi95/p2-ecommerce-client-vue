<template>
  <v-app-bar
    dense
    elevation="4"
    flat
    outlined
    rounded
    shaped
    >
    
      <v-toolbar-title>BrandedThings.id</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RwvHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>