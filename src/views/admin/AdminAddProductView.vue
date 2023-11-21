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
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold text-gray-900"
                >Title</label
              >
              <div class="relative mt-2.5">
                <input
                  v-model="item.title"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Slug</label
              >
              <div class="mt-2.5">
                <input
                  v-model="item.slug"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Category Id</label
              >
              <div class="mt-2.5">
                <input
                  v-model="item.category_id"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Product Image</label
              >
              <div
                class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
              >
                <div class="text-center">
                  <PhotoIcon
                    class="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

            <div class="px-24">
              <button
                @click="createItem"
                type="button"
                class="px-8 rounded-md text-white text-bold hover:bg-slate-400 duration-200 bg-violet-700"
              >
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Toastify from "toastify-js";
import axios from "axios";
import AdminMenuComponent from "@/components/AdminMenuComponent.vue";
export default {
  props: ["client"],
  components: {
    AdminMenuComponent,
  },
  data() {
    return {
      item: {
        title: "",
        price: "",
        slug: "",
        category_id: "",
      },
    };
  },
  methods: {
    async createItem() {
      let response = await axios.post("http://localhost:8081/items/", {
        title: this.item.title,
        price: this.item.price,
        slug: this.item.slug,
        category_id: this.item.category_id,
      });
      if (response.data.success) {
        Toastify({
          text: "Tus cambios han sido guardados!",
          position: "center",
          duration: 1000,
        }).showToast();
      }
    },
  },
};
</script>

<style>
</style>