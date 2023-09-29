<template>
  <div>
    <header-section @logout="logClientOut" :client="client"></header-section>
    <router-view
      @clientloggedin="authenticateClient"
      :client="client"
    ></router-view>
    <footer-section />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  data() {
    return {
      client: false,
    };
  },
 mounted() {
  this.authenticateClient()
 },
  name: "App",
  components: {
    HeaderSection,
    FooterSection,
  },
  methods: {
    authenticateClient() {
    this.client = Cookies.get("client")
    if(this.client) {
      this.client = JSON.parse(this.client)
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
