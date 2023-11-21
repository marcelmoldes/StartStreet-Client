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
          Manage Categories
        </h1>
        <select
          class="mt-2 text-center bg-white rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <a href=""></a>
          <option v-for="page in pages" :key="page" @click="currentPage = page">
            Show
          </option>
        </select>
        <div class="bg-white mt-4 p-4 rounded-sm">
          <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">
                  Categories
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
                          Title
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                            Slug
                        </th>

                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                            Images
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                      <tr v-for="categorie in pageOfOrders" :key="categorie">
                        <td
                          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                        >
                          {{ categorie.createdAt }}
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                        >
                           {{ categorie.title }}
                        </td>

                        <td
                          class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                        >{{ categorie.slug }}</td>


                        <td
                          class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                        >   <a :src="categorie.photo_url"></a> </td>         
                      </tr>


                    </tbody>
                  </table>

                  <div
                    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
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

                          <span class="font-medium">{{
                            categories.length
                          }}</span>

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
                            @click="currentPage -= 1"
                          >
                            <span class="sr-only">Previous</span>
                            <ChevronLeftIcon
                              class="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                          <a
                            @click="currentPage = page"
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
                            @click="currentPage += 1"
                          >
                            <span class="sr-only">Next</span>
                            <ChevronRightIcon
                              class="h-5 w-5"
                              aria-hidden="true"
                            />
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
    </div>
  </div>
</template>
    
    <script>
import axios from "axios";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/20/solid";
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client"],
  components: { AdminMenuComponent, ChevronRightIcon, ChevronLeftIcon },
  computed: {
    pageOfOrders() {
      return this.categories.slice(this.startingAt - 1, this.endingAt);
    },
    startingAt() {
      return (this.currentPage - 1) * this.recordsPerPage + 1;
    },
    endingAt() {
      const endingAt =
        (this.currentPage - 1) * this.recordsPerPage + this.recordsPerPage;
      if (endingAt > this.categories.length) {
        return this.categories.length;
      }
      return endingAt;
    },
    pages() {
      return Math.ceil(this.categories.length / this.recordsPerPage);
    },
    y() {
      return this.recordsPerPage;
    },
  },
  data() {
    return {
      recordsPerPage: 6,
      currentPage: 1,
      categories: [],
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      let response = await axios.get("http://localhost:8081/categories", {
        headers: {
          Authorization: this.client ? "Bearer " + this.client.token : null,
        },
      });
      this.categories = response.data.categories;
    },
  },
};
</script>