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
        <h1 class="text-xl font-bold">Admin Dashboard</h1>
        <div class="bg-white mt-4 p-4 rounded-sm">
          <h1 class="font-bold">Sales Summary</h1>
          <div>
            <dl
              class="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4"
            >
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Revenue
                </dt>
                {{ stats.revenue }}
                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                ></dd>
              </div>
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Orders
                </dt>
                {{ stats.orders }}
                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                ></dd>
              </div>
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Clients
                </dt>
                {{ stats.clients }}
                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                ></dd>
              </div>
              <div
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8"
              >
                <dt class="text-sm font-medium leading-6 text-gray-500">
                  Average Order Value
                </dt>
                {{ stats.average_order_value }}
                <dd
                  class="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900"
                ></dd>
              </div>
            </dl>
          </div>
          <div>
            <h1 class="font-bold">Store Statistics</h1>
            <canvas id="ordersChart"></canvas>
          </div>
          <div>
            <h1 class="font-bold">Clients Statistics</h1>
            <canvas class="text-lg font-bold" id="clientsChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
import Chart from "chart.js/auto";

export default {
  props: ["client"],
  components: { AdminMenuComponent },
  data() {
    return {
      stats: {},
      clients: {},
    };
  },
  async mounted() {
    await this.loadData();
    this.drawOrdersChart();
    this.drawClientsChart();
  },
  methods: {
    async loadData() {
      let response = await axios.get("http://localhost:8081/orders/stats", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.stats = response.data.stats;
    },
    async drawOrdersChart() {
      const response = await axios.get("http://localhost:8081/admin/stats", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });

      const stats = response.data.stats;

      const labels = stats.map((object) => {
        return object.label;
      });

      const total = stats.map((object) => {
        return object.total;
      });

      new Chart(document.getElementById("ordersChart"), {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Revenue by year",
              data: total,
            },
          ],
        },
      });
    },
    async drawClientsChart() {
      const response = await axios.get("http://localhost:8081/admin/clients", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });

      const clients = response.data.clients;

      const labels = clients.map((object) => {
        return object.label;
      });

      const id = clients.map((object) => {
        return object.id;
      });

      new Chart(document.getElementById("clientsChart"), {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Clients registered by year",
              data: id,
            },
          ],
        },
      });
    },
  },
};
</script>