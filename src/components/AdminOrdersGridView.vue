<template>
  <div class="py-4 col-span-3 mr-12">
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-bold">Manage Orders</h1>
    </div>

    <div class="bg-white mt-4 p-4 rounded-sm">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <p class="text-sm text-gray-700">
              Showing
              {{ " " }}
              <span class="font-medium">{{ startingAt }}</span>

              to

              <span class="font-medium">{{ endingAt }}</span>

              of

              <span class="font-medium">{{ orders.length }}</span>

              results
            </p>
          </div>

          <select
            v-model="recordsPerPage"
            id="location"
            name="location"
            class="mt-2 block w-30 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>5</option>
            <option selected="">20</option>
            <option>30</option>
          </select>
        </div>
        <div class="flow-root">
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
                      class="text-center text-sm font-semibold text-gray-900 sm:pl-0 w-18"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="order in pageOfOrders" :key="order">
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
                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-0"
                    >
                      <a
                        :href="`/admin/orders/${order.id}`"
                        class="bg-violet-600 text-white px-3 py-1 rounded-sm"
                        >Edit</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                class="flex items-center justify-between border-t border-gray-200 bg-white py-3"
              >
                <div class="flex flex-1 justify-between sm:hidden">
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >Previous</a
                  >
                  <a
                    href="#"
                    class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >Next</a
                  >
                </div>
                <div
                  class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
                >
                  <div>
                    <p class="text-sm text-gray-700">
                      Showing
                      {{ " " }}
                      <span class="font-medium">{{ startingAt }}</span>

                      to

                      <span class="font-medium">{{ endingAt }}</span>

                      of

                      <span class="font-medium">{{ orders.length }}</span>

                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <button
                        href="#"
                        class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        :class="currentPage === 1 ? 'opacity-50' : ''"
                        :disabled="currentPage === 1"
                        @click.prevent="currentPage -= 1"
                      >
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                      <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                      <a
                        @click.prevent="currentPage = page"
                        href="#"
                        aria-current="page"
                        :class="
                          currentPage === page
                            ? 'relative z-10 inline-flex items-center bg-indigo-600 text-white font-semibold px-4 py-2 text-sm focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            : 'relative inline-flex items-center px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                        "
                        v-for="page in pages"
                        :key="page"
                        >{{ page }}</a
                      >
                      <button
                        href="#"
                        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        :class="currentPage === pages ? 'opacity-50' : ''"
                        :disabled="currentPage === pages"
                        @click.prevent="currentPage += 1"
                      >
                        <span class="sr-only">Next</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </nav>
                  </div>
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
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/20/solid";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: ["client", "orders"],
  computed: {
    pageOfOrders() {
      return this.orders.slice(this.startingAt - 1, this.endingAt);
    },
    startingAt() {
      return (this.currentPage - 1) * this.recordsPerPage + 1;
    },
    endingAt() {
      const endingAt =
        (this.currentPage - 1) * this.recordsPerPage + this.recordsPerPage;
      if (endingAt > this.orders.length) {
        return this.orders.length;
      }
      return endingAt;
    },
    pages() {
      return Math.ceil(this.orders.length / this.recordsPerPage);
    },
  },
  data() {
    return {
      recordsPerPage: 5,
      currentPage: 1,
    };
  },
};
</script>

<style>
</style>