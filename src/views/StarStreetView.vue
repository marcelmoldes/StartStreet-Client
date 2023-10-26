<template>
  <body
    class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900"
  >
    <div></div>

    <div class="grid grid-cols-4 mx-auto">
      <categories-card-component
        :category="category"
        v-for="category in categories"
        :key="category"
      />
    </div>
    <decoration-card-component></decoration-card-component>
  </body>
</template>

<script>
import axios from "axios";
import DecorationCardComponent from "@/components/DecorationCardComponent.vue";
import CategoriesCardComponent from "@/components/CategoriesCardComponent.vue";
export default {
  components: {
    CategoriesCardComponent,
    DecorationCardComponent,
  },
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:8081/categories");
    this.categories = response.data.categories;
  },
};
</script>

<style>
</style>
