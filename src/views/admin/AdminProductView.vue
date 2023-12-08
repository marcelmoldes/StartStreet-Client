<template>
  <div class="mt-10 bg-gray-50">
    <div
      class="grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-4"
    >
      <admin-menu-component
        :client="client"
        class="col-span-1"
      ></admin-menu-component>

      <div class="bg-white border border-slate-600 mt-5 p-10 rounded-md">
        <form action="#" method="POST" class="ml-10">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6">
            <div>
              <label
                for="phone-number"
                class="block text-sm font-semibold text-gray-900"
                >Title</label
              >
              <div class="relative mt-2.5">
                <input
                  v-model="item.title"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Price</label
              >
              <div class="mt-2.5">
                <input
                  v-model="item.price"
                  type="text"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="location"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Category Id</label
              >
              <select v-model="item.category_id"

                id="location"
                name="location"
                class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option :value="category.id" v-for="category in categories" :key="category">
                  {{ category.title }}
                </option>
              </select>
            </div>

            <div>
              <label
                for="comment"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Description</label
              >
              <div class="mt-2">
                <textarea
                  v-model="item.description"
                  rows="4"
                  name="comment"
                  id="comment"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Product Image</label
              >
              <div class="mt-2 flex flex-col gap-y-2">
                <img
                  class="w-full"
                  :src="
                    item.imageBase64 ? item.imageBase64 : item.images[0].url
                  "
                  v-if="item.images || item.imageBase64"
                />
                <label>Change image:</label>
                <input
                  id="file-upload"
                  @change="handleImage"
                  name="file-upload"
                  type="file"
                  accept="image/*"
                />
                <p class="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>

            <div class="px-24">
              <button
                @click="save"
                type="button"
                class="px-10 py-2 rounded-md text-white text-bold hover:bg-slate-400 duration-200 bg-violet-700"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import { useVuelidate } from "@vuelidate/core";
//import { required, email, minLength, maxLength } from "@vuelidate/validators";
import Toastify from "toastify-js";
import axios from "axios";
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client", "categories", "category"],
  components: {
    AdminMenuComponent,
  },
  data() {
    return {
      item: {},
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      await this.loadData();
    }
  },
  methods: {
    async loadData() {
      let response = await axios.get(
        "http://localhost:8081/admin/items/" +
          (this.$route.params.id ? this.$route.params.id : this.item.id),
        {
          headers: {
            Authorization: this.client ? "Bearer " + this.client.token : null,
          },
        }
      );
      this.item = response.data.item;
    },

    async save() {
      let response;
      let is_new = !this.item.id;
      if (this.item.id) {
        response = await axios.put(
          "http://localhost:8081/admin/items/" + this.item.id,
          this.item,
          {
            headers: {
              Authorization: this.client ? "Bearer " + this.client.token : null,
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:8081/admin/items",
          this.item,
          {
            headers: {
              Authorization: this.client ? "Bearer " + this.client.token : null,
            },
          }
        );
        this.item.id = response.data.item.id;
      }

      if (response.data.success) {
        Toastify({
          text: is_new
            ? "El producto ha sido creado"
            : "Tus cambios han sido guardados!",
          position: "center",
          duration: 1000,
        }).showToast();
      }

      await this.loadData();
    },
    handleImage(e) {
      const fileObject = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.item.imageBase64 = e.target.result;
      };
      reader.readAsDataURL(fileObject);
    },
  },
};
</script>

<style>
</style>