<template>
  <div>
    <div class="bg-gray-300 p-10">
      <h1 class="text-white text-2xl text-center font-bold">Favorite Items</h1>
    </div>
    <order-card-component
      class="m-9 text-center md:w-80 lg:w-80 grid-cols-4 w-50 md:py-20 leading-150 py-20"
      v-for="order in orders"
      :key="order"
      :client="client"
      :order="order"
    >
    </order-card-component>
  </div>
</template>
  
  <script>
import axios from "axios";
import OrderCardComponent from "@/components/OrderCardComponent.vue";
export default {
  props: ["client", "order"],
  components: { OrderCardComponent },
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:8081/orders", {
      headers: {
        Authorization: this.client ? "Bearer " + this.client.token : null,
      },
    });
    this.orders = response.data.orders;
  },
};
</script>
  
  <style>
</style>