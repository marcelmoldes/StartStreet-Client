<template>
  <div>
    <div class="bg-gray-300 p-10 " >
<h1 class="text-white text-2xl text-center font-bold">Favorite Items</h1>
    </div>
    <category-card-component
      :item="favorite.item"
      v-for="favorite in favorites"
      :key="favorite"
      :client="client"
      
    >
    </category-card-component>
  </div>
</template>

<script>
import axios from "axios";
import CategoryCardComponent from "@/components/CategoryCardComponent.vue";
export default {
  props: ["client",],
  components: { CategoryCardComponent },
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