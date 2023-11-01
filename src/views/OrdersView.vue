<template>
  <div id="street">
    <div class="grid grid-cols-4 gap-x-3">
      <order-card-component
        class="m-9 text-center md:w-80 lg:w-80 grid-cols-4 w-50 md:py-20 leading-150 py-20"
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
    let response = await axios.get("http://localhost:8081/orders", {
      headers: {
        Authorization: this.client ? "Bearer " + this.client.token : null,
      },
    });
    this.orders = response.data.orders;
  },
};
</script>
  
  <style scoped>
#street {
  background-image: url(../assets/images/whitecover.jpg);
  background-repeat: no-repeat;
  width: 150%;

}
</style>

