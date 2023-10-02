<template>
  <div>
    <div class="text-center mt-5">
      <h1 class="font-medium text-3xl">{{ category.title }}</h1>
      <h3 class="font-medium text-xl">{{ category.description }}</h3>
    </div>
    <div class="grid grid-cols-4 px-20 ml-10 mx-auto">
      <items-card-component :item="item" v-for="item in items" :key="item">
      </items-card-component>
    </div>
  </div>
</template>

<script>
import ItemsCardComponent from "@/components/ItemsCardComponent.vue";
import axios from "axios";
export default {
  components: {
    ItemsCardComponent,
  },
  data() {
    return {
      category: {},
      items: []
    };
  },
  async mounted() {
    let response = await axios.get(
      "http://localhost:8081/categories/" + this.$route.params.slug
    );
    this.items = response.data.items;
    this.category = response.data.category;
  },
};
</script>

<style>
</style>