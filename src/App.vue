<template>
  <div>
    <header-section @logout="logClientOut" :client="client"></header-section>
    <router-view
      @clientloggedin="authenticateClient"
      @viewCart="shoppingCartOpen = true"
      :client="client"
    ></router-view>
    <footer-section />
    <shopping-cart :client="client" v-if="client" :open="shoppingCartOpen" @close="shoppingCartOpen = false" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
export default {
  name: "App",
  components: {
    HeaderSection,
    FooterSection,
    ShoppingCart,
  },
  data() {
    return {
      client: false,
      shoppingCartOpen: false,
    };
  },
  mounted() {
    this.authenticateClient();
  },

  methods: {
    authenticateClient() {
      this.client = Cookies.get("client");
      if (this.client) {
        this.client = JSON.parse(this.client);
      }
    },
    logClientOut() {
      Cookies.remove("client");
      this.client = false;
    },
  },
};
</script>

<style>
</style>
