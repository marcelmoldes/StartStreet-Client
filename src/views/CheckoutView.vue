<template>
  <checkout-card-component @orderSuccessful="orderSuccessful = true" v-if="!orderSuccessful"></checkout-card-component>
<order-succesful-view v-else @orderSuccessful="orderSuccessful($event)"></order-succesful-view>










</template>

<script>
import OrderSuccesfulView from "./OrderSuccesfulView.vue";
import CheckoutCardComponent from "@/components/CheckoutCardComponent.vue";
export default {
  data() {
    return {
    orderSuccessful: false,
    }
  },
  components: {
    CheckoutCardComponent,
    OrderSuccesfulView
  },
};
</script>

<style>
</style>