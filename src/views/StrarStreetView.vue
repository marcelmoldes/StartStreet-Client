<template>
  <div class="grid grid-cols-4 mx-auto">
    <clothing-card-component
    :clothes="clothes"
    v-for="clothes in clothing"
    :key="clothes" /> 
  </div>
</template>

<script>
import axios from "axios";
import ClothingCardComponent from "@/components/ClothingCardComponent.vue";
export default {
  components: {
    ClothingCardComponent,
  },
  data() {
    return {
      clothing: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:8081/clothing") ;
    this.clothing = response.data.clothing;
  },
};
</script>

<style>
</style>
