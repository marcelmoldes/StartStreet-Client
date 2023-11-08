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
        <h1 class="text-xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
            />
          </svg>
          Manage Orders
        </h1>
        <div class="bg-white mt-4 p-4 rounded-sm">
          <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">
                  Orders
                </h1>
              </div>
              <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
            </div>
            <div class="mt-8 flow-root">
              <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Number
                        </th>
                        <th
                          scope="col"
                          class="text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          class="text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          Shipping Status
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Shipping Company
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Tracking Number
                        </th>
                        <th
                          scope="col"
                          class="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        ></th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr v-for="order in orders" :key="order">
                        <td
                          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                        >
                          {{ order.createdAt }}
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                          # {{ order.order_number }}
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                          {{ order.email }}
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                          $ {{ order.total }}
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                          <div>
                            {{ order.shipping_status }}
                          </div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                          <div>
                            {{ order.shipping_company }}
                          </div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                          <div>
                            {{ order.tracking_number }}
                          </div>
                        </td>
                        <td
                          class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                        >
                          <a
                            :href="`/admin/orders/${order.id}`"
                            class="bg-violet-600 px-3 py-1 rounded-sm"
                            >View</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client"],
  components: { AdminMenuComponent },
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    await this.loadData();
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