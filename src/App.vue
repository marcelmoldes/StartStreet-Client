<template>
  <header-section
    @logout="logClientOut"
    @viewCart="shoppingCartOpen = true"
    :client="client"
    :categories="categories"
    
  ></header-section>
  <div>
    <router-view
      @clientloggedin="authenticateClient"
      @viewCart="shoppingCartOpen = true"
      :categories="categories"
      :client="client"
    ></router-view>
    <footer-section />
    <shopping-cart
      :client="client"
      :open="shoppingCartOpen"
      @close="shoppingCartOpen = false"
    />
  </div>
</template>

<script>
import axios from "axios";
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
      categories: [],
      client: false,
      shoppingCartOpen: false,
    };
  },
  async mounted() {
    this.authenticateClient();
    await this.getCategories();
  },

  methods: {
    async getCategories() {
      let response = await axios.get("http://localhost:8081/categories");
      this.categories = response.data.categories;
    },
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
