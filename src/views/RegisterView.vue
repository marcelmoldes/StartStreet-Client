<template>
  <div class="text-center mt-7 text-black">
    <h1 v-if="registerNow" class="text-7xl">{{ register }}</h1>
    <h3 class="text-3xl mt-10">
      Offers, giveaways and benefits as a member of Star Street
    </h3>
    <button @click="registerNow = !registerNow">HOla</button>
  </div>
  <register-card-component v-if="!client"> </register-card-component>
</template>

<script>
import RegisterCardComponent from "@/components/RegisterCardComponent.vue";
export default {
  props: ["client"],
  components: { RegisterCardComponent },
  data() {
    return {
      register: "Register on our page",
      registerNow: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>