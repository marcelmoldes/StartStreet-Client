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
    };
  },
  async mounted() {
    await this.loadData();
    this.drawOrdersChart();
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
    drawOrdersChart() {
      const orders = [
        { year: 2010, sales: 10, returns: 2 },
        { year: 2011, sales: 20, returns: 4 },
        { year: 2012, sales: 15, returns: 3 },
        { year: 2013, sales: 25, returns: 3 },
        { year: 2014, sales: 22, returns: 5 },
        { year: 2015, sales: 30, returns: 2 },
        { year: 2016, sales: 28, returns: 6 },
      ];

      const labels = orders.map((object) => {
        return object.year;
      });

      const sales = orders.map((object) => {
        return object.sales;
      });

      const returns = orders.map((object) => {
        return object.returns;
      });

      new Chart(document.getElementById("ordersChart"), {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Sales by year",
              data: sales,
            },
            {
              label: "Returns by year",
              data: returns,
            },
          ],
        },
      });
    },
  },
};
</script>