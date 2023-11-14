<template>
  <div class="mt-10 bg-gray-50">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-4"
    >
      <admin-menu-component
        :client="client"
        class="col-span-1"
      ></admin-menu-component>
      <div class="bg-white mt-5 p-10 rounded-md">
        <form action="#" method="POST" class="ml-10">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  v-model="clientDetails.first_name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  v-model="clientDetails.last_name"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  v-model="clientDetails.email"
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label class="block text-sm font-semibold leading-6 text-gray-900"
                >Phone number</label
              >
              <div class="mt-2.5">
                <input
                  v-model="clientDetails.phone"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Address</label
              >
              <div class="relative mt-2.5">
                <input
                  v-model="clientDetails.address"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >City</label
              >
              <div class="relative mt-2.5">
                <input
                  v-model="clientDetails.city"
                  class="block w-30 rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2"></div>
            <button
              @click="save"
              type="button"
              class="px-3 py-2 rounded-md text-white hover:bg-slate-400 duration-200 bg-violet-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <admin-orders-grid-view :orders="orders" />
    </div>
  </div>
</template>
  
  
<script>
import AdminOrdersGridView from "../../components/AdminOrdersGridView.vue";
import Toastify from "toastify-js";
import axios from "axios";

import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client"],
  components: { AdminMenuComponent, AdminOrdersGridView },
  data() {
    return {
      clientDetails: {},
      orders: []
    };
  },
  async mounted() {
    this.loadClientData();
    this.loadOrderData();
  },
  methods: {
    async loadClientData() {
      let response = await axios.get(
        "http://localhost:8081/clients/" + this.$route.params.id,
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.clientDetails = response.data.client;
    },
    async loadOrderData() {
      let response = await axios.get(
        "http://localhost:8081/orders?client_id=" + this.$route.params.id,
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.orders = response.data.orders;
    },
    async save() {
      let response = await axios.put(
        "http://localhost:8081/clients/" + this.$route.params.id,
        this.clientDetails,

        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.clientDetails = response.data.client;

      if (response.data.success) {
        Toastify({
          text: "Tus cambios han sido guardados!",
          position: "center",
          duration: 10000,
        }).showToast();
      }
    },
  },
};
</script>
  
  <style>
</style>