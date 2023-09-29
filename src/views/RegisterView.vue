<template>
  <div class="text-center mt-7 text-black">
    <h1 class="text-7xl">Register on our page</h1>
    <h3 class="text-3xl mt-10">
      Offers, giveaways and benefits as a member of Star Street
    </h3>
  </div>
  <register-card-component v-if="!client"> </register-card-component>
</template>

<script>
import RegisterCardComponent from "@/components/RegisterCardComponent.vue";
export default {
  props: ["client"],
  components: { RegisterCardComponent },
};
</script>

<style>
</style>