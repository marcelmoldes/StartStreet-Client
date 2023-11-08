<template>
  <div class="mt-10 bg-gray-200">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-4"
    >
      <admin-menu-component
        :client="client"
        class="col-span-1"
      ></admin-menu-component>

      <div class="py-4 col-span-3 mr-12">
        <div class="bg-white mt-4 p-4 rounded-sm">
          <admin-order-details-component
            :order="order"
            @updateOrder="updateOrder($event)"
            @save="save"
          ></admin-order-details-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminOrderDetailsComponent from "@/components/AdminOrderDetailsComponent.vue";
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client"],
  components: { AdminMenuComponent, AdminOrderDetailsComponent },
  data() {
    return {
      order: {},
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let response = await axios.get(
        "http://localhost:8081/orders/" + this.$route.params.id,
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.order = response.data.order;
    },
    updateOrder(event) {
      this.order[event.key] = event.value;
    },
    save() {
      // this.order
    }
  },
};
</script>

<style>
</style>