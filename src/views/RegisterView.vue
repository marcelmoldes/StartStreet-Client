<template>
  <div class="text-center  font-extrabold  mt-16 text-black ">
    <h1 v-if="registerNow" class="text-5xl">{{ register }}</h1>


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
      register: "Register",
      registerNow: true,
    };
  },
  methods: {},
};    //<button @click="registerNow = !registerNow">HOla</button>
</script>

<style scoped>
</style>