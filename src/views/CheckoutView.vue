<template>
  <checkout-card-component @orderSuccessful="order = $event" v-if="!order"></checkout-card-component>
<order-successful-view :order="order" v-else></order-successful-view>










</template>

<script>
import OrderSuccessfulView from "../components/OrderSuccessful.vue";
import CheckoutCardComponent from "@/components/CheckoutCardComponent.vue";
export default {

  data() {
    return {
    order: false
    }
  },
  components: {
    CheckoutCardComponent,
    OrderSuccessfulView
  },
};
</script>

<style>
</style>