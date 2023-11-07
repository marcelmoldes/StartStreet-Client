<template>
  <div id="street">
    <div class="flex flex-col gap-y-3 max-w-xl mx-auto py-5">
      <order-card-component
        v-for="order in orders"
        :key="order"
        :client="client"
        :order="order"
        :item="item"
      >
      </order-card-component>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderCardComponent from "@/components/OrderCardComponent.vue";
export default {
  props: ["client", "order", "item"],
  components: { OrderCardComponent },
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:8081/orders/history", {
      headers: {
        Authorization: this.client ? "Bearer " + this.client.token : null,
      },
    });
    this.orders = response.data.orders;
  },
};
</script>

