<template>
  <div id="street">
    <div class="grid grid-cols-4 mx-auto opacity">
      <categories-card-component
        :category="category"
        v-for="category in categories"
        :key="category"
      />
    </div>
  </div>
  <decoration-card-component></decoration-card-component>
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