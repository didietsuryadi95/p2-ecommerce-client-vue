<template>
  <div id="app">
    <RwvHeader />
    <v-main>
      <v-app>
        <router-view/>
      </v-app>
    </v-main>
    <NavBar />
  </div>
</template>

<script>
// import RwvHeader from "@/components/TheHeader";
import NavBar from "@/components/NavBar";
import RwvHeader from "@/components/TheHeader";
export default {
  name: "App",
  components: {
    RwvHeader,
    NavBar
  }
};
</script>

<style></style>