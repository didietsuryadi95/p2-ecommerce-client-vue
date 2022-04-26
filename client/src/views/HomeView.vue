<template>
  <v-app>
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <v-row>
        <v-card class="mx-auto" max-width="400"
         v-for="item in products" :key="item.message">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.imageUrl"
          >
            <v-card-title>{{item.name}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> {{item.description }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ item.price }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text> Share </v-btn>

            <v-btn color="orange" text> Explore </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PRODUCTS } from "@/store/actions.type";
export default {
  name: "HomeView",
  data: () => ({
    items: [
      {
        src: "https://www.tinkerlust.com/_next/image?url=https%3A%2F%2Ftinkerlust.s3.ap-southeast-1.amazonaws.com%2Fcms%2Fhomepage%2F2-0422-W2-b-monochrome%2520zone-793.png&w=1920&q=100",
      },
      {
        src: "https://www.tinkerlust.com/_next/image?url=https%3A%2F%2Ftinkerlust.s3.ap-southeast-1.amazonaws.com%2Fcms%2Fhomepage%2F1-Concierge%2520banner%2520with%2520wording-801.png&w=1920&q=100",
      },
      {
        src: "https://www.tinkerlust.com/_next/image?url=https%3A%2F%2Ftinkerlust.s3.ap-southeast-1.amazonaws.com%2Fcms%2Fhomepage%2F4-0322-w1-b-in-TL%2520SPOrt-201.png&w=1920&q=100",
      },
      {
        src: "https://www.tinkerlust.com/_next/image?url=https%3A%2F%2Ftinkerlust.s3.ap-southeast-1.amazonaws.com%2Fcms%2Fhomepage%2F19-1221-W2-b-in-mens%2520preloved-361.png&w=1920&q=100",
      },
    ],
  }),
  components: {},
  mounted() {
    this.getProducst()
  },
  methods: {  
    getProducst() {
      this.$store.dispatch(FETCH_PRODUCTS);
    },
  },
  computed: {
    ...mapGetters(["products"])
  }
};
</script>

