<template>
  <div>
    <h1>Favorites</h1>
    <items-card-component
      :item="favorite.item"
      v-for="favorite in favorites"
      :key="favorite"
      :client="client"
    >
    </items-card-component>
  </div>
</template>

<script>
import axios from "axios";
import ItemsCardComponent from "@/components/ItemsCardComponent.vue";
export default {
  props: ["client"],
  components: { ItemsCardComponent },
  data() {
    return {
      favorites: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:8081/favorites", {
      headers: {
        Authorization: this.client ? "Bearer " + this.client.token : null,
      },
    });
    this.favorites = response.data.favorites;
  },
};
</script>

<style>
</style>