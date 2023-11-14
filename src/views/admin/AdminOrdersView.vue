<template>
  <div class="mt-10 bg-gray-200">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
    >
      <admin-menu-component
        :client="client"
        class="col-span-1"
      ></admin-menu-component>
      <admin-orders-grid-view :orders="orders"></admin-orders-grid-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminOrdersGridView from "../../components/AdminOrdersGridView.vue";

import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client"],
  components: { AdminMenuComponent, AdminOrdersGridView },
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      let response = await axios.get("http://localhost:8081/orders", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.orders = response.data.orders;
    },
  },
};
</script>