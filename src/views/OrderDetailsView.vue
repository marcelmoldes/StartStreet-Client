<template>
  <order-details-component
    :client="client"
    :item="item"
    :order="order"

  ></order-details-component>
</template>

<script>
import OrderDetailsComponent from "@/components/OrderDetailsComponent.vue";
import axios from "axios";
export default {
props:['client','item','order'],
  components: {
    OrderDetailsComponent,
  },
  data() {
    return {
      orders: [],
      
    };
  },

  async loadData() {
    let response = await axios.get(
      "http://localhost:8081/orders/" + this.$route.params.order.id,
      {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      }
    );
    this.orders = response.data.order;
  },
};
</script>

<style>
</style>